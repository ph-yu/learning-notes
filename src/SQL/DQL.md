# DQL相关语句

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