<?php

namespace app\controller;

use app\BaseController;
use app\model\FileModel;
use app\model\LinkModel;
use app\model\SettingModel;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use PHPHtmlParser\Dom;
use think\facade\Cache;
use think\facade\Filesystem;
use think\facade\Log;
use think\facade\View;
use think\helper\Str;

class Api extends BaseController
{
    public function site(): \think\response\Json
    {
        return $this->success("ok", [
            'email' => $this->systemSetting('email', ''),
            'qqGroup' => $this->systemSetting("qqGroup", ''),
            'beianMps' => $this->systemSetting("beianMps", ''),
            'copyright' => $this->systemSetting("copyright", ''),
            "recordNumber" => $this->systemSetting("recordNumber", ''),
            "mobileRecordNumber" => $this->systemSetting('mobileRecordNumber', '0'),
            "auth" => $this->auth,
            "logo" => $this->systemSetting('logo', ''),
            "qq_login" => $this->systemSetting('qq_login', '0'),
            "loginCloseRecordNumber" => $this->systemSetting('loginCloseRecordNumber', '0'),
            "is_push_link_store" => $this->auth ? $this->systemSetting('is_push_link_store', '0') : '0',
            "is_push_link_store_tips" => $this->systemSetting('is_push_link_store_tips', '0'),
            "is_push_link_status" => $this->systemSetting("is_push_link_status", '0'),
            'google_ext_link' => $this->systemSetting("google_ext_link", ''),
            'edge_ext_link' => $this->systemSetting("edge_ext_link", ''),
            'local_ext_link' => $this->systemSetting("local_ext_link", ''),
            "customAbout" => $this->systemSetting("customAbout", ''),
            "user_register" => $this->systemSetting("user_register", '0', true)
        ]);
    }

    public function background(): \think\response\File
    {
        return download('static/background.jpeg', 'background.jpeg')->mimeType(\PluginStaticSystem::mimeType('static/background.jpeg'))->force(false)->expire(60 * 60 * 24 * 3);
    }

    //获取默认壁纸
    function DefBg(): \think\response\Json
    {
        $config = $this->systemSetting('defaultTab', 'static/defaultTab.json', true);
        if ($config) {
            $fp = public_path() . $config;
            if (file_exists($fp)) {
                $file = file_get_contents($fp);
                $json = json_decode($file, true);
                if (isset($json['config']['theme']['backgroundImage'])) {
                    $bg = $json['config']['theme']['backgroundImage'];
                    $bgMime = $json['config']['theme']['backgroundMime'] ?? 0;
                    return $this->success("ok", ['background' => $bg, "mime" => $bgMime]);
                }
            }
        }
        return $this->success("ok", ['background' => "static/background.jpeg", "mime" => 0]);
    }

    function globalNotify(): \think\response\Json
    {
        $info = SettingModel::Config("globalNotify", false);
        if ($info) {
            return $this->success('ok', $info);
        }
        return $this->error('empty');
    }

    //获取邮件验证码
    function getMailCode(): \think\response\Json
    {
        $mail = $this->request->post("mail", false);
        $code = rand(100000, 999999);
        if ($mail) {
            if (Cache::get('code' . $mail)) {
                return $this->success("请勿频繁获取验证码");
            }
            $k = SettingModel::Config('smtp_code_template', false);
            if ($k === false || mb_strlen(trim($k)) == 0) {
                $k = '
                        <div style="border:1px #DEDEDE solid;border-top:3px #009944 solid;padding:25px;background-color:#FFF;">
                            <div style="font-size:17px;font-weight:bold;">邮箱验证码</div>
                            <div style="font-size:14px;line-height:36px;padding-top:15px;padding-bottom:15px;">
                                尊敬的用户，您好！<br>
                                您的验证码是：<b style="color: #1e9fff">{$code}</b>。5分钟内有效，请尽快验证。
                            </div>
                            <div style="line-height:15px;">
                                此致
                            </div>
                        </div>
                ';
            }
            $html = View::display($k, ['time' => date('Y-m-d H:i:s'), 'code' => $code]);
            try {
                $status = \Mail::send($mail, $html);
                if ($status) {
                    Cache::set('code' . $mail, $code, 300);
                    return $this->success('发送成功');
                }
            } catch (\Exception $e) {
                return $this->error($e->getMessage());
            }

        }
        return $this->error('发送失败');
    }

