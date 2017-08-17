import React from 'react';
import {connect} from 'react-redux'
import {getArticleContent} from '../../../redux/actions/actions.js'
import Loading from '../../loading/Loading.js'
import './article.css'
class Article extends React.Component{
  componentDidMount(){
    this.props.dispatch(getArticleContent(this.props.match.params.id))
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
    let newId=this.props.match.params.id
    let nowArticleContent=this.props.nowArticleContent
    let oldId=`${nowArticleContent.catid}c${nowArticleContent.id}`
    return (
      newId===oldId ?
      <div className='article'>
        <h1>{nowArticleContent.title}</h1>
        <p>&nbsp;&nbsp;<span>发布时间：&nbsp;{nowArticleContent.updatetime}&nbsp;&nbsp;</span><span>&nbsp;点击率：{nowArticleContent.views}</span></p>
        <div style={{width:'100%'}} dangerouslySetInnerHTML={{__html:nowArticleContent.content}}  />
      </div>
      :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
  nowArticleContent:store.nowArticleContent
})
export default connect(mapStateToProps)(Article)
