# DCL相关语句

## 用户管理
  ```SQL
  -- 只能在本机访问数据库
  create user 'hpy'@'localhost' identified by '123456';
  -- 可以在任意主机访问数据库
  create user 'phy'@'%' identified by '123456';
  -- 修改密码
  alter user 'phy'@'%' identified with mysql_native_password by '123123';
  -- 删除用户
  drop user 'phy'@'%';
  ```

## 权限管理: 
  1. ALL, all privileges 所有权限
  2. SELECT 查询数据
  3. INSERT 插入数据
  4. UPDATE 修改数据
  5. DELETE 删除数据
  6. ALTER 修改表
  7. DROP 删除数据库/表/视图
  8. CREATE 创建数据库/表
   
  ```SQL
  -- 1: 查询权限
  show grants for 'hpy'@'localhost';
  -- 2: 授予权限
  grant 权限列表 on my_blogs.users to 'hpy'@'localhost';
  -- 3: 撤销权限
  revoke 权限列表 on my_blogs.users from 'hpy'@'localhost';
  ```