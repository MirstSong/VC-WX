import { View } from '@tarojs/components';
import  { Component } from 'react';
import { AtTabBar,AtFab } from 'taro-ui';
import Taro from '@tarojs/taro';

import Figureout from './component/FigureOut'
import Generation from './component/Generation'
import Accomplish from './component/accomplish'

import './stateTable.scss'


const StateBar = [
    { title: '待办事项',iconPrefixClass:'icon', iconType: 'daiban', text: 'new' },
    { title: '处理完成',iconPrefixClass:'icon', iconType: 'chuli'},
    { title: '未解决',iconPrefixClass:'icon', iconType: 'weijiejue', text: '100', max: 99 }
]
// eslint-disable-next-line react/jsx-key
const componentName = [<Generation />,<Accomplish />,<Figureout />]
class StateTabele extends Component{
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
            <View className='stateTbale'>
                <AtTabBar
                  fixed
                  tabList={StateBar}
                  onClick={(this.handleClick.bind(this))}
                  current={current}
                />
                <AtFab size='small' onClick={()=>this.addForm()}>
                  <view className='at-fab__icon at-icon at-icon-add '></view>
                </AtFab>
                {componentName[current]}
            </View>

        )
    }
};
export default StateTabele;