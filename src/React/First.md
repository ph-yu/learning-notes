# React

## 谈谈对React的理解，有哪些特性？
  >
  > React是专注于构建UI的js库

- JSX语法
- 虚拟DOM: 减少DOM操作
- 单向数据流：高阶组件到低阶组件的单项数据流
- Component：组件细粒度拆分，可组合，可嵌套，可复用
- 声明式编程

    ```js
    <Map options={options}>
      <Marker title='hello' icon='/public/marker.png'>
      </Marker>
    </Map>

    // 命令式编程
    const map = new BMap.map(document.getElementById('container'))
    const marker = new BMap.marker()
    map.use(marker)
    ```
  
## state和props的区别？

- state
    > 组件内部的状态，通过`setState`修改状态。`setState`可接收第二个参数，是个回调函数用来监听是否完成
- props
    > 外部组件传递过来的数据。可以是 字符串，数字，布尔值，对象，数组，回调函数  
    > props 在组件内部是不可变的，想要变的话需要从父组件传入新的 props；这就是单向数据流
- 相同点
  - 都是js对象
  - 都是用来保存信息
  - 二者改变都能触发 组件重新渲染更新
- 不同点
  - state是组件内定义的，自己管理维护； props是外部传递过来的
  - state在组件内可以修改；props在组件内不可修改

  ```ts
    import React from 'react'
    type PropsType = Record<string, string | number | boolean>
    interface StateType {
      count: number
    }
    class MyButton extends React.Component<PropsType, StateType> {
      constructor(props: PropsType) {
        super(props)
        this.state = {
          count: 0
        }
      }
      handleBtnClick() {
        this.setState(
          (prevState) => ({ count: prevState.count + 1 }),
          () => {
            console.log('set state finished.')
          }
        )
      }
      render(): React.ReactNode {
        return (
          <button onClick={this.handleBtnClick.bind(this)}>
            Hello, {this.props.title}，你点了按钮{this.state.count}次
          </button>
        )
      }
    }
    export default MyButton
  ```

## 类组件的super(props)
>
> 类组件是基于ES6的class，所有的类组件都要继承自 `React.Component`  
> 如果在类组件中定义了`constructor`，就必须要在第一行写`super(props)`，否则语法不对会报错。  
> 如果不写`constructor`，react自动帮我们处理使得能够通过 this ,来访问 props  

  ```js
  const instance = new MyButton(props)
  instance.props = props
  ```

## 类组件和函数式组件的理解和区别？

- 类组件
  1. 继承自`React.Component`
  2. 通过`this.props`访问父组件的参数
  3. `render`函数要渲染的DOM结构
- 函数式组件
  1. 一般来说函数式组件是 无状态组件，即纯函数；这是因为函数组件没有生命周期的概念
  2. 有了hooks之后，可以在函数组件中定义状态和副作用

### 区别

- 编写方式
- 状态管理
  - 类组件通过state对象定义组件内部的状态
  - 函数组件：在hooks之前是无状态组件；使用`useState()`定义和保管变量
- 生命周期
  - 类组件：生命周期钩子都是继承自 React.Component
  - 函数组件：在hooks之前无生命周期；使用`useEffect()`相当于`componentDidMount()`和`componentWillUnmount()`
- 调用方式

  ```js
  // 函数组件
  const result = SayHi(props)
  // 类组件
  const instance = new SayHi(props)
  instance.props = props
  const result = instance.render()
  ```

- 获取渲染的值
  1. 类组件 通过 `this.props.xxx`
  2. 函数组件 通过 `props.xxx`

## 受控组件和非受控组件的理解和应用场景？

- 受控组件
  - 组件中定义了value和onChange事件，受人为控制
- 非受控组件
  - 组件不定义value和onChange事件，如果想拿到input的值则需要通过 `this.inputRef = React.createRef()` `<input ref={this.inputRef} />`

  ```js
  class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
    }
    componentDidMount() {
      this.inpurRef.current.focus()
    }
    return <input ref={this.inputRef} />
  }
  ```

- **应用场景**
  - 受控组件：实现表单
  - 非受控组件：即时现场验证

## React的事件机制
>
> React所有事件都挂载在document对象上
>
> 先触发真实的DOM事件，再触发React事件，最后真正执行document上挂载的事件
>
> 阻止合成事件间的冒泡 `e.stopPropagation()`
>
> 阻止合成事件与最外层 document 上的事件间冒泡 `e.nativeEvent.stopImmediatePropagation()`
>
> 阻止合成事件与原生事件的冒泡

## React事件绑定

- 在render函数中，使用 bind
- 在render函数中，使用 箭头函数
- 在constructor中，使用 bind
- 在定义函数时使用 箭头函数

```js
class MyComponent extends React.Component {
    constructor(props) {
      super(props)
      // 3.
      this.handleClick = this.handleClick(bind)
    }
    handleClick() {
      console.log('click')
    }
    // 4. 定义时使用箭头函数
    handleClick = () => {
      console.log('定义时使用箭头函数')
    }

    // 1.
    return <button onClick={this.handleClick.bind(this)}>按钮</button>
    // 2,.
    return <button onClick={(e) => this.handleClick}>按钮</button>
  }
```

## React中已入CSS的方式有哪几种？区别？

- js中写style样式，采用驼峰命名，样式写多了代码不好维护
- 引入外部的CSS文件，相当于全局样式，可能会互相影响
- CSS文件名后加上 .module后缀，样式相当于局部样式，缺点是类名需要用驼峰方式
- css in js
  - styled-components
  - emotion
