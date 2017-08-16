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
    console.log(this.props.nowGoodsDetails)
    return (
      this.props.nowGoodsDetails&&this.props.match.params.id===this.props.nowGoodsDetails.item.id ?
      <div>
        {this.props.nowGoodsDetails.item.content}
      </div>
      :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
nowGoodsDetails:store.nowGoodsDetails
})
export default connect(mapStateToProps)(GoodsDetails)
