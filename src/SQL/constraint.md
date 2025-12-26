# 约束

- 非空约束 -> not null
- 唯一约束 -> unique
- 主键约束 -> primary key
- 默认约束 -> default
- 检查约束（8.0.16版本后） -> check
- 外键约束 -> foreign key
  - 删除和更新行为
    1. no action 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则不允许删除/更新
    2. restrict 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则不允许删除/更新
    3. cascade 当在父表中删除/更新对应记录时，首先检查是否有对应外键，如果有则 也删除/更新 外键在子表中的记录
    4. set null 当在父表中删除对应记录时，首先检查是否有对应外键，如果有则设置子表中该外键值为NULL(要求该外键允许取NULL)
    5. set default 父表有变更时，子表将外键列设置成一个默认的值(Innodb不支持)
  ```SQL
  -- 添加外键
  alter table 表名 add constraint 外键名称 foreign key(外键字段名) references 主表(主表列名);
  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id);

  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id) on update cascade on delete cascade;
  alter table emp add constraint fk_emp_dept_id foreign key(dept_id) references dept(id) on update set null on delete set null;

  -- 删除外键
  alter table emp drop foreign key fk_emp_dept_id;
  ```