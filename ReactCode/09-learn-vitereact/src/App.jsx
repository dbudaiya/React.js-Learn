import React, { Component } from "react";
import { render } from "react-dom";

function PrentCpn() {
  return (
    <div>
      <p>我是PrentCpn组件</p>
      <ChildCpn childtext={"孩子组件"} />
    </div>
  );
}

class ChildCpn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "孩子组件",
    };
  }
  render() {
    console.log(this.props.childtext);
    const { childtext } = this.props;

    return (
      <div>
        <h2>我是{childtext}</h2>
        <h1>{this.state.message}</h1>
        <SonCpn
          onclick={(e) => {
            this.aa();
          }}
        ></SonCpn>
      </div>
    );
  }

  aa() {
    this.setState({
      message: "孩子组件二",
    });
  }

  componentWillUnmount() {
    console.log("componentWillUnmount销毁指令已被执行");
  }
}

class SonCpn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message1: "aa",
    };
  }

  render() {
    const { onclick } = this.props;
    return (
      <div>
        <p>我是孙子组件</p>
        <button onClick={onclick}>点击孙子组件</button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    console.log("constructor函数被调用");
    super(props);

    this.state = {
      message: "不带伞",
      isShow: true,
    };
  }

  componentDidMount() {
    console.log("componentDitmount被调用");
  }
  componentDidUpdate() {
    console.log("componentDitUpdate函数被调用");
  }

  render() {
    console.log("render被调用");
    return (
      <div>
        <p>{this.state.message}</p>
        <button
          onClick={(e) => {
            this.on();
          }}
        >
          点击按钮改变文本并且销毁组件
        </button>
        {this.state.isShow && <PrentCpn />}
      </div>
    );
  }

  on() {
    this.setState({
      message: "我是被更新后的数据",
      isShow: !this.state.isShow,
    });
  }
}

export default App;
