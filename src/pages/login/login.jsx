import React,{ Component } from 'react';
import { View } from '@tarojs/components';
import Taro,{getCurrentInstance} from '@tarojs/taro';
// eslint-disable-next-line no-unused-vars
import { AtButton,AtAvatar,AtInput   } from 'taro-ui'

import './login.scss'


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            userName:"",
            passWord:"",
            loading:false,
            Flag:""
        }
    }
    componentDidMount () {
       const {options} = getCurrentInstance().router.params;
       this.setState({Flag:options})
        Taro.setNavigationBarTitle({
            title: options
        })
    }
    accountUser (value,flag) {
        if(flag === 'user') return this.setState({ userName:value})
        this.setState({ passWord:value})
        // 在小程序中，如果想改变 value 的值，需要 `return value` 从而改变输入框的当前值
        return value
    }
    login(){
        let {userName,passWord} = this.state
        this.setState({ loading:true})
        if(userName===''){
            React.$toast('输入账号');
            this.setState({ loading:false});
            return 
        }
        if(passWord===''){
            React.$toast('输入密码');
            this.setState({ loading:false});
            return 
        }

        let {Flag} = this.state;
        setTimeout(() => {
            React.$toast('登录成功','success');
            this.setState({ loading:false})
            // navigateTo switchTab
           let url =  Flag==='代理商'?'/pages/stateTable/stateTable':Flag==='区域组长'?'/pages/areaGroup/areaGroup':Flag==='工程师'?'/pages/engineer/engineer':'';
           console.log(url)
            Taro.reLaunch({url})
        }, 500);
    }

    render(){
        let {userName,passWord,loading} = this.state
        return(
            <View className='login'>
                <View className='bannerImg'><AtAvatar circle openData={{type: 'userAvatarUrl'}} size='large' /></View>
                <view> 
                 <AtInput title='账号:'  name='userName' type='text' value={userName}
                   onChange={e=>this.accountUser(e,'user')}
                 />
                 <AtInput title='密码:' name='password' type='password' value={passWord}
                   onChange={e=>this.accountUser(e)}
                 />
                </view>
                 <AtButton className='loginBtn' loading={loading} type='primary' onClick={()=>this.login()}>登录</AtButton>
            </View>
        )
    }
}

export default Login;