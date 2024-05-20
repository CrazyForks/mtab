<?php
declare (strict_types=1);

namespace app\command;

use app\controller\Api;
use think\console\Command;
use think\console\Input;

use think\console\Output;

class test extends Command
{
    protected function configure()
    {
        // 指令配置
        $this->setName('test')
            ->setDescription('脚本测试');
    }

    protected function execute(Input $input, Output $output)
    {
        $res = new Api($this->app);
        print_r($res->upload()->getData());
    }
}
