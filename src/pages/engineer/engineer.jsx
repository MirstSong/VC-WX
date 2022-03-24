import { View } from '@tarojs/components';
import { Component } from 'react';
import Taro from '@tarojs/taro';
import { AtTabBar,AtFab } from 'taro-ui';
import './engineer.scss'

import Done from './component/Done'; //已完成
import InHand from './component/InHand'; //处理中
import ToReceive from './component/ToReceive';//待接收

// eslint-disable-next-line react/jsx-key
const ComponentName = [<ToReceive /> , <InHand /> ,<Done />]

const StateBar = [
    { title: '待接收',iconPrefixClass:'icon', iconType: 'daijieshou', text: 'new' },
    { title: '处理中',iconPrefixClass:'icon', iconType: 'weijiejue', text: '100', max: 99 },
    { title: '已完成',iconPrefixClass:'icon', iconType: 'yiwancheng'},
]
class Engineer extends Component {

    constructor(props){
        super(props)
        this.state = {
            current: 0
        }
    }
    handleClick (value) {
        Taro.setNavigationBarTitle({
            title: StateBar[value].title
         })
        this.setState({
          current: value
        })
      }
    addForm(){
        Taro.navigateTo({
            url: `/pages/addFrom/addFrom`
          })
    }
    render(){
        let {current} =this.state
        return(
            <View className='engineer'>
                <AtTabBar
                  fixed
                  tabList={StateBar}
                  onClick={(this.handleClick.bind(this))}
                  current={current}
                />
                <AtFab size='small' onClick={()=>this.addForm()}>
                  <view className='at-fab__icon at-icon at-icon-add '></view>
                </AtFab>
                {ComponentName[current]}
            </View>

        )
    }
}

export default Engineer;