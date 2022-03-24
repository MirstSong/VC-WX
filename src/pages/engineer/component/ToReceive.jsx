import { View } from '@tarojs/components';
import { Component } from 'react';
import Taro from '@tarojs/taro';
import { AtSearchBar } from 'taro-ui'


class ToReceive extends Component{
    constructor () {
        super(...arguments)
        this.state = {
          value: ''
        }
      }
    componentDidMount () {
         Taro.setNavigationBarTitle({
             title: '待接收'
         })
     }
     onChange (value) {
        this.setState({
          value: value
        })
      }
      onActionClick () {
        console.log('开始搜索')
      }
    render(){
        return(
            <View>
                <AtSearchBar
                  fixed
                  actionName='搜索'
                  placeholder='输入搜索内容'
                  value={this.state.value}
                  onChange={this.onChange.bind(this)}
                  onActionClick={this.onActionClick.bind(this)}
                />
            </View>
        )
    }
}
export default ToReceive;