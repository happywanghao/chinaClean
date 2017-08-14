import React from 'react';
import './header.css'
import img1 from '../../images/header-logo.png'
import img2 from '../../images/header-caption.png'
import img3 from '../../images/header-call.png'
class Header extends React.Component{
  render(){
    return (
      <div className="header">
        <div className="logo"><img alt='logo' src={img1}/></div>
        <div className="caption"><img alt='caption' src={img2}/></div>
        <div className="call"><img alt='call' src={img3}/></div>
      </div>
    )
  }
}
export default Header
