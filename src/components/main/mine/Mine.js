import React from 'react';
import './mine.css'
import loginBgImg from '../../../images/login-bg.jpg'
import {connect} from 'react-redux'


class Mine extends React.Component{
  componentWillMount(){
    this.props.dispatch({type:'HEADERTRANSPARENT',content:true})
    this.props.dispatch({type:'SHOWBACK',content:true})
    this.props.dispatch({type:'SHOWFOOTER',content:false})
    this.props.dispatch({type:'HEADERTITLE',content:'账户登录'})

  }
  componentWillUnmount(){
    this.props.dispatch({type:'HEADERTRANSPARENT',content:false})
    this.props.dispatch({type:'SHOWBACK',content:false})
    this.props.dispatch({type:'SHOWFOOTER',content:true})
    this.props.dispatch({type:'HEADERTITLE',content:''})
  }
  render(){
    return (
      <div className="mine">
        <div style={{  backgroundImage: `url(${loginBgImg})`}} className="header"></div>
        <form >
          <div className="user">
            <span className="name">手机号码</span>
            <input type="text" placeholder="请输入手机号码"/>
          </div>
          <div className="user">
            <span className="pwd_span" >密码</span>
            <input type="password"  placeholder="请输入密码"/>
          </div>
          <button type="submit">登&nbsp;&nbsp;录</button>
        </form>
        <div className="reg">
          <a className="register">快速注册</a>
          <a className="password-retrieval">找回密码</a>
        </div>
      </div>
    )
  }
}
const mapStateTorops=store=>({

})
export default connect(mapStateTorops)(Mine)
