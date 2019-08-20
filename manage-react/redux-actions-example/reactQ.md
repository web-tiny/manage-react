/*
 * @Author: Tiny
 * @Date: 2019-08-19 14:57:42
 * @Last Modified by: tiny.jiao@aliyun.com
 * @Last Modified time: 2019-08-20 18:24:43
*/

###一：react 核心概念
```jsx
1:JSX
2:元素渲染
3:组件和Props
  1):函数组件
  2):class 组件
4:State和生命周期(https://zhuanlan.zhihu.com/p/38030418)
  React v16.3 之后:getDerivedStateFromProps -> shouldComponentUpdate -> render -> getSnapshotBeforeUpdate ->componentDidUpdate -> componentWillmount
5:事件处理
  1):写法：绑定的方法名采用驼峰命名,ueg: onClick
  2):绑定this的方法:
    <1>:constructor 中用bind绑定,eg: this.handleClick = this.handleClick.bind(this);
    <2>:class fields, eg: handleClick = () => {}
    <3>:回调中使用箭头函数,eg: <button onClick={(e) => this.handleClick(e)}>Click me </button>
  3):向事件处理程序传递参数：
    <1>:箭头函数,eg:<button onClick={e => this.handleClick(id, e)}>Click</button>
    <2>:bind, eg:<button onClick={this.handleClick.bind(this, id)}>Click</button>
6:条件渲染，阻止组件渲染(render方法返回null即可)
7:列表和Key
8:列表(受控组件：表单的元素都需要维护自己的state，并更具用户输入通过setState来更新，受控组件的替代品)
10:状态提升
11:组合 VS 继承(其实就是对应vue的slot，但是react中没有“槽”的概念)，基本不会又继承的情况，即使有，那这时候应该考虑当组件抽离出来，
  注：Props可以是任意类型，包括基本数据类型，React元素以及函数
12:react哲学
  1):一个组件一个功能，如果需要负责更多功能，因该考虑拆分为更小的组件
  2):将设计好的ui划分为组件层级 -> 用react创建要给静态版本 -> 确定ui state的最小表示 -> 确定state放置的位置 -> 添加反向数据流
```
###二：React高级指引
```jsx
1:代码分割：
  1): import
  2): React.lazy()(一般通过基于路由来做代码分割). eg: const OtherComponent = React.lazy(()=> import('./OtherComponent'))
  3): 命名导出
2:Context: 提供了一个无需为每层组件手动添加props就能在组件树间进行数据传递的方法。
3:错误边界
  无法捕获事件处理器内部的错误
4:转发Refs
  eg:
  const FancyButton = React.forwardRef((props, ref) => (<button ref={ref} className="FancyButton">{props.children}</button>))
  
```