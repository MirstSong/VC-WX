import { View } from '@tarojs/components';
import { Component } from 'react';
import Taro from '@tarojs/taro';
import { AtTabBar,AtFab } from 'taro-ui';
import './areaGroup.scss'

import Assignend from './component/assigned';//待指派
import PayVisit from './component/payvisit'; //待回访
import PayResult from './component/payResult';//回访结果
import Processed from './component/processed'; //处理中

// eslint-disable-next-line react/jsx-key
const ComponentName = [<Assignend /> ,<Processed /> ,<PayVisit /> ,<PayResult />]

const StateBar = [
    { title: '待指派',iconPrefixClass:'icon', iconType: 'daizhipai', text: 'new' },
    { title: '处理中',iconPrefixClass:'icon', iconType: 'weijiejue', text: '100', max: 99 },
    { title: '待回访',iconPrefixClass:'icon', iconType: 'daihuifang'},
    { title: '回访结果',iconPrefixClass:'icon', iconType: 'huifang'},
]
class AreaFroup extends Component {

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
            <View className='areaGroup'>
                <AtTabBar
                  fixed
                  tabList={StateBar}
                  onClick={(this.handleClick.bind(this))}
                  current={current}
                />
                <AtFab size='small' onClick={()=>this.addForm()}>
                  <view className='at-fab__icon at-icon at-icon-add '></view>
                </AtFab>
                {/* {current==0?<Generation />:current==1?<Accomplish />:<Figureout />} */}
                {ComponentName[current]}
            </View>

        )
    }
}

export default AreaFroup;