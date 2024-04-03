<?php

namespace think;
define('app_version', '1.7.3');
define('app_version_code', 73);
require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
