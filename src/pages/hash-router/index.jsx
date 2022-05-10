import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
// import Taro, { useRouter } from '@tarojs/taro'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './index.scss'

import Home from './home'
import View1 from './view1'
import View2 from './view2'
import View3 from './view3'

export default class Index extends Component {
  componentDidMount() {
    // console.log(Taro.getCurrentPages())
  }

  onLoad(options) {
    // console.log('onLoad', options)
  }

  render() {
    return (
      <HashRouter>
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
            <Link to="view1?a=1&b=2">
              view1
            </Link>
          </View>
          <View className='box-item'>
            <Link to="view2#a=3&b=4">
              view2
            </Link>
          </View>
          <View className='box-item'>
            <Link to="2?a=1&b=2#a=3&b=4">
              view3
            </Link>
          </View>
        </View>

        <View className='line'></View>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/view1" element={<View1/>}></Route>
          <Route path="/view2" element={<View2/>}></Route>
          <Route path="/:id" element={<View3/>}></Route>
        </Routes>
      </HashRouter>
    )
  }
}
