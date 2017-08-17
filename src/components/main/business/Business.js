import React from 'react';
import bannerImg from '../../../images/lease/banner.jpg'
import rentImg from '../../../images/lease/test1.png'
import buyImg from '../../../images/lease/test2.png'
import {connect} from 'react-redux'
import './business.css'
class Business extends React.Component{
  handleClick(type){
    this.props.history.push(`/category/${type}`)
  }
  render(){
    return (
      <div className="business">
        <div className="banner" style={{backgroundImage:`url(${bannerImg})`}}></div>
        <div className="rent" onClick={this.handleClick.bind(this,'rent')} style={{backgroundImage:`url(${rentImg})`}}></div>
        <div className="buy" onClick={this.handleClick.bind(this,'buy')} style={{backgroundImage:`url(${buyImg})`}}></div>
      </div>
    )
  }
}
const mapStateToProps=store=>({

})
export default connect(mapStateToProps)(Business)
