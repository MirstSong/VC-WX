import { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss';
// eslint-disable-next-line import/first
import Taro from '@tarojs/taro';

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  goLogin(data){
    Taro.navigateTo({
      url: `/pages/login/login?options=${data}`
    })
  }
  render () {
    return (
      <View className='content'>
        <view onClick={()=>this.goLogin('代理商')}><view></view><text>代理商</text></view>
        <view onClick={()=>this.goLogin('区域组长')}><view></view><text>区域组长</text></view>
        <view onClick={()=>this.goLogin('工程师')}><view></view><text>工程师</text></view>
        <view><view></view><text>修改ip地址</text></view>
      </View>
    )
  }
}
