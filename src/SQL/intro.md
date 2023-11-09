# SQL操作数据库的专用工具

## 分类

  - 数据定义：DDL（Data Definition Language）
    - 库的创建删除、表的创建删除等
  - 数据操纵：DML（Data Manipulation Language）
    - 新增数据、删除数据、修改数据等
  - 数据控制：DCL（Data Control Language）
    - 新增用户、删除用户、密码修改、权限管理等
  - 数据查询：DQL（Data Query Language）
    - 基于需求查询和计算数据


## 特征
  - SQL大小写不敏感
  - SQL语句都以;结尾
  - 注释
    - 单行注释： -- 注释内容 （--后面一定要有个空格）
    - 单行注释： # 注释内容 （#后面可以不加空格， 推荐加上）
    - 多行注释：/* 注释内容 */

## DDL相关语句
```SQL
查看数据库：show databases;
使用数据库：use 数据库名称;
查看当前使用的数据库：select database();
创建数据库：create database 数据库名称 [charset UTF8];
删除数据库：drop database 数据库名称;
```
```SQL
需要先指定在哪个数据库下
查看有哪些表：show tables;
创建表：create table 表名称(列名称 列类型, 列名称 列类型, ....);
删除表：drop table 表名称;
```

## DML相关语句
```SQL
insert into 表名称(列1, 列2) values(值1, 值2);
delete from 表名称 [ where 条件判断 ];
update 表名称 set 列=值 [where 条件判断];
```

## DQL相关语句
- 去重：distinct
- 条件查询：where 条件列表
  - &gt; 大于
  - &gt;=
  - <
  - &lt;=
  - =
  - <> 或 != 不等于
  - between 最小值 and 最大值 在某个范围内（包含最小、最大值）
  - in(...) 在in后的列表中的值，多选一
  - like占位符 用来模糊匹配（_匹配单个字符， %匹配任意个字符）
  - is null 是NULL
  - and 或 &&  并且（多个条件同时成立）
  - or 或 || 或者（任意一个条件成立）
  - not 或 ! 非/不是

```SQL
基础查询：select * 或 age from employee;
条件查询：select * from employee where id = 1;
聚合查询：（所有的NULL值不参与运算）
  例如：select avg(age) from employee;
  - SUM(列) 求和
  - AVG(列) 求平均值
  - MIN(列) 求最小值
  - MAX(列) 求最大值
  - COUNT(列|*) 求数量
分组查询：
  - 语法：select * from employee where id > 1 group by 分组字段名 [having 分组后过滤条件]
  - where和having区别：
    - 执行时机：where是分组之前进行过滤，不满足where条件就不参与分组；而having是分组之后对结果进行过滤
    - 判断条件：where不能对聚合函数进行判断，而having可以。
  - 注意：
    - 执行顺序：where > 聚合函数 > having
    - 分组后，查询的字段一般为聚合函数和分组字段，查询其他字符安无任何意义
排序查询：order by 字段1 排序方式1, 字段2 排序方式2
  - asc 升序（默认）：从小到大
  - desc 降序
分页查询：对查询结果进行数量限制或分页显示
  - 语法：select * from employee limit n [, m];
  - 注意：
    - 起始索引从0开始，起始索引=(页码 - 1) * 每页显示数量
    - 分页查询是数据库的方言，不同数据库的实现不同，MySQL中是 LIMIT
    - 如果查的是第一页数据，起始索引可以省略，简写为：limit 10

-----------------------------------------------------------------

-- 举例：
-- 查询姓名为两个字的员工
select * from employee where name like '__';
-- 查询身份证号最后一位是X的员工信息
select * from employee where idcard like '%X' ;
-- 查询年龄小于45的员工，并根据工作地址分组，获取员工数量大于等于3的工作地址
select work_address, count(*) as address_count from employee where age < 45 group by work_address having address_count >= 3;
-- 查询性别为男，且年龄在20-40岁（含）以内的前5个员工信息，对查询结果按年龄升序排序，年龄相同按入职时间降序排序
select * from employee where gender = '男' and (age between 20 and 40) order by age asc, entrydate desc limit 5;
```

## DCL相关语句
- 用户管理
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
- 权限管理: 
  ```
  1. ALL, all privileges 所有权限
  2. SELECT 查询数据
  3. INSERT 插入数据
  4. UPDATE 修改数据
  5. DELETE 删除数据
  6. ALTER 修改表
  7. DROP 删除数据库/表/视图
  8. CREATE 创建数据库/表
  ```
  ```SQL
  -- 1: 查询权限
  show grants for 'hpy'@'localhost';
  -- 2: 授予权限
  grant 权限列表 on my_blogs.users to 'hpy'@'localhost';
  -- 3: 撤销权限
  revoke 权限列表 on my_blogs.users from 'hpy'@'localhost';
  ```

---

## MySQL中的函数
- ### 字符串函数
  - concat(s1,s2,...sn) 字符串拼接
  - lower(str) 将字符串str全部转为小写
  - upper(str) 将字符串str全部转为大写
  - lpad(str, n, pad) 左填充，用字符串pad对str的左边进行填充，达到n个字符串长度
  - rpad(str, n, pad) 右填充，用字符串怕的对str的右边进行填充，达到n个字符串长度
  - trim(str) 去掉字符串str首尾的空格
  - substring(str, start, len) 返回从字符串str 从start起的len个长度的字符串；索引start从1开始
  ```SQL
  -- 员工工号统一为5位数，不足5位的在前面补0；如：00001
  update employee set workno = lpad(workno, 5, '0');
  ```
