import React from 'react';
import Carousel from 'antd/lib/carousel';
import {connect} from 'react-redux';
import {getLeasesData} from '../../../redux/actions/actions.js'
import Loading from '../../loading/Loading.js'
import './home.css'

import channelsImg1 from '../../../images/channel-icon-01.png'
import channelsImg2 from '../../../images/channel-icon-02.png'
import channelsImg3 from '../../../images/channel-icon-03.png'
import channelsImg4 from '../../../images/channel-icon-04.png'
import channelsImg5 from '../../../images/channel-icon-05.png'
import channelsImg6 from '../../../images/channel-icon-06.png'
import channelsImg7 from '../../../images/channel-icon-07.png'
import channelsImg8 from '../../../images/channel-icon-08.png'
import captionImg from '../../../images/main-hots-caption.png'
import hotsImg from '../../../images/main-hots-dot.png'
import leasesCaptionImg from '../../../images/main-leases-caption.png'
import recommendsCaptionImg from '../../../images/main-recommends-caption.png'
class Home extends React.Component{
  componentWillMount(){
    this.props.dispatch(getLeasesData())
  }
  openArticle(catid,id){
    this.props.history.push(`/article/${catid}c${id}`)
  }
  slides1Click(url){
    if(/^http:\/\/cms.5i71.org\/index.php\?m=content&c=index&a=show&catid=\d+&id=\d+/.test(url)){
      let arr = url.split('catid=')[1].split('&id=')
      this.props.history.push(`/article/${arr[0]}c${arr[1]}`)
    }else{
      window.location.href=url
    }
  }
  channelClick(catid,name){
    this.props.history.push(`/articlelist/${catid}`)
    this.props.dispatch({type:'HEADERTITLE',content:name})
  }
  leasesClick(id){
    this.props.history.push(`/goodsdetails/${id}`)
  }
  render(){
    let slides1 = this.props.initializationData.data.main.slides
    let channels = [
        {name:'资讯',catid:'1',img:channelsImg1},
        {name:'企业',catid:'2',img:channelsImg2},
        {name:'产品',catid:'3',img:channelsImg3},
        {name:'文档',catid:'4',img:channelsImg4},
        {name:'视频',catid:'5',img:channelsImg5},
        {name:'展会',catid:'6',img:channelsImg6},
        {name:'杂志',catid:'7',img:channelsImg7},
        {name:'商务',catid:'8',img:channelsImg8}
      ]
    let hots = this.props.initializationData.data.main.hots
    let hotCarouselSettings={
      slidesToShow:2,
      autoplay:true,
      vertical:true,
      dots:false
    }
    let leasesData=this.props.leasesData.data
    let recommendsData=this.props.initializationData.data.main.recommends
    return (
      <div className="home">
        <div className='banner'>
          <Carousel autoplay>
            {slides1.map(item=>(
              <div key={item.id} onClick={this.slides1Click.bind(this,item.url)}>
                <img alt="img" src={item.thumb}/>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="channels">
          <ul>
            {channels.map(item => (
              <li onClick={this.channelClick.bind(this,item.catid,item.name)} key={item.catid} style={{backgroundImage:`url(${item.img})`}}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hots clearfix">
          <div className="caption" onClick={this.channelClick.bind(this,24,'中清快报')} style={{backgroundImage: `url(${captionImg})`}}></div>
          <Carousel {...hotCarouselSettings}>
            {hots.map(item=>(
              <div key={item.id} onClick={this.openArticle.bind(this,item.catid,item.id)} style={{backgroundImage:`url(${hotsImg})`}}>
                {item.title}
              </div>
            ))}
          </Carousel>
        </div>
        {
          leasesData ?
          <div className="leases">
            <div className="caption" style={{backgroundImage:`url(${leasesCaptionImg})`}}>
              <span onClick={()=>{this.props.history.push('/business')}}>更多...</span>
            </div>
            <ul>
              {leasesData.data.list.map(item=>(
                <li key={item.id} onClick={this.leasesClick.bind(this,item.id)}>
                  <div className="thumb"><img alt='img' src={`http://business.5i71.org/${item.thumb}`}/></div>
                  <div className="title">{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
          :
          <Loading/>
        }
        <div className="recommends">
          <div className="caption" style={{backgroundImage:`url(${recommendsCaptionImg})`}}>
            <span onClick={this.channelClick.bind(this,18,'每日推荐')}>更多...</span>
          </div>
          <ul>
            {recommendsData.map(item=>(
              <li key={item.id} onClick={this.openArticle.bind(this,item.catid,item.id)}>
                <img alt='img' src={item.thumb}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(store)=>({
	initializationData:store.initializationData,
  leasesData:store.leasesData
})
export default connect(mapStateToProps)(Home)