    private function addHttpProtocolRemovePath($url): string
    {
        // 解析URL
        $parsedUrl = parse_url($url);
        // 检查是否已经有协议，如果没有则添加http://
        if (!isset($parsedUrl['scheme'])) {
            // 检查是否以 // 开头，如果是，则转换为相对协议
            if (isset($parsedUrl['host']) && strpos($url, '//') === 0) {
                $url = 'http:' . $url;
            } else {
                $url = 'http://' . $url;
            }
        } else {
            // 如果有协议但没有路径，保留原样
            $url = $parsedUrl['scheme'] . '://';
            // 如果有主机，则添加主机部分
            if (isset($parsedUrl['host'])) {
                $url .= $parsedUrl['host'];
                // 如果有端口号，则添加端口号
                if (isset($parsedUrl['port'])) {
                    $url .= ':' . $parsedUrl['port'];
                }
            }
        }
        return $url;
    }

    private function addHttpProtocol($url)
    {
        // 检查是否已经有协议，如果没有则添加http://
        if (!parse_url($url, PHP_URL_SCHEME)) {
            // 检查是否以 // 开头，如果是，则转换为相对协议
            if (strpos($url, '//') === 0) {
                $url = 'https:' . $url;
            } else {
                $url = 'http://' . $url;
            }
        }
        return $url;
    }

    private function hasOnlyPath($url): bool
    {
        if(!$url){
            return false;
        }
        $parsedUrl = parse_url($url);
        // 检查是否存在路径但不存在域名和协议
        if (isset($parsedUrl['path']) && !isset($parsedUrl['host']) && !isset($parsedUrl['scheme'])) {
            return true;
        }
        return false;
    }


