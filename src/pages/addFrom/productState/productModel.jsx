/* eslint-disable react/jsx-no-undef */
import { View } from '@tarojs/components';
import  { Component } from 'react';
import { AtIndexes,AtSearchBar} from 'taro-ui'

import './product.scss';

import {BackPage} from '../../../utils/getBackPage.js'



var list = [{
    title: 'A',
    key: 'A',
    items: [
      {
        'name': 'A阿坝'
        // 此处可加其他业务字段
      },
      {
        'name': 'A阿拉善'
      }
      ,
      {
        'name': 'A阿拉善1'
      }
      ,
      {
        'name': 'A阿拉善2'
      }
      ,
      {
        'name': 'A阿拉善3'
      }
      ,
      {
        'name': 'A阿拉善4'
      },
      {
        'name': 'A阿拉善5'
      },
      {
        'name': 'A阿拉善6'
      },
      {
        'name': 'A阿拉善7'
      }, {
        'name': 'A阿拉善8'
      }
    ]
    },
    {
      title: 'B',
      key: 'B',
      items: [
        {
          'name': 'B北京'
        },
        {
            'name': 'B北京1'
          },
          {
            'name': 'B北京2'
          },
          {
            'name': 'B北京3'
          },
          {
            'name': 'B北京4'
          },
        {
          'name': 'B保定'
        }]
    },
    {
        title: 'C',
        key: 'C',
        items: [
          {
            'name': 'C常州',
          },
          {
              'name': 'C沧州'
            },
            {
              'name': 'C沧州2'
            },
            {
              'name': 'C沧州3'
            },
            {
              'name': 'C沧州4'
            },
          {
            'name': 'C沧州5'
          }]
      }
  ]
class ProductModle extends Component {
    constructor(props){
        super(props)
        this.state={
          queryString:""
        }
    }
     onClick ({name}) {
      // let pages = Taro.getCurrentPages();  // 当前页的数据，可以输出来看看有什么东西
      // let prevPage = pages[pages.length - 2];  // 上一页的数据，也可以输出来看看有什么东西
      // console.log(prevPage)
      //  prevPage.setData({
      //   productModle: name
      // })
      // Taro.navigateBack({})
      BackPage(name)
    }

      onScrollToUpper() {}

      // or 使用箭头函数
      // onScrollToUpper = () => {}
    
      onScroll(e){
        console.log(e.detail)
      }
    
      handleActionClick(){
        console.log(1)
        this.scrollViewTop = '500px'
        // let {queryString} = this.state
      }
    render() {
        return (
            <View style='height:100vh' className='product'>
                <AtIndexes
                  list={list}
                  isVibrate
                  onClick={this.onClick.bind(this)}
                  onScrollIntoView={fn => { this.scrollIntoView = fn }}
                >
                   <View className='custom-area'>
                      <AtSearchBar  
                        fixed
                        placeholder='搜索' 
                        value={this.state.queryString}
                        onChange={e=>this.setState({queryString:e})}
                        onActionClick={this.handleActionClick.bind(this)}
                      />
                  </View>
                </AtIndexes>
            </View>
        );
    }
}

export default ProductModle;