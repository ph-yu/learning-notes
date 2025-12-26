# DDL相关语句

```SQL
-- 查看数据库：
show databases;

-- 使用数据库：
use 数据库名称;

-- 查看当前使用的数据库：
select database();

-- 创建数据库：
create database 数据库名称 [charset UTF8];

-- 删除数据库：
drop database 数据库名称;
```

```SQL
需要先指定在哪个数据库下

-- 查看有哪些表：
show tables;

-- 创建表：
create table 表名称(列名称 列类型, 列名称 列类型, ....);

-- 删除表：
drop table 表名称;
```