    function getIcon(): \think\response\Json
    {
        $avatar = $this->request->post('avatar');
        if ($avatar) {
            $remote_avatar = $this->systemSetting("remote_avatar", "https://avatar.mtab.cc/6.x/icons/png?seed=", true);
            $str = $this->downloadFile($remote_avatar . $avatar, md5($avatar) . '.png');
            return $this->success(['src' => $str]);
        }
        $url = $this->request->post('url', false);
        $icon = "";
        $cdn = $this->systemSetting('assets_host', '');
        $title = "";
        if ($url) {
            $realUrl = $this->addHttpProtocolRemovePath($url);
            $client = \Axios::http();
            try {
                $response = $client->get($realUrl, [
                    'headers' => [
                        "User-Agent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                    ]
                ]);
                $status = $response->getStatusCode();
            } catch (\Exception $e) {
                return $this->error('无法连接远程目标服务器');
            }
            if ($status == 200) {
                $body = $response->getBody()->getContents();
                $dom = new Dom();
                $dom->loadStr($body);
                $titles = $dom->find('title');
                if (count($titles) > 0) {
                    $title = $titles->innerText;
                }
                try {
                    $list = $dom->find('[rel="icon"]');
                    if (count($list) > 0) {
                        $href = $list->href;
                        if ($this->hasOnlyPath($href)) {
                            if ($href[0] != '/') {
                                $href = "/" . $href;
                            }
                            $href = $realUrl . $href;
                        }
                        $href = $this->addHttpProtocol($href);
                        $icon = $href;
                        $response = \Axios::http()->get($icon, [
                            'headers' => [
                                'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                            ]
                        ]);
                        $contentType = $response->getHeader('content-type');
                        $contentType = $contentType[0];
                        if (preg_match('/(png|jpg|jpeg|x-icon|svg\+xml)$/', $contentType, $matches)) {
                            $contentType = array(
                                'png' => 'png',
                                'jpg' => 'jpg',
                                'jpeg' => 'jpeg',
                                'x-icon' => 'ico',
                                'svg+xml' => 'svg',
                            );
                            $fileFormat = $matches[1];
                            $icon = $this->downloadFile($icon, md5($realUrl) . '.' . $contentType[$fileFormat]);
                            if ($icon) {
                                $icon = $cdn . $icon;
                            }
                        } else {
                            $icon = '';
                        }
                    }
                } catch (\ErrorException $e) {
                }
            }
            if (strlen($icon) == 0) {
                try {
                    $client = \Axios::http();
                    $response = $client->get($realUrl . '/favicon.ico');
                    $status = $response->getStatusCode();
                    if ($status == 200) {
                        $icon = $realUrl . '/favicon.ico';
                        $icon = $this->downloadFile($icon, md5($realUrl) . '.ico');
                        if ($icon) {
                            $icon = $cdn . $icon;
                        }
                    }
                } catch (\Exception $e) {
                }
            }
            if (strlen($icon) > 0) {
                return $this->success(['src' => $icon, 'name' => $title]);
            }
        }
        return $this->error('没有抓取到图标');
    }

    private function downloadFile($url, $name)
    {
        $user = $this->getUser();
        $client = \Axios::http();
        $path = '/images/' . date('Y/m/d/');
        $remotePath = public_path() . $path;
        $downloadPath = $remotePath . $name;
        if (!is_dir($remotePath)) {
            mkdir($remotePath, 0755, true);
        }
        try {
            $response = $client->request('GET', $url, [
                'sink' => $downloadPath,
                'headers' => [
                    'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                ]
            ]);
            FileModel::addFile($path . $name, $user['user_id'] ?? null);
            return $path . $name;
        } catch (RequestException $e) {
        }
        return false;
    }

    function renderIco(): \think\Response
    {
        $send = $this->request->get('seed');
        $client = new Client();
        $remote_avatar = $this->systemSetting('remote_avatar', 'https://avatar.mtab.cc/6.x/icons/png?seed=', true);
        $response = $client->get($remote_avatar . urlencode($send), [
            'stream' => true,
            'timeout' => 10,
        ]);
        return response($response->getBody(), 200, ['Content-Type' => $response->getHeader("content-type")[0]]);
    }

    function upload(): \think\response\Json
    {
        $user = $this->getUser();
        if (!$user) {
            if ($this->systemSetting('touristUpload') !== '1') {
                //如果没有开启游客上传
                return $this->error('管理员已关闭游客上传！请登录后使用');
            }
        }
        $type = $this->request->header("Up-Type", '');
        $file = $this->request->file('file');
        if (empty($file)) {
            return $this->error('not File');
        }
        $maxSize = (double)$this->systemSetting('upload_size', '2');
        if ($file->getSize() > 1024 * 1024 * $maxSize) {
            $limit = $maxSize < 1 ? ($maxSize * 1000) . 'KB' : ($maxSize) . 'MB';
            return $this->error("文件最大$limit,请压缩后再试");
        }
        if (in_array(strtolower($file->getOriginalExtension()), ['png', 'jpg', 'jpeg', 'webp', 'ico', 'svg'])) {
            // 验证文件并保存
            try {
                // 构建保存路径
                $savePath = '/images/' . date('Y/m/d');
                $hash = Str::random(32);
                $fileName = $hash . '.' . $file->getOriginalExtension();
                $filePath = Filesystem::disk('images')->putFileAs($savePath, $file, $fileName);
                $minPath = '';
                if ($type == 'icon' || $type == 'avatar') {
                    $fp = joinPath(public_path(), $filePath);
                    $image = new \ImageBack($fp);
                    $image->resize(144, 0)->save($fp);
                } else if ($type == 'AdminBackground') {
                    $minPath = joinPath($savePath, "/min_$fileName");
                    $fp = joinPath(public_path(), $filePath);
                    $image = new \ImageBack($fp);
                    $image->resize(400, 0)->save(joinPath(public_path(), $minPath));
                    FileModel::addFile($minPath, $user['user_id'] ?? null);
                }
                $cdn = $this->systemSetting('assets_host', '/', true);
                FileModel::addFile($filePath, $user['user_id'] ?? null);
                return $this->success(['url' => $cdn . $filePath, "minUrl" => joinPath($cdn, $minPath)]);
            } catch (\think\exception\ValidateException $e) {
                return $this->error($e->getMessage());
                // 验证失败，给出错误提示
                // ...
            }
        }
        return $this->error('上传失败');
    }

    function AdminUpload(): \think\response\Json
    {
        $user = $this->getAdmin();
        $file = $this->request->file('file');
        if (empty($file)) {
            return $this->error('not File');
        }
        if ($file->getSize() > 1024 * 1024 * 5) {
            return $this->error('max fileSize is 5M');
        }
        // 验证文件并保存
        try {
            // 构建保存路径
            $savePath = '/images/' . date('Y/m/d');
            $hash = Str::random(32);
            $fileName = $hash . '.' . $file->getOriginalExtension();
            $filePath = Filesystem::disk('images')->putFileAs($savePath, $file, $fileName);
            $cdn = $this->systemSetting('assets_host', '/', true);
            FileModel::addFile($filePath, $user['user_id'] ?? null);
            return $this->success(['url' => $cdn . $filePath]);
        } catch (\think\exception\ValidateException $e) {
            // 验证失败，给出错误提示
            // ...
        }
        return $this->error('上传失败');
    }

    function refresh(): \think\response\Json
    {
        $user = $this->getUser();
        if ($user) {
            $data = [];
            $data['link_update_time'] = LinkModel::where("user_id", $user['user_id'])->value("update_time");
            return $this->success("ok", $data);
        }
        return $this->error("not login");
    }
}
