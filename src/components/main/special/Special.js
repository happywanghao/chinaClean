import React from 'react';
import './special.css'
class Special extends React.Component{
  render(){
    return (
      <div>
        <div className="special">
          <div className="banner">
            <img />
          </div>
          <div className="countdown">
            <div className="background">
              <div className="number"></div>
            </div>
          </div>
          <div className="reports">
            <div className="article struct_single" >
              <div className="thumb"><img /></div>
              <div className="detail">
                <div className="title"></div>
                <div className="addtime"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
export default Special
