import { View } from '@tarojs/components';
import React,{ Component } from 'react';
import Taro from '@tarojs/taro';
import { AtInput,AtButton,AtIcon } from 'taro-ui'
import Breakdown from './component/breakdown';


import './addFrom.scss'

class AddFrom extends Component {
  constructor () {
    super(...arguments)
    this.BottoMselect = React.createRef()

    this.state = {
      BillUser:'',
      agent:'',
      linkman:"",
      linkmanPhone:"",
      machineCode:'',
      productModle:'',
     
    }
  }
  componentDidShow () {
   let pages = Taro.getCurrentPages();
    let {__data__:{BackDate:productModle}} = pages[pages.length - 1]; // 获取当前页面
    if (productModle)  this.setState({productModle})
 }
  Submit () {
    console.log(this.BottoMselect.current.state) //组件的数据
    console.log(this.state)
    Taro.reLaunch({
      url: '/pages/stateTable/stateTable'
    })
  }
  onReset () {
    this.BottoMselect.current.onReset();
    let Keys = Object.keys(this.state);
    Keys.forEach( e =>this.setState({[e]: ''}))
    React.$toast('清除成功')
  }
  //扫描二维码
  scanVal(){
    Taro.scanCode({
      success: ({result}) => {
        this.setState({machineCode:result})
      }
    })
  }
  render() {
    let {BillUser,agent,linkman,linkmanPhone,machineCode,productModle} = this.state
    return (
      <View className='addFrom'>
              <AtInput 
                name='BillUser' 
                title='开单人' 
                type='text' 
                value={BillUser} 
                onChange={e=>this.setState({BillUser:e})} 
              />
              <AtInput 
                name='agent' 
                title='代理商' 
                type='text' 
                value={agent} 
                onChange={e=>this.setState({agent:e})} 
              />
              <AtInput
                required
                name='machineCode' 
                title='机器编号'
                type='text'
                value={machineCode}
                onChange={e=>this.setState({machineCode:e})}
              >
                <AtIcon prefixClass='icon' value='saoma' size='30' color='#ccc' onClick={()=>this.scanVal()}></AtIcon>
              </AtInput>
              <AtInput
                required
                name='productModle' 
                title='产品型号'
                type='text'
                value={productModle}
                onChange={e=>this.setState({productModle:e})}
              >
                <AtIcon value='search' size='30' color='#ccc' onClick={()=>Taro.navigateTo({url:'/pages/addFrom/productState/productModel'})}></AtIcon>
              </AtInput>
              <AtInput 
                required
                name='linkman' 
                title='联系人' 
                type='text'
                value={linkman} 
                onChange={e=>this.setState({linkman:e})} 
              />
              <AtInput 
                required
                name='linkmanPhone' 
                title='联系人电话' 
                type='phone'
                value={linkmanPhone} 
                onChange={e=>this.setState({linkmanPhone:e})} 
              />
              {/* 故障信息 */}
              <Breakdown ref={this.BottoMselect} />

              <AtButton name='submit' type='primary' onClick={()=>this.Submit()}>提交</AtButton>
              <AtButton name='reset' type='secondary' onClick={()=>this.onReset()}>重置</AtButton>
      </View>
    );
  }
}

export default AddFrom;
