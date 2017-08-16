import React from 'react';
import './header.css'
import img1 from '../../images/header-logo.png'
import img2 from '../../images/header-caption.png'
import img3 from '../../images/header-call.png'
import backImg from '../../images/back.png'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
class Header extends React.Component{
  render(){
    return (
      <div style={this.props.headerTransparent?{position:'absolute',top:0,backgroundColor:'rgba(0, 0, 0, 0)',zIndex:100}:{}} className="header">
        {this.props.showBack?
          <div onClick={this.props.history.goBack} className="logo"><img style={{height:'70%',margin:'5%',}} alt='logo' src={backImg}/></div>
          :
          <div className="logo"><img alt='logo' src={img1}/></div>
        }
        <div className="caption">{this.props.headerTitle?this.props.headerTitle:'中清商务'}</div>
        <div className="call"><a href="tel:02224436800"><img alt='call' src={img3}/></a></div>
      </div>
    )
  }
}
const mapStateToProps=store=>({
  showBack:store.showBack,
  headerTitle:store.headerTitle,
  headerTransparent:store.headerTransparent
})
export default connect(mapStateToProps)(withRouter(Header))
