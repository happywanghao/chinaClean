import React from 'react';
import {connect} from 'react-redux'
import {getGoodsDetails} from '../../../redux/actions/actions.js'
import Loading from '../../loading/Loading.js'
import './goodsDetails.css'
class GoodsDetails extends React.Component{
  componentDidMount(){
    this.props.dispatch(getGoodsDetails(this.props.match.params.id))
    this.props.dispatch({type:'SHOWFOOTER',content:false})
    this.props.dispatch({type:'SHOWBACK',content:true})
    this.props.dispatch({type:'HEADERTITLE',content:'商品详情'})
  }
  componentWillUnmount(){
    this.props.dispatch({type:'SHOWFOOTER',content:true})
    this.props.dispatch({type:'SHOWBACK',content:false})
    this.props.dispatch({type:'HEADERTITLE',content:''})
  }
  render(){
    let item=this.props.nowGoodsDetails.item
    return (
      this.props.nowGoodsDetails&&this.props.match.params.id===this.props.nowGoodsDetails.item.id ?
      <div className="goodsDetails">
        <div className="images">
          <img alt="img" src={`http://business.5i71.org/${item.thumb}`}/>
        </div>
        <h2 className="name">{item.name}</h2>
        <p className="price"><span>￥<em>{item.price}</em>/日均</span><span className='touse'>我要租用&gt;&gt;</span></p>
        <p className="introduce">{item.content}</p>
      </div>
      :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
nowGoodsDetails:store.nowGoodsDetails
})
export default connect(mapStateToProps)(GoodsDetails)
