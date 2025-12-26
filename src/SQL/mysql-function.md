# MySQL中的函数

## 字符串函数
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

## 数值函数
  - ceil(x) 向上取整
  - floor(x) 向下取整
  - mod(x, y) 返回x/y的模（余数）
  - rand() 返回0-1的随机数
  - round(x, y) 求参数x四舍五入的值，保留y位小数
  ```SQL
  -- 生成一个六位数的随机验证码
  select rpad(round(rand() * 1000000, 0), 6, '0');
  ```

## 日期函数
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

## 流程控制函数
  - if(value, t, f) 如果value为true，返回t，否则返回f
  - ifnull(value1, value2) 如果value1不为null，返回value1，否则返回value2
  - case when val1 then res1 ... else default end 如果val1为true，返回res1，...否则返回default默认值
  - case expr when val1 then res1 ... else default end 如果expr的值等于val1,返回res1...否则返回default默认值
  ```SQL
  -- 查询员工姓名和工作地址，（北上广显示一线城市，其他显示二线城市）
  select name, (case workaddress when '北京' then '一线城市' when '上海' then '一线城市' when '广州' then '一线城市' else '二线城市' end) from employee;
  ```