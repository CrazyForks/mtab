<?php

namespace app\model;

use think\Model;

class FileModel extends Model
{
    protected $name = "file";
    protected $pk = "id";

    function getPathAttr($value)
    {
        return joinPath("/", $value);
    }

    public static function addFile($file, $user_id = null)
    {
        $originPath = joinPath(public_path(), $file);
        if (file_exists($originPath)) {
            $info = [];
            $info["path"] = $file;
            $info["user_id"] = $user_id;
            $info['create_time'] = date("Y-m-d H:i:s");
            $info['size'] = filesize($originPath);
            $info['hash'] = hash_file("md5", $originPath);
            $info["mime_type"] = mime_content_type($originPath);
            self::insert($info);
            return $info;
        }
        return false;
    }

    function user(): \think\model\relation\HasOne
    {
        return $this->hasOne(UserModel::class, "id", "user_id")->field("id,nickname,mail");
    }
}