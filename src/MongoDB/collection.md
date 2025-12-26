# collection 集合操作
> 不需要创建集合，当插入文档时，集合会自动创建。

## 创建集合
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

## 查看集合
  ```bash
  show collections
  # 或
  show tables
  ```

## 删除集合
  ```bash
  # 语法
  db.collection.drop()

  # 举例
  db.posts.drop()
  ```