# MongoDB基本概念

## 概念/术语
| SQL         | MongoDB      |                 解释                 |
| ----------- | ------------ | :----------------------------------: |
| database    | database     |                数据库                |
| table       | collection   |               表/集合                |
| row         | document     |               行/文档                |
| column      | field        |               字段/域                |
| table joins |              |        表连接，MongoDB不支持         |
|             | 嵌入document |  MongoDB通过嵌入式文档代替多表连接   |
| primary key | primary key  | 主键，MongoDB自动将_id字段设置为主键 |