# Node.js Stream(流)

Node.js，Stream有四种流类型：
- readable - 可读操作
- writeable - 可写操作
- duplex - 可读可写操作
- transform - 操作被写入数据，然后读出结果

## 从流中读取数据
```js
const fs = require('fs')
let data = ''

const readerStream = fs.createReadStream('input.txt')
readerStream.setEncoding('UTF8')

readerStream.on('data', chunk => {
  data += chunk
})

readerStream.on('end', () => {
  console.log(data)
})

readerStream.on('error', err => {
  console.log(err.stack)
})

console.log('程序执行完毕')
```

## 写入流
```js
const fs = require('fs')

const writeStream = fs.createWriteStream(`${process.cwd()}/public/output.txt`)
const data = `
              定风波
              宋·苏轼
    莫听穿林打叶声，何妨吟啸且徐行。
    竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
    料峭春风吹酒醒，微冷，山头斜照却相迎。
    回首向来萧瑟处，归去，也无风雨也无晴。
`
writeStream.write(data, 'utf8')

writeStream.end()

writeStream.on('finish', () => {
  console.log('写入完成')
})

writeStream.on('error', err => {
  console.log(err.stack)
})

console.log('程序执行完毕')
```

## 管道流
> 管道提供了一个输出流到输入流的机制。通常用于从一个流中获取数据并将数据传递到另一个流中。

![管道流](../assets/images/stream.png)
> 如上图所示，文件比作装水的水桶，通过一根管子`pipe`连接两个水桶，使得水从一个桶流入另一个桶，这样就慢慢实现了大文件的复制过程。

```js
// 文件复制 pipe

import { createReadStream, createWriteStream } from 'node:fs'

const workDirectory = process.cwd()

const readStream = createReadStream(`${workDirectory}/public/input.txt`)

const writeStream = createWriteStream(`${workDirectory}/public/output.txt`)

readStream.pipe(writeStream)

console.log('over')
```

## 链式流
> 管道 链式 来压缩和解压文件

```js
import { createReadStream, createWriteStream } from 'fs'
import { createGzip, createGunzip } from 'zlib'

const workDir = process.cwd()

export function compress() {
  createReadStream(`${workDir}/public/input.txt`)
    .pipe(createGzip())
    .pipe(createWriteStream(`${workDir}/public/input-${Date.now()}.txt.gz`))
}

export function decompress() {
  const writeStream = createWriteStream(`${workDir}/public/input-${Date.now()}.txt`)
  createReadStream(`${workDir}/public/input.txt.gz`).pipe(createGunzip()).pipe(writeStream)
  writeStream.on('error', err => {
    console.log(err.stack)
  })
}

```