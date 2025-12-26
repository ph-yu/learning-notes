# 多表查询

## 内连接：查询两张表交集的部分
  - 隐式内连接
    ``` SQL
    select * from student, dept where student.dept_id = dept.id;
    ```
  - 显示内连接
    ```SQL
    select student.name, dept.name from student inner join dept on student.dept_id = dept.id;
      ```

## 外连接：完全包含左表或右表的数据
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

## 自连接：可以使用内连接，也可以使用外连接，必须要给表起别名
  ```SQL
  -- 内连接：取交集
  select * from employee a, employee b where a.manager_id = b.id;
  -- 外连接：
  select a.name '员工', b.name '领导' from employee a left outer join employee b on a.manager_id = b.id;
  ```

## 联合查询：union / union all
  - 联合查询的多张表的列数必须保持一致，字段类型也需要保持一致
  - union all 直接将两张表的数据合并到一起，可能会有重复数据
  - union 会去重
  ```SQL
  select * from student union all select * from teacher;
  ```

## 子查询
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