- ### 数值函数
  - ceil(x) 向上取整
  - floor(x) 向下取整
  - mod(x, y) 返回x/y的模（余数）
  - rand() 返回0-1的随机数
  - round(x, y) 求参数x四舍五入的值，保留y位小数
  ```SQL
  -- 生成一个六位数的随机验证码
  select rpad(round(rand() * 1000000, 0), 6, '0');
  ```
- ### 日期函数
  - curdate() 当前日期
  - curtime() 当前时间
  - now() 当前日期和时间
  - year(date) 获取指定date的年份
  - month(date) 获取指定date的月份
  - day(date) 获取指定date的日期
  - date_add(date, interval expr type) 返回一个日期/时间值加上一个时间间隔expr后的时间值；type有 day/month/year
  - datediff(date1, date2) 返回起始时间date1和结束时间date2之间的天数；使用date1-date2
  ```SQL
  -- 当前时间 向后10天
  select date_add(now(), interval 10 day);
  -- 查询所有员工入职天数，并根据入职天数倒序排序
  select name, datediff(curdate(), entrydate) as entrydays from employee order by entrydays desc;
  ```
- ### 流程控制函数
  - if(value, t, f) 如果value为true，返回t，否则返回f
  - ifnull(value1, value2) 如果value1不为null，返回value1，否则返回value2
  - case when val1 then res1 ... else default end 如果val1为true，返回res1，...否则返回default默认值
  - case expr when val1 then res1 ... else default end 如果expr的值等于val1,返回res1...否则返回default默认值
  ```SQL
  -- 查询员工姓名和工作地址，（北上广显示一线城市，其他显示二线城市）
  select name, (case workaddress when '北京' then '一线城市' when '上海' then '一线城市' when '广州' then '一线城市' else '二线城市' end) from employee;
  ```

---

## 约束
- 非空约束 -> not null
- 唯一约束 -> unique
- 主键约束 -> primary key
- 默认约束 -> default
- 检查约束（8.0.16版本后） -> check
- 外键约束 -> foreign key
  - 删除和更新行为
    - no action 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则不允许删除/更新
    - restrict 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则不允许删除/更新
    - cascade 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则 也删除/更新 外键在子表中的记录
    - set null 当在父表中删除对应记录时，首先检查是否有对应外键，如果有则设置子表中该外键值为NULL(要求该外键允许取NULL)
    - set default 父表有变更时，子表将外键列设置成一个默认的值(Innodb不支持)
  ```SQL
  -- 添加外键
  alter table 表名 add constraint 外键名称 foreign key(外键字段名) references 主表(主表列名);
  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id);

  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id) on update cascade on delete cascade;
  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id) on update set null on delete set null;

  -- 删除外键
  alter table emp drop foreign key fk_emp_dept_id;
  ```


---

## 多表查询
### 内连接：查询两张表交集的部分
- 隐式内连接
  ``` SQL
  select * from student, dept where student.dept_id = dept.id;
  ```
- 显示内连接
  ```SQL
  select student.name, dept.name from student inner join dept on student.dept_id = dept.id;
  ```
### 外连接：完全包含左表或右表的数据
- 左连接
  ```SQL
  select * from student left outer join dept on student.dept_id = dept.id;
  // 会完全包含 左表 的数据
  ```
- 右连接
  ```SQL
  select * from student right outer join dept on student.dept_id = dept.id;
  // 会完全包含 右表 的数据
  ```
### 自连接：可以使用内连接，也可以使用外连接，必须要给表起别名
  ```SQL
  -- 内连接：取交集
  select * from employee a, employee b where a.manager_id = b.id;
  -- 外连接：
  select a.name '员工', b.name '领导' from employee a left outer join employee b on a.manager_id = b.id;
  ```
### 联合查询：union / union all
  - 联合查询的多张表的列数必须保持一致，字段类型也需要保持一致
  - union all 直接将两张表的数据合并到一起，可能会有重复数据
  - union 会去重
  ```SQL
  select * from student union all select * from teacher;
  ```
### 子查询
  - SQL语句中嵌套SELECT语句，称为 *嵌套查询*，又称 *子查询*
  - 根据查询结果不同，分为：
    - 标量子查询（子查询结果为单个值）
    - 列子查询（查询结果为一列）：操作符有：IN / NOT IN / ANY / SOME / ALL
    - 行子查询（查询结果为一行）：操作符有：= / <>不等于 / IN / NOT IN
    - 表子查询（查询结果为多行多列）：操作符：IN
  - 根据子查询位置，分为 where之后、from之后、select之后
  
  ```SQL
  -- 标量子查询：查询销售部员工信息
  select * from employee where dept_id = (select id from dept where name = '销售部');

  -- 列子查询 1: 查询销售部和市场部的员工信息
  select * from employee where  dept_id in (select id from dept where name = '销售部' or name = '市场部');
  -- 列子查询 2: 查询比财务部工资最高的员工工资还要高的员工信息
  -- 先找到财务部ID  再找到财务部工资  最后通过 all查询
  select * from employee where salary > all (select salary from employee where dept_id = (select id from dept where name = '财务部'));
  -- 列子查询 3：查询比研发部任意一人工资高的员工信息
  select * from employee where salary > some ( select salary from employee where dept_id = (select id from dept where name = '研发部') );

  -- 行子查询：查询与张无忌薪资及直属领导相同的员工信息
  select * from employee where (salary, manager_id) = (select salary, manager_id from employee where name = '张无忌');

  -- 表子查询 1：查询与鹿杖客和宋远桥薪资及职位相同的员工信息
  select * from employee where (job, salary) in ( select job, salary from employee where name = '鹿杖客' or name = '宋远桥' );
  -- 表子查询 2：查询2006-01-01之后入职的员工信息及其部门信息
  select e.*, dept.* from (select * from employee where entrydate > '2006-01-01') e left join dept on e.dept_id = dept.id;

  ```

---