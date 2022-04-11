import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  textRef = React.createRef()

  state = {
    count: 1
  }

  componentWillMount () { }

  componentDidMount () {
    // console.log(Taro)
    setTimeout(() => {
      this.setState({count: ++this.state.count})
      console.log('A.count结果:', this.state.count)
      this.setState({count: ++this.state.count})
      console.log('B.count结果:', this.state.count)
    }, 3000);

    this.textRef.current.addEventListener('tap', ()=>{
      this.setState({count: ++this.state.count})
      console.log('C.count结果:', this.state.count)
      this.setState({count: ++this.state.count})
      console.log('D.count结果:', this.state.count)
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('触发视图render')
    return (
      <View className='index'>
        <Text ref={this.textRef}>Hello world!{this.state.count}</Text>
      </View>
    )
  }
}
