// 插槽,跨组件传递数据,函数组件,jsx设置样式,属性,style,属性验证,子传父回调函数传递,生命周期,render返回值,类的定义,数组高阶函数,元素实现,react实现,列表渲染,

import React, { Component } from "react";

class CounterButton extends Component {
  render() {
    const { counterclick, csname, csage } = this.props;

    return (
      <div style={{ width: "250px", height: "250px", color: "red" }}>
        <button onClick={counterclick}>点击按钮</button>
        <ChildCpn
          leftSlot={<span>我的名字是{csname}</span>}
          centerSlot={<strong>我的年龄是{csage}</strong>}
          rightSlot={<a href="/#">ccc</a>}
        />
      </div>
    );
  }
}

function ChildCpn(props) {
  return (
    <div>
      <p>{props.leftSlot}</p>
      <p>{props.centerSlot}</p>
      <p>{props.rightSlot}</p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "wenben",
      name: "child组件",
      age: 11,
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <CounterButton
          counterclick={this.on.bind(this)}
          csname={this.state.name}
          csage={this.state.age}
        />
      </div>
    );
  }

  on() {
    this.setState({
      message: "文本",
    });
  }
}

export default App;
