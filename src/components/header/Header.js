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
      <div className="header">
        {this.props.showBack?
          <div onClick={this.props.history.goBack} className="logo"><img style={{height:'70%',margin:'5%',}} alt='logo' src={backImg}/></div>
          :
          <div className="logo"><img alt='logo' src={img1}/></div>
        }
        <div className="caption">{this.props.headerTitle?this.props.headerTitle:'中清商务'}</div>
        <div className="call"><img alt='call' src={img3}/></div>
      </div>
    )
  }
}
const mapStateToProps=store=>({
  showBack:store.showBack,
  headerTitle:store.headerTitle
})
export default connect(mapStateToProps)(withRouter(Header))
