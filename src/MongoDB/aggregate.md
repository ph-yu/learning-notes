# MongoDB聚合
> aggregate() 主要用于处理数据（如统计平均值，求和等），并返回计算后的数据结果

```bash
  db.posts.aggregate([{$group: {_id: "$author", count: { $sum: 1 }}}])

  # 解释：
  1. 将查询到的 _id, count 作为一组
  2. _id: 引用文档中的author字段
  3. count： 将分组查询后的结果求和

  # 类比SQL
  select author, count(*) from posts group by author;
```

## 聚合表达式
   | 表达式    | 描述                                                             |
   | --------- | ---------------------------------------------------------------- |
   | $sum      | 计算综合                                                         |
   | $avg      | 计算平均值                                                       |
   | $min      | 获取集合中所有文档对应的最小值                                   |
   | $max      | 获取集合中所有文档对应的最大值                                   |
   | $push     | 将值加入一个数组中，不会判断是否有重复的值                       |
   | $addToSet | 将值加入一个数组中，判断是否有重复的值；如果存在相同的值则不加入 |
   | $first    | 根据资源文档的排序获取第一个文档的数据                           |
   | $first    | 根据资源文档的排序获取最后一个文档的数据                         |
  
  ```bash
  # $sum
  db.posts.aggregate([{$group: {_id: '$author', total: {$sum: 1}}}])
  # $avg
  db.posts.aggregate([{$group: {_id: '$author', total: {$avg: '$likes'}}}])
  # $min
  db.posts.aggregate([{$group: {_id: '$author', total: {$min: '$likes'}}}])
  # $max
  db.posts.aggregate([{$group: {_id: '$author', total: {$max: '$likes'}}}])
  # $push
  db.posts.aggregate([{$group: {_id: '$author', url: {$push: '$url'}}}])
  # $addToSet
  db.posts.aggregate([{$group: {_id: '$author', url: {$addToSet: '$url'}}}])
  # $first
  db.posts.aggregate([{$group: {_id, '$author', first_url: {$first: '$url'}}}])
  # $last
  db.posts.aggregate([{$group: {_id, '$author', last_url: {$last: '$url'}}}])
  ```

## 管道的概念
> MongoDB的聚合管道将文档在一个管道处理完毕后将结果传递给下一个管道处理。管道操作可以重复。
- $project：修改输入文档的结构。用来重命名、增加或删除域，也可用于创建计算结果以及嵌套文档
- $match：用于过滤数据，只输出符合条件的文档。使用MongoDB的标准查询操作
- $limit：限制MongoDB聚合管道返回的文档数
- $skip：在聚合管道中跳过指定数量的文档，并返回余下的文档
- $group：将集合中的文档分组，可用于统计结果
- $sort：将输入文档排序后输出
- $unwind：将文档中的某一个数组类型字段拆分成多条，每条包含数组中的一个值
- $geoNear：输入接近某一地理位置的有序文档
  
**$match和$group同时存在时，应将`$match`写在前面**
```bash
db.posts.aggregate([ 
  {$match: {score: {$gt: 60, $lte: 90}}}, 
  {$group: {_id: null, count: {$sum : 1}}}
]);

db.posts.aggregate({ $skip: 5 })

db.posts.aggregate({ $project: { title: 1, author: 1 } });
# 执行后，结果中只有_id,title,author三个字段了，默认情况下_id是被包含的
# 如果不包含_id，可以按照下面
db.posts.aggregate({ $project: { _id: 0, title: 1, author: 1 } });
```