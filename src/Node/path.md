# Node.js path模块

1. `path.normalize(p)` 规范化路径
2. `path.join([path1], [path2], [,...])` 用于连接路径。主要用途在于：会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"
3. `path.resolve([from ...], to)` 将**to**参数解析为绝对路径，给定的路径的序列是从右向左被处理的，后面每个`path`被依次解析，直到构造完成一个绝对路径。
   ```js
   path.resolve('/foo/bar', 'baz') // E:\foo\bar\baz
   path.resolve('/foo/bar', './baz') // E:\foo\bar\baz
   path.resolve('/foo/bar', '/test/baz') // E:\test\baz
   path.resolve('./www', 'public', '../test/baz') // E:\Node\www\test\baz
   path.resolve('www', 'public', '../test/baz') // E:\Node\www\test\baz
   path.resolve('www', 'public/assets/', '../test/baz') // E:\Node\www\public\test\baz
   path.resolve('www', 'public/assets/', './test/baz') // E:\Node\www\public\assets\test\baz
   ```
4. `path.isAbsolute(path)` 判断参数 **path** 是否是绝对路径
5. `path.relative(from, to)` 用于将绝对路径转为相对路径，返回从from到to的相对路径（基于当前工作目录）
   ```js
   path.relative('D:\\Node\\foo\\test', 'D:\\Node\\foo\\path')
   // ..\path
   path.relative('D:\\Node\\foo\\test', 'D:\\Node\\src\\path')
   // ..\..\src\path
   path.relative('D:\\Node\\foo\\test', 'D:\\bingo\\src\\path')
   // ..\..\..\bingo\src\path
   ```
6. `path.dirname(p)` 返回路径中代表文件夹的部分
   ```js
   path.dirname('E:\\study-pro\\Node\\basic-learning\\src\\path.ts')
   // E:\study-pro\Node\basic-learning\src
   ```
7. `path.basename(p[, ext])` 返回路径中最后一部分
   ```js
   path.dirname('E:\\study-pro\\Node\\basic-learning\\src\\path.ts')
   // path.ts

   path.dirname('E:\\study-pro\\Node\\basic-learning\\src')
   // src
   ```
8. `path.extname(p)` 返回路径中文件的后缀名。如果路径中不包含'.'或路径中只包含一个'.'且为路径的第一个字符，则返回空字符串
   ```js
   console.log(path.extname('src/path.ts')) // .ts
   console.log(path.extname('path.ts')) // .ts
   console.log(path.extname('.ts')) // ''
   console.log(path.extname('basic-learning/src')) // ''
   ```
9. `path.parse(pathString)` 返回路径字符串的对象
10. `path.format(pathObject)` 从对象中返回路径字符串