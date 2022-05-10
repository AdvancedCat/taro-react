import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
// import Taro, { useRouter } from '@tarojs/taro'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.scss'

import Home from '../../components/home'
import View1 from '../../components/view1'
import View2 from '../../components/view2'
import View3 from '../../components/view3'

export default class Index extends Component {
  componentDidMount() {
    // console.log(Taro.getCurrentPages())
  }

  onLoad(options) {
    // console.log('onLoad', options)
  }

  render() {
    return (
      <BrowserRouter>
        <a></a>
        <View className='page-name'>react-router</View>
        <View className='operation-group'>
          <View className='operation-history'>
            <Text onClick={()=>{console.log(window.history)}}>history</Text>
            <Text onClick={()=>{window.history.back()}}> {'<- back'} </Text>
            <Text onClick={()=>{window.history.forward()}}> {'forward ->'}</Text>
          </View>
          <View onClick={()=>{console.log(window.location)}}>location</View>
        </View>


        <View className='drawer-box'>
          <View className='box-item'>
            <Link to="/pages/router/index/view1?a=1&b=2">
              view1
            </Link>
          </View>
          <View className='box-item'>
            <Link to="/pages/router/index/view2#a=3&b=4">
              view2
            </Link>
          </View>
          <View className='box-item'>
            <Link to="/pages/router/index/2?a=1&b=2#a=3&b=4">
              view3
            </Link>
          </View>
        </View>

        <View className='line'></View>

        <Routes>
          <Route path="/pages/browser-router/index" element={<Home/>}></Route>
          <Route path="/pages/router/index/view1" element={<View1/>}></Route>
          <Route path="/pages/router/index/view2" element={<View2/>}></Route>
          <Route path="/pages/router/index/:id" element={<View3/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
