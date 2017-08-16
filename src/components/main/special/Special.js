import React from 'react';
import './special.css'
import {connect} from 'react-redux'

class Special extends React.Component{
  handleClick(el,url=''){
    switch(el){
      case 'banner':
        window.location.href=url
        return
      case 'article':
        this.props.history.push(`/article/${url}`)
        return
      default:
        return
    }
  }
  render(){
    let special = this.props.initializationData.data.special
    console.log(special.reports);
    let date = special.countdown.description.replace(/-/g, "/");
    let endDate = new Date(Date.parse(date))
    let curDate = new Date()
        endDate.setHours(0,0,0,0)
        curDate.setHours(0,0,0,0)
    let diff = endDate.getTime() - curDate.getTime()
    let day = Math.floor(diff/(24*3600*1000))
    let countDown = String(day > 0 ? day : 0)

    return (
      <div>
        <div className="special">
          <div onClick={this.handleClick.bind(this,'banner',special.banner.url)} className="banner">
            <img alt='img' src={special.banner.thumb}/>
          </div>
          <div className="countdown">
            <div className="background" style={{backgroundImage:`url(${special.countdown.thumb})`}}>
              <div className="number">{countDown}</div>
            </div>
          </div>
          <div className="reports">
            {special.reports.map(item=>(
              <div onClick={this.handleClick.bind(this,'article',`${item.catid}c${item.id}`)} key={item.id} className="article clearfix struct_single" >
                <div className="thumb"><img alt='img' src={item.thumb} /></div>
                <div className="detail">
                  <div className="title">{item.title}</div>
                  <div className="addtime">发布时间：{item.updatetime}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=store=>({
  initializationData:store.initializationData,
})
export default connect(mapStateToProps)(Special)
