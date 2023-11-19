# 数据库、集合、文档操作

## 数据库操作
- 查看所有数据库
  ```bash
  show dbs
  ```
- 创建
  > mongoDB中默认的数据库是`test`，如果未创建新的数据库，则集合会存储到`test`中。
  > 在MongoDB中，创建集合后要再向其插入数据(文档/记录)后才会真正创建。
  ```bash
  use DATABASE_NMAE
  # 如果数据库不存在，则会创建；否则会切换到指定数据库。
  use my_blog
  ```
- 删除
  ```bash
  db.dropDatabase()
  ```

## 集合操作
> 不需要创建集合，当插入文档时，集合会自动创建。
- 创建
  ```bash
  # 语法
  db.createCollection(name, options)

  # 举例：
  db.createCollection('user')
  db.createCollection('pic', { capped: true, size: 6124800, max: 10000 })
  ```
  - name: 要创建的集合名称;
  - options: 可选参数，指定有关内存大小及索引的选项
    1. capped: boolean. 如果为`true`，则创建固定集合。固定集合指的是有着固定大小的集合，当达到最大值时，会自动覆盖最早的文档。
    2. size: 为固定集合指定一个最大值，即字节数。（**capped: true时，size必填**）
    3. max: 指固定集合中包含文档的最大数量
- 查看集合
  ```bash
  show collections
  # 或
  show tables
  ```
- 删除
  ```bash
  # 语法
  db.collection.drop()

  # 举例
  db.posts.drop()
  ```

## 文档操作
- ### 查询
  1. 语法
    ```bash
    # 语法
    db.user.find([query], [fields])
    ```
  2. 参数说明
    - query: 可选，使用查询操作符指定查询条件
    - fields: 可选，使用投影操作符指定返回的键。如果要查询所有键值，忽略此参数即可（默认省略）
  3. AND条件 OR条件
    - AND：`db.user.find({name: '张三', age: 22}).pretty()`
    - OR: `db.user.find({$or: [{name: '张三'}, {age: 22}]}).pretty()`
    - AND和OR联合使用：`db.user.find({likes: {$gt: 50}, $or: [{age: 22}, {sex: 1}]})`，类似SQL中`where likes > 50 and (age = 22 or sex = 1)`

  4. 条件操作符
   
  | 操作符   | 举例                            | 类比SQL             |
  | -------- | ------------------------------- | ------------------- |
  | 等于     | db.user.find({name: '小明'})    | where name = '小明' |
  | 不等于   | db.user.find({age: {$ne: 20}})  | where age != 20     |
  | 大于     | db.user.find({age: {$gt: 20}})  | where age > 20      |
  | 大于等于 | db.user.find({age: {$gte: 20}}) | where age>= 20      |
  | 小于     | db.user.find({age: {$lt:> 20}}) | where age < 20      |
  | 小于等于 | db.user.find({age: {$lte: 20}}) | where age <= 20     |

  5. 查询总条数：`db.user.find().count()`
  6. 分页查询：`skip：跳过几条`，`limit：查询条数`；`db.user.find().limit(10).skip(10)`
  7. 排序：sort() -1为倒序，1为正序; `db.user.find().sort({id: -1})`

- ### 新增
  ```bash
  # 语法
  db.user.insert()

  # 举例
  db.user.insert({id: 1, name: '小明', age: 20})
  ```
- ### 更新
  - 语法
    ```bash
    db.collection.update(<query>, <update>, [upsert, multi, writeConcern])
    # 新语法
    db.collection.updateOne()
    db.collection.updateMany()
    ```
  - 参数说明
    1. query: update的查询条件，类似SQL语法 `where`
    2. update: update的对象和更新的操作符。($set)，类似SQL update查询`set`后面的
    3. upsert: 可选，如果不存在update的记录，是否插入新记录。默认为`false`
    4. multi: 可选，默认`false`，只更新找到的第一条记录；如果为`true`则把查询的多条记录都更新
    5. writeConcern: 可选，抛出异常的级别
  - 举例
    ```bash
    db.user.update({id: 1}, { $set: {age: 40} })
    ```
- ### 删除
  - 语法
    ```bash
    db.collection.remove(<query>, {justOne, writeConcern})
    或
    db.collection.deleteOne()
    db.collection.deleteMany()
    db.collection.findOneAndDelete()
    db.collection.bulkWrite()
    ```
  - 参数说明
    1. query: 可选，删除文档的条件
    2. justOne: 可选，如果设为true或1，则只删除一个文档；如果不设置参数，或使用默认参数false，则删除所有匹配的文档
    3. writeConcern: 可选，抛出异常的级别
   
  - 举例：
    ```bash
    # 删除所有age=20的数据
    db.user.remove({age: 20})
    # 删除age=20的1条数据
    db.user.remove({age: 20}, 1)
    db.user.remove({age: 20}, true)

    # 删除所有数据
    db.user.remove({})
    ```


### 参考链接
[MongoDB入门](https://cloud.tencent.com/developer/article/2344837)