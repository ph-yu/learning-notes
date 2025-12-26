# Node.js 事件循环

> Node.js是单进程单线程应用程序，因为V8引擎提供异步执行的回调接口，通过这些接口可以处理大量的并发，所以性能非常高。  
> 几乎每一个API都支持回调函数。  
> 基本上所有的事件机制都是用设计模式中的观察者模式实现。  
> 单线程类似进入一个`while(true)`的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数。  

## events模块
```js
const events = require('events')
// 创建
const eventEmitter = new events.EventEmitter()
```