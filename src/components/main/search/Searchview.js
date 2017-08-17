import React from 'react';
import {connect} from 'react-redux'
import {getSearchviewContent} from '../../../redux/actions/actions.js'
import Loading from '../../loading/Loading.js'
import './searchview.css'
class Searchview extends React.Component{
  componentDidMount(){
    this.props.dispatch(getSearchviewContent(this.props.match.params.id))
    this.props.dispatch({type:'SHOWFOOTER',content:false})
    this.props.dispatch({type:'SHOWBACK',content:true})
    this.props.dispatch({type:'HEADERTITLE',content:'详情'})
  }
  componentWillUnmount(){
    this.props.dispatch({type:'SHOWFOOTER',content:true})
    this.props.dispatch({type:'SHOWBACK',content:false})
    this.props.dispatch({type:'HEADERTITLE',content:''})
  }
  render(){
    let newId=Number(this.props.match.params.id)
    let nowSearchviewContent=this.props.nowSearchviewContent
    let oldId=nowSearchviewContent.id
    return (
      newId === oldId ?
      <div className="searchview">
        <h1>{nowSearchviewContent.title}</h1>
        <span>发布时间：{nowSearchviewContent.updatetime}</span>
        <p style={{width:'100%'}} dangerouslySetInnerHTML={{__html:nowSearchviewContent.content}} />
      </div>
     :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
  nowSearchviewContent:store.nowSearchviewContent
})
export default connect(mapStateToProps)(Searchview)
