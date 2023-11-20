# database 数据库操作

## 查看所有数据库
  ```bash
  show dbs
  ```

## 创建
  > mongoDB中默认的数据库是`test`，如果未创建新的数据库，则集合会存储到`test`中。
  > 在MongoDB中，创建集合后要再向其插入数据(文档/记录)后才会真正创建。
  ```bash
  use DATABASE_NMAE
  # 如果数据库不存在，则会创建；否则会切换到指定数据库。
  use my_blog
  ```
  
## 删除
  ```bash
  db.dropDatabase()
  ```



### 参考链接
[MongoDB入门](https://cloud.tencent.com/developer/article/2344837)