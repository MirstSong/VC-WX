import { View,Picker} from '@tarojs/components';
import { Component } from 'react';

import {AtList, AtListItem,AtInput } from 'taro-ui'

import './breakdown.scss'

const faultMsgList= ['机械故障', '发动机故障', '电源故障', '轮胎故障'];
const serveTypeList= ['现场维修','返厂维修','换货','退货'];
const vestInCostList = ['华东大区','华北大区','华南大区','山东大区','中西大区'];
const industryLsit = ['液压伺服','起重','印刷包装与水泵','变频器','集成专机'];

class Breakdown extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            
            faultMsg:'', //故障信息
            faultMsgRemark:'', //故障备注
            serveType:'', //服务类型
            vestInCost:'', //归属费用
            industry:'',//行业性质
            address:''//所属大区
        }
      }
    onReset () {
        let Keys = Object.keys(this.state);
        Keys.forEach( e =>{
          this.setState({
              [e]: '',
          })
        })
    }
    onChange = e => {
        this.setState({
            faultMsg: faultMsgList[e.detail.value]
        })
    }
    onServeType = e =>{
        this.setState({
            serveType: serveTypeList[e.detail.value]
        })
    }
    onVestInCost = e =>{
        this.setState({
            vestInCost: vestInCostList[e.detail.value]
        })
    }
    onIndustry = e =>{
        this.setState({
            industry: industryLsit[e.detail.value]
        })
    }
    onAddress = e =>{
        this.setState({
            address: vestInCostList[e.detail.value]
        })
    }
    render() {
        let {faultMsg,faultMsgRemark,serveType,vestInCost,industry,address} = this.state
        return (
            <View className='breakdown'>
                <Picker mode='selector' range={faultMsgList} onChange={this.onChange}>
                <AtList>
                  <AtListItem
                    title='故障信息'
                    extraText={faultMsg}
                  />
                </AtList>
              </Picker>
                <AtInput 
                  clear
                  name='faultMsgRemark' 
                  title='故障备注' 
                  type='text' 
                  value={faultMsgRemark} 
                  onChange={e=>this.setState({faultMsgRemark:e})} 
                />

                <Picker mode='selector' range={serveTypeList} onChange={this.onServeType}>
                    <AtList>
                    <AtListItem
                      title='服务类型'
                      extraText={serveType}
                    />
                    </AtList>
                </Picker>

                <Picker mode='selector' range={vestInCostList} onChange={this.onVestInCost}>
                    <AtList>
                    <AtListItem
                      title='归属费用'
                      extraText={vestInCost}
                    />
                    </AtList>
                </Picker>

                <Picker mode='selector' range={industryLsit} onChange={this.onIndustry}>
                    <AtList>
                    <AtListItem
                      title='行业性质'
                      extraText={industry}
                    />
                    </AtList>
                </Picker>

                <Picker mode='selector' range={vestInCostList} onChange={this.onAddress}>
                    <AtList>
                    <AtListItem
                      title='所属大区'
                      extraText={address}
                    />
                    </AtList>
                </Picker>
                
            </View>
        );
    }
}

export default Breakdown;