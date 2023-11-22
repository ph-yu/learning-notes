# Node.js 全局对象

## global
global最根本的作用是作为全局变量的宿主。
按照ECMAScript的定义，满足以下条件的变量是全局变量：
- 定义在最外层的变量；
- 全局对象的属性；
- 隐式定义的变量（未定义直接赋值的变量）

## process
> 是一个全局变量，即`global`对象的属性。用于描述当前进程状态的对象，提供了与操作系统交互的简单接口。
  #### 事件
  - exit 当进程准备退出时触发
  - beforeExit 当node清除事件循环，并且没有其它安排时 触发。
  - uncaughtException 当一个异常冒泡回到事件循环，触发这个事件。如果给异常添加了监视器，默认的操作（打印堆栈跟踪信息并退出）就不会发生。
  - Signal事件 当进程收到信号就触发。
  #### 属性
  1. stdout 标准输出流
  2. stdin 标准输入流
  3. stderr 标准错误流
  4. argv 返回一个数组，由命令行执行脚本时的各个参数组成。第一个成员总是node，第二个成员是脚本文件名，其余成员是脚本文件的参数。
  5. execPath 返回执行当前脚本的node二进制文件的绝对路径。
  6. execArgv 返回一个数组，成员是命令行下执行脚本时，在node可执行文件与脚本文件之间的命令行参数。
  7. env 返回一个对象，成员为当前shell的环境变量
  8. exitCode 进程退出时的代码。如果进程通过`process.exit()`退出，则不需要指定退出码
  9. version node的版本
  10. versions 包含node的版本和依赖
  11. config 一个包含用来编译当前node执行文件的JavaScript配置选项的对象
  12. pid 当前进程的进程号
  13. title 进程名，默认为node
  14. arch 当前CPU的架构：`arm` `ia32` `x64`
  15. platform 运行程序所在平台系统 `darwin` `freebsd` `linux` `sunos` `win32`
  16. mainModule require.main 的备选方法。不同点，如果主模块在运行时改变，require.main可能会继续返回老的模块。可以认为，这两者引用了同一个模块。
  ### 方法
  - `abort()`  这将导致 node 触发 abort 事件。会让 node 退出并生成一个核心文件。
  - `chdir(directory)` 改变当前进程的工作目录，如果操作失败抛出异常
  - `cwd()` 返回当前进程的工作目录
  - `exit(code)` 使用指定的code结束进程，默认使用 0
  - `kill(pid, [signal])` 发信号给进程。pid是进程id, signal是发送的信号的字符串描述
  - `memoryUsage()` 返回node进程所用的内存状况，单位：字节
  - `nextTick(callback)` 一旦当前事件循环结束，调用回调函数
  - `umask([mask])` 设置或读取进程文件的掩码。子进程从父进程继承掩码。
  - `uptime()` 返回node已经运行的秒数
  - `hrtime()` 返回当前进程的高分辨时间，形式为`[seconds, nanoseconds]`.主要用途是通过精确的时间间隔，来衡量程序的性能。可以将之前的结果传递给当前的 `process.hrtime()` ，会返回两者间的时间差，用来基准和测量时间间隔。

## __filename
- 表示当前正在执行的脚本的文件名。
- 它将输出文件所在的位置的绝对路径，且和命令行参数指定的文件名不一定相同。
- 如果在模块中，返回的是模块文件的路径。

## __dirname
- 表示当前执行的脚本文件所在的目录。

## setTimeout(cb, ms)
## clearTimeout(t)
## setInterval(cb, ms)
## clearInterval(t)

## console