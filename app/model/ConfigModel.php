<?php
/*
 * @description:
 * @Date: 2022-09-26 20:27:01
 * @LastEditTime: 2022-09-26 20:27:53
 */

namespace app\model;

use think\Model;

class ConfigModel extends Model
{
    protected $name = "config";
    protected $pk = "user_id";
    protected $jsonAssoc = true;
    protected $json = ['config'];
}
