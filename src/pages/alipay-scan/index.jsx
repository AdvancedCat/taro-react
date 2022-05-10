import React, { Component, useEffect, useState } from 'react'
import { View, Button, Text } from '@tarojs/components'
import Taro,{useRouter} from '@tarojs/taro'
import HistoryTest from '../../components/HistoryTest'

function Normal() {

  const [content, setContent] = useState('')

  useEffect(()=>{
    const router = Taro.getCurrentInstance().router
    // console.log('router', router)
    setContent(JSON.stringify(router))
  })

  // const router2 = useRouter()
  // console.log('router2', router2)

  function handleScan() {
    console.log('我触发了')
    Taro.scanCode({
      success(res){
        console.log('扫码结果', res)
        my.alert({ title: res.code });
      }
    })
  }

  return (
    <View>
      <View>
        <Text>{content}</Text>
        <Button onClick={handleScan}>点我扫码</Button>
      </View>

      <View>
        <HistoryTest></HistoryTest>
      </View>
    </View>
  );
}


export default class Index extends Component {

  componentDidMount(){
    // console.log(Taro.getCurrentPages())
  }

  onLoad(options){
    console.log('onLoad', options)
  }

  render () {
    return (
      <Normal></Normal>
    )
  }
}
