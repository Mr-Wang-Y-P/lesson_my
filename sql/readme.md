- sqlserver mysql 关系型数据库
- mongodb NOSQL 存储JSON文档 杂乱无章

- blog
    - 用户表
        登录    鉴权    + role 分配
        id(自增 int 11)  username(varchar 255)    password(varchar 不能加明文，hash 加密)
        索引？  PRIMARY KEY(`id`) 查询更快
        
        1. 密码不能存明文,jav/node mvc 用户表单传过来的password 123456
        md5 单向加密的方式 先加密再存到数据库
            数据库被攻击，解密的话，
            md5(123456)==password
        2.  CREATE TABLE `user`(
            field int(11) AUTO_INCREMENT NOT NULL,
                varchar(255)
                longtext
            PRIMARY KEY(`id`),
            UNIQUE KEY `name`(`name`)
        )   ENGINE=

        web http 默认服务 80

        select * from user where id=1; O(1)

-   create database blog;   新建blog项目对应的数据库
    MySQL 端口：3306  启动的数据服务
    java/node/go    3000  http服务  sql 请求


-  文章列表？ select 索引？ index 查询更快 查询更快 |更快
    primary key(`id`)


    文章表 主表
    用户表 附属于

      文章的列表（包含用户信心）  

- select post.id, post.title, post.content, user.id as userId,user.name as userName  from post LEFT JOIN user ON user.id=post.userId;
    联合查询的一种  JOIN 
    LEFT JOIN   左边的是主表 
    ON  条件  user.id = post.id  
