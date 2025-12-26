# document 文档操作

## 查询
  1. 语法
     ```bash
      # 语法
      db.user.find([query], [fields])
      # 参数说明
      - query: 可选，使用查询操作符指定查询条件
      - fields: 可选，使用投影操作符指定返回的键。如果要查询所有键值，忽略此参数即可（默认省略）
     ```
  1. AND条件 OR条件
     - AND：`db.user.find({name: '张三', age: 22}).pretty()`
     - OR: `db.user.find({$or: [{name: '张三'}, {age: 22}]}).pretty()`
     - AND和OR联合使用：`db.user.find({likes: {$gt: 50}, $or: [{age: 22}, {sex: 1}]})`，类似SQL中`where likes > 50 and (age = 22 or sex = 1)`

  2. 条件操作符
     | 操作符   | 举例                            | 类比SQL             |
     | -------- | ------------------------------- | ------------------- |
     | 等于     | db.user.find({name: '小明'})    | where name = '小明' |
     | 不等于   | db.user.find({age: {$ne: 20}})  | where age != 20     |
     | 大于     | db.user.find({age: {$gt: 20}})  | where age > 20      |
     | 大于等于 | db.user.find({age: {$gte: 20}}) | where age>= 20      |
     | 小于     | db.user.find({age: {$lt:> 20}}) | where age < 20      |
     | 小于等于 | db.user.find({age: {$lte: 20}}) | where age <= 20     |

  5. `$type`操作符:  
     `db.user.find({title: {$type: 2}})或db.user.find({title: {$type: 'string'}})`  
     | 类型                   | 数字 | 备注          |
     | ---------------------- | ---- | ------------- |
     | Double                 | 1    |               |
     | String                 | 2    |               |
     | Object                 | 3    |               |
     | Array                  | 4    |               |
     | Binary Data            | 5    |               |
     | Undefined              | 6    | 已废弃        |
     | Object id              | 7    |               |
     | Boolean                | 8    |               |
     | Date                   | 9    |               |
     | Null                   | 10   |               |
     | Regular Expression     | 11   |               |
     | JavaScript             | 13   |               |
     | Symbol                 | 14   |               |
     | JavaScript(with scope) | 15   |               |
     | 32-bit integer         | 16   |               |
     | Timestamp              | 17   |               |
     | 64-bit integer         | 18   |               |
     | Min key                | 255  | Query with -1 |
     | Max key                | 127  |               |

  6. 查询总条数：`db.user.find().count()`
  7. 分页查询：`skip：跳过几条`，`limit：查询条数`；`db.user.find().limit(10).skip(10)`
  8. 排序：sort() -1为降序，1为升序; `db.user.find().sort({id: -1})`

## 新增
  ```bash
  # 语法
  db.user.insert()

  # 举例
  db.user.insert({id: 1, name: '小明', age: 20})
  ```
  
## 更新
  ```bash
    # 语法
    db.collection.update(<query>, <update>, [upsert, multi, writeConcern])
    # 新语法
    db.collection.updateOne()
    db.collection.updateMany()

    # 参数说明
      1. query: update的查询条件，类似SQL语法 where
      2. update: update的对象和更新的操作符。($set)，类似SQL update查询 set 后面的
      3. upsert: 可选，如果不存在update的记录，是否插入新记录。默认为 false
      4. multi: 可选，默认 false，只更新找到的第一条记录；如果为 true 则把查询的多条记录都更新
      5. writeConcern: 可选，抛出异常的级别
    # 举例
    db.user.update({id: 1}, { $set: {age: 40} })
  ```

## 删除
  ```bash
  # 语法
    db.collection.remove(<query>, {justOne, writeConcern})
  # 或
    db.collection.deleteOne()
    db.collection.deleteMany()
    db.collection.findOneAndDelete()
    db.collection.bulkWrite()

  # 参数说明
    1. query: 可选，删除文档的条件
    2. justOne: 可选，如果设为true或1，则只删除一个文档；如果不设置参数，或使用默认参数false，则删除所有匹配的文档
    3. writeConcern: 可选，抛出异常的级别

  # 举例：
    # 删除所有age=20的数据
    db.user.remove({age: 20})
    # 删除age=20的1条数据
    db.user.remove({age: 20}, 1)
    db.user.remove({age: 20}, true)
    # 删除所有数据
    db.user.remove({})
  ```
  
   
  