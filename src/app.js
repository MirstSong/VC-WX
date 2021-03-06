import { Component } from 'react'
import './app.scss';
// eslint-disable-next-line import/first
import 'taro-ui/dist/style/index.scss';
//全局方法
import './utils/overallFunc/index';
//icon
import './iconFunc.scss';

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
