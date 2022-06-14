import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'
import { Empty, NavBar, Button } from 'tard'

export default class Index extends Component {
  textRef = React.createRef()

  state = {
    count: 1
  }

  componentWillMount() {}

  componentDidMount() {
    // 定时器回调batch updates
    // setTimeout(() => {
    //   this.setState({count: ++this.state.count})
    //   console.log('A.count结果:', this.state.count)
    //   this.setState({count: ++this.state.count})
    //   console.log('B.count结果:', this.state.count)
    // }, 3000);
    // // 原生回调事件
    // this.textRef.current.addEventListener('tap', ()=>{
    //   this.setState({count: ++this.state.count})
    //   console.log('C.count结果:', this.state.count)
    //   this.setState({count: ++this.state.count})
    //   console.log('D.count结果:', this.state.count)
    // })
    console.log('window:', window)
    console.log('getCurrentPages:', Taro.getCurrentPages())
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <NavBar title="React Router 测试" />

        <Button
          full
          type="primary"
          onClick={() => {
            Taro.navigateTo({ url: '../browser-router/index?name=webrouter&age=30' })
          }}
        >
          Go to "browser-router" page
        </Button>

        <Button
          full
          type="primary"
          onClick={() => {
            Taro.navigateTo({ url: '../hash-router/index?name=hashrouter&age=30' })
          }}
        >
          Go to "hash-router" page
        </Button>

        <Button
          full
          type="primary"
          onClick={() => {
            Taro.navigateTo({ url: '../history/index?name=history&age=30' })
          }}
        >
          Go to "history" page
        </Button>
      </View>
    )
  }
}
