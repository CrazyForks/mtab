<?php

namespace think;
define('app_version', '2.0.1');
define('app_version_code', 201);
require __DIR__ . '/../vendor/autoload.php';

// 执行HTTP应用并响应
$http = (new App())->http;

$response = $http->run();

$response->send();

$http->end($response);
