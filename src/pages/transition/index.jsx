import React, { useTransition, Component, useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

console.log('react version', React.version, )

function Index2() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    })
  }

  function handleScan() {
  console.log('我chfa le ')
    Taro.scanCode({
      success(res){
        console.log('扫码结果', res)
        my.alert({ title: res.code });
      }
    })
    // my.scan({
    //   scanType: ['qrCode','barCode'],
    //   success: (res) => {
    //     my.alert({ title: res.code });
    //   },
    // });
  }

  return (
    <View>
      <Button onClick={handleClick}>{count}</Button>
      {isPending && <Text>加载中...</Text>}

      <View>
        <Button onClick={() => {
            Taro.scanCode({
              success: function (res) {
                console.log(res);
              },
            });
          }}>点我扫码</Button>
      </View>
    </View>
  );
}

function Normal(){

  return(
    <View onClick={clickDemo}>你好中国</View>
  )
}

function clickDemo(){
  window.location.search = `?t=${Date.now()}`
}


export default class Index extends Component {

  componentDidMount(){
    console.log(Taro.getCurrentPages())
  }

  render () {
    return (
      <Index2></Index2>
    )
  }
}
