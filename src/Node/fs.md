# Node.js fs文件系统

> fs模块的方法 均有 异步和同步版本。异步方法回调函数最后一个参数为回调函数，回调函数第一个参数是错误信息对象error。
> 异步方法性能更高，速度更快，而且没有阻塞

## 打开文件
`fs.open(path, flags[, mode], callback)`
- path - 文件的路径
- flags - 文件打开的行为
- mode - 设置文件的模式（权限），文件创建默认权限为0666（可读，可写）
- callback - 回调函数，带有两个参数：`callback(err, fd)`

**flags**参数：
| Flag | 描述                                           |
| ---- | ---------------------------------------------- |
| r    | 以读取模式打开文件，如果不存在就抛出异常       |
| r+   | 以读写模式打开文件                             |
| rs   | 以同步的方式读取文件                           |
| rs+  | 以同步的方式读取和写入文件                     |
| w    | 以写入模式打开文件，如果文件不存在则创建       |
| w+   | 以读写模式打开文件，如果文件不存在则创建       |
| wx   | 类似'w'，但如果文件存在则写入失败              |
| wx+  | 类似'w+'，但如果文件路径存在则读写失败         |
| a    | 以追加模式打开文件，如果文件不存在则创建       |
| a+   | 以读取追加模式打开文件，如果文件不存在则创建   |
| ax   | 类似'a'，但如果文件路径存在则文件追加失败      |
| ax+  | 类似'a+'，但如果文件路径存在则文件读取追加失败 |

## 关闭文件
`fs.close(fd, callback)` 使用文件描述符来读取文件

## 获取文件信息
`fs.stat(path, callback)`
- path: 文件路径
- callback： 回调函数，两个参数err, stats(fs.Stats对象)
- stats 类的方法有
   | 方法                      | 描述                                                     |
   | ------------------------- | -------------------------------------------------------- |
   | stats.isFile()            | 如果是文件则返回true                                     |
   | stats.isDirectory()       | 如果是目录则返回true                                     |
   | stats.isBlockDevice()     | 如果是块设备则返回true                                   |
   | stats.isCharacterDevice() | 如果是字符设备则返回true                                 |
   | stats.isSymbolicLink()    | 如果是软链接则返回true                                   |
   | stats.isFIFO()            | 如果是FIFO则返回true。FIFO是UNIX中一种特殊类型的命令管道 |
   | stats.isSocket()          | 如果是Socket则返回true。                                 |

## 写入文件
`fs.writeFile(file, data[, options], callback)`  
writeFile 直接打开文件默认是 **`w`** 模式，如果文件存在，该方法写入的内容会覆盖旧的文件内容
- file 文件名
- data - 要写入文件的数据，可以是字符串或Buffer(缓冲)对象
- options 一个对象，`{ encoding: 'utf-8', mode: '0666', flag: 'w' }`
- callback 回调函数，参数只包括错误信息err，在写入失败时返回

## 读取文件
`fs.read(fd, buffer, offset, length, position, callback)` 使用文件描述符来读取文件
- fd - 通过`fs.open()`返回的文件描述符
- buffer - 数据写入的缓冲区
- offset - 缓冲区写入的写入偏移量
- length - 要从文件中读取的字节数
- position - 文件读取的起始位置
- callback - 回调函数三个参数err: 错误信息, bytesRead: 读取的字节数, buffer: 缓冲区对象、
```js
  import { open, read } from 'fs'
  const buf = Buffer.alloc(1024)
  function testRead() {
    open(filePath, 'r+', (err, fd) => {
      if (err) {
        return console.log(err)
      }
      console.log('文件打开成功，开始读取')
      read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if (err) {
          return console.log(`读取文件err: `, err)
        }
        console.log(`文件读取的字节数: ${bytes}`)
        if (bytes > 0) {
          console.log(buf.subarray(0, bytes).toString())
        }
      })
    })
  }
  testRead()
```

## 截取文件
`fs.ftruncate(fd, len, callback)`
- fd - `fs.open()`返回的文件描述符
- len - 文件内容截取的长度
- callback - 回调函数，无参数

## 删除文件
`fs.unlink(path, callback)`
- path - 文件路径
- callback - 回调函数，无参数

## 创建目录
`fs.mkdir(path [, options], callback)`
- path - 文件路径
- options
  - recursive - 是否以递归的方式创建目录，默认 false
  - mode - 设置目录权限，默认为0777
- callback 无参数的回调函数

## 读取目录
`fs.readdir(path, callback)`
- path - 文件路径
- callback - 回调函数，两个参数err, files(目录下文件列表)

## 删除目录
`fs.rmdir(path, callback)`
- path - 文件路径
- callback - 回调函数，无参数