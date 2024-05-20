# 创建Card数据表

create table if not exists card
(
    id int auto_increment
        primary key
) comment '卡片数据表';


alter table card
    add name varchar(200) null;

alter table card
    add name_en varchar(200) null;

alter table card
    add status int default 0 null;

alter table card
    add version int default 0 null;

alter table card
    add tips varchar(255) null comment '说明';

alter table card
    add create_time datetime null comment '添加时间';

alter table card
    add src text null comment 'logo';

alter table card
    add url varchar(255) null comment '卡片地址';

alter table card
    add `window` varchar(255) null comment '窗口地址';

alter table card
    add update_time datetime null;

alter table card
    add install_num int default 0 null;

alter table card
    add setting varchar(200) null comment '设置页面的url';

alter table card
    add dict_option longtext null comment '配置的参数';


#创建config数据表

create table if not exists config
(
    user_id int null
) comment '用户配置数据表';

create index config_user_id_index
    on config (user_id);

alter table config
    add config longtext null;

# 创建file数据表

create table if not exists file
(
    id bigint auto_increment
        primary key
)
    comment '文件';

alter table file
    add path varchar(255) null;

alter table file
    add user_id int null;

alter table file
    add create_time datetime null;

alter table file
    add size double default 0 null comment '尺寸';

alter table file
    add mime_type varchar(100) null comment '文件类型';


#创建history数据表

create table if not exists history
(
    id bigint auto_increment
        primary key,

    constraint history_id_uindex
        unique (id)
)
    comment 'link历史数据';

alter table history
    add user_id int null;

alter table history
    add link longtext null;

alter table history
    add create_time datetime null comment '创建时间';


#创建link数据表

create table if not exists link
(
    user_id int null
);

create index link_user_id_index
    on link (user_id);


alter table link
    add update_time datetime null comment '更新时间';

alter table link
    add link longtext null;


#创建link_folder数据表

create table if not exists link_folder
(
    id int auto_increment comment 'id'
        primary key
)
    comment '标签链接分类';

alter table link_folder
    add name varchar(50) null comment '分类名称';

alter table link_folder
    add sort int default 0 null;


#创建link_store数据表

create table if not exists linkstore
(
    id int auto_increment
        primary key,
    constraint linkStore_id_uindex
        unique (id)
);

alter table linkstore
    add name varchar(255) null;

alter table linkstore
    add src varchar(255) null;

alter table linkstore
    add url varchar(255) null;

alter table linkstore
    add type varchar(20) default 'icon' null;

alter table linkstore
    add size varchar(20) default '1x1' null;

alter table linkstore
    add create_time datetime null;

alter table linkstore
    add hot bigint default 0 null;

alter table linkstore
    add area varchar(20) default '' null comment '专区';

alter table linkstore
    add tips varchar(255) null comment '介绍';

alter table linkstore
    add domain varchar(255) null;

alter table linkstore
    add app int default 0 null comment '是否app';

alter table linkstore
    add install_num int default 0 null comment '安装量';

alter table linkstore
    add bgColor varchar(30) null comment '背景颜色';

alter table linkstore
    add vip int default 0 null comment '是否会员可见 0所有人 1=会员';

alter table linkstore
    add custom text null comment '自定义配置';

alter table linkstore
    add user_id int null comment '用户id';

alter table linkstore
    add status int default 1 null comment '状态 1=展示 0=待审核';


#创建note数据表

create table if not exists note
(
    id bigint auto_increment
        primary key,
    constraint note_id_uindex
        unique (id)
);

alter table note
    add user_id bigint null;

alter table note
    add title varchar(50) null;

alter table note
    add text text null;

alter table note
    add create_time datetime null;

alter table note
    add update_time datetime null;

alter table note
    add weight int default 0 null;

create index note_user_id_index
    on note (user_id);

#创建search_engine数据表

create table if not exists search_engine
(
    id int auto_increment
        primary key
)
    comment '搜索引擎';

alter table search_engine
    add name varchar(50) null comment '名称';

alter table search_engine
    add icon varchar(255) null comment '图标 128x128';

alter table search_engine
    add url varchar(255) null comment '跳转url';

alter table search_engine
    add sort int default 0 null comment '排序';

alter table search_engine
    add create_time datetime null comment '添加时间';

alter table search_engine
    add status int default 0 null comment '状态 0=关闭 1=启用';

alter table search_engine
    add tips varchar(250) null comment '搜索引擎介绍';


#创建setting表

create table if not exists setting
(
    `keys` varchar(200) not null
        primary key
);

alter table setting
    add value text null;

#创建tabbar数据表

create table if not exists tabbar
(
    user_id int null
)
    comment '用户页脚信息';

alter table tabbar
    add tabs longtext null;

alter table tabbar
    add update_time datetime null;

#创建token表

create table if not exists token
(
    id bigint auto_increment
        primary key,
    constraint token_id_uindex
        unique (id)
);

alter table token
    add user_id int null;

alter table token
    add token tinytext null;

alter table token
    add create_time int null;

alter table token
    add ip tinytext null;

alter table token
    add user_agent tinytext null;

alter table token
    add access_token varchar(200) null comment 'qq的令牌';


#创建user表

create table if not exists user
(
    id int auto_increment
        primary key,
    constraint user_id_uindex
        unique (id)
);

alter table user
    add avatar varchar(255) null comment '头像';

alter table user
    add mail varchar(50) null;

alter table user
    add password tinytext null;

alter table user
    add create_time datetime null;

alter table user
    add login_ip varchar(100) null comment '登录IP';

alter table user
    add register_ip varchar(100) null comment '注册IP';

alter table user
    add manager int default 0 null;

alter table user
    add login_fail_count int default 0 null;

alter table user
    add login_time datetime null comment '登录时间';

alter table user
    add qq_open_id varchar(200) null comment 'qq开放平台Id';

alter table user
    add nickname varchar(200) null comment '昵称';

alter table user
    add status int default 0 null comment '用户账号状态 0正常 1冻结';

#创建user_search_engine表

create table if not exists user_search_engine
(
    user_id int not null
        primary key,
    constraint user_search_engine_pk
        unique (user_id)
)
    comment '用户搜索引擎同步表';

alter table user_search_engine
    add list longtext null;


#创建wallpaper表

create table if not exists wallpaper
(
    id int auto_increment
        primary key
);

alter table wallpaper
    add type int null comment '1=folder；0=assets';

alter table wallpaper
    add folder int null comment '0';

alter table wallpaper
    add mime int default 0 null comment '文件类型0=images，1=video';

alter table wallpaper
    add url text null comment '图片地址';

alter table wallpaper
    add cover text null comment '封面';

alter table wallpaper
    add create_time datetime null;

alter table wallpaper
    add name varchar(200) null comment '标题';

alter table wallpaper
    add sort int default 999 null;

##创建结束

#补充内容 针对<5.7数据库使用longtext

alter table history
    modify link longtext null;

alter table link
    modify link longtext null;

alter table config
    modify config longtext null;

alter table tabbar
    modify tabs longtext null;

alter table user_search_engine
    modify list longtext null;

#补充结束