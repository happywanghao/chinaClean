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
  render(){
    let slides1 = this.props.initializationData.data.main.slides
    let channels = [
        {name:'资讯',id:'1',img:channelsImg1},
        {name:'企业',id:'2',img:channelsImg2},
        {name:'产品',id:'3',img:channelsImg3},
        {name:'文档',id:'4',img:channelsImg4},
        {name:'视频',id:'5',img:channelsImg5},
        {name:'展会',id:'6',img:channelsImg6},
        {name:'杂志',id:'7',img:channelsImg7},
        {name:'商务',id:'8',img:channelsImg8}
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
    console.log(recommendsData);
    return (
      <div className="home">
        <div className='banner'>
          <Carousel autoplay>
            {slides1.map(item=>(
              <div key={item.id}>
                <a href={item.url}>
                  <img alt="img" src={item.thumb}/>
                </a>
              </div>
            ))}
          </Carousel>
        </div>
        <div className="channels">
          <ul>
            {channels.map(item => (
              <li key={item.id} style={{backgroundImage:`url(${item.img})`}}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hots clearfix">
          <div className="caption" style={{backgroundImage: `url(${captionImg})`}}></div>
          <Carousel {...hotCarouselSettings}>
            {hots.map(item=>(
              <div key={item.id} style={{backgroundImage:`url(${hotsImg})`}}>
                {item.title}
              </div>
            ))}
          </Carousel>
        </div>
        {
          leasesData ?
          <div className="leases">
            <div className="caption" style={{backgroundImage:`url(${leasesCaptionImg})`}}>
              <span>更多...</span>
            </div>
            <ul>
              {leasesData.data.list.map(item=>(
                <li key={item.id}>
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
            <span>更多...</span>
          </div>
          <ul>
            {recommendsData.map(item=>(
              <li key={item.id}>
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
