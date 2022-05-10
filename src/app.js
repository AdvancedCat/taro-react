import { Component } from 'react'
import './app.scss'

class App extends Component {
  componentDidMount() {
  }

  onLaunch(options){
    // console.log('options', options)
  }

  componentDidShow() {
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
