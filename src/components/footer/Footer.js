import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import './footer.css'
import img1 from '../../images/footer-bg.png'

class Footer extends React.Component{
  render(){
    return (
      <div className="footer" style={{backgroundImage:`url(${img1})`}}>
        <ul className="menus">
          <li >
            <NavLink activeClassName='active' exact to='/'>
              <i className="iconfont icon icon-shouye"></i>
              <span>首页</span>
            </NavLink>
          </li>
          <li >
            <NavLink activeClassName='active' to='/business'>
              <i className="iconfont icon icon-zulin"></i>
              <span>商务</span>
            </NavLink>
          </li>
          <li >
            <NavLink activeClassName='active' to='/special'>
              <i className="iconfont icon icon-zhuanti"></i>
              <span>专题</span>
            </NavLink>
          </li>
          <li >
            <NavLink activeClassName='active' to='/search'>
              <i className="iconfont icon icon-icon"></i>
              <span>搜索</span>
            </NavLink>
          </li>
          <li >
            <NavLink activeClassName='active' to='/mine'>
              <i className="iconfont icon icon-wode"></i>
              <span>我的</span>
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
export default Footer
