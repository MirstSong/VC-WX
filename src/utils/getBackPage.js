import Taro from '@tarojs/taro';

export  function GetBackDate() {
    let pages = Taro.getCurrentPages();
    let {__data__:{BackDate:result}} = pages[pages.length - 1]; // 获取当前页面
    return result
}

export function BackPage(data){
    let pages = Taro.getCurrentPages();  // 当前页的数据，可以输出来看看有什么东西
      let prevPage = pages[pages.length - 2];  // 上一页的数据，也可以输出来看看有什么东西
       prevPage.setData({
        BackDate: data
      })
      Taro.navigateBack({})
}