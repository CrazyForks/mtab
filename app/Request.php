<?php

namespace app;


class Request extends \think\Request
{

    function __construct()
    {
        //解决跨域响应
        header('Access-Control-Allow-Origin:*');
        header('Access-Control-Allow-Methods:*');
        header('Access-Control-Allow-Headers:*');
        parent::__construct();
    }
}
