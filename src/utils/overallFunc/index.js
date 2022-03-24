import Taro from '@tarojs/taro';
import React from 'react';

React.$toast = function (title='',icon='none'){
    console.log(title)
    Taro.showToast({
        title,
        icon,
        duration:2500
    })
}
