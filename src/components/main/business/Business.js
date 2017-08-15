import React from 'react';
import bannerImg from '../../../images/lease/banner.jpg'
import rentImg from '../../../images/lease/test1.png'
import buyImg from '../../../images/lease/test2.png'
import './business.css'
class Business extends React.Component{
  render(){
    return (
      <div className="business">
        <div className="banner" style={{backgroundImage:`url(${bannerImg})`}}></div>
        <div className="rent" style={{backgroundImage:`url(${rentImg})`}}></div>
        <div className="buy" style={{backgroundImage:`url(${buyImg})`}}></div>
      </div>
    )
  }
}
export default Business
