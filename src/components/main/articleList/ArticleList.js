import React from 'react';
import {connect} from 'react-redux'
import {getArticleList} from '../../../redux/actions/actions.js'
import Loading from '../../loading/Loading.js'
import './articleList.css'
class ArticleList extends React.Component{
  state={page:1,loading:false}
  componentWillMount(){
    this.catid=this.props.match.params.catid
    this.props.dispatch(getArticleList(this.catid,this.state.page))
    this.props.dispatch({type:"SHOWFOOTER",content:false})
    this.props.dispatch({type:"SHOWBACK",content:true})
  }
  componentWillUnmount(){
    this.props.dispatch({type:"SHOWFOOTER",content:true})
    this.props.dispatch({type:"SHOWBACK",content:false})
    this.props.dispatch({type:"HEADERTITLE",content:''})
    this.props.dispatch({type:'ARTICLELISTISTOTHEEND',content:false})
  }
  onScroll(e){
    let loadNextPage = e.target.offsetHeight + e.target.scrollTop > document.querySelector('.articlelist .articlelistul').offsetHeight
    if(loadNextPage&&(!this.state.loading)&&(!this.props.articleListToTheEnd)){
      this.props.dispatch(getArticleList(this.catid,this.state.page+1))
      this.setState({page:this.state.page+1,loading:true})
    }
  }
  componentWillReceiveProps(){
    this.setState({loading:false})
  }
  articleClick(catid,id){
    this.props.history.push(`/article/${catid}c${id}`)
  }
  render(){
    if(this.props.articleListToTheEnd){alert('没有更多内容了')}
    let nowArticleList=this.props.nowArticleList.contents
    return (
      nowArticleList && (nowArticleList[0].catid===this.catid) ?
      <div onScroll={this.onScroll.bind(this)} className="articlelist">
        <div className="articlelistul">
          {nowArticleList.map(item=>(
            <div key={Math.random()} className="struct clearfix" onClick={this.articleClick.bind(this,item.catid,item.id)}>
              <div className="thumb"><img alt='img' src={item.thumb} /></div>
              <div className="detail">
                <div className="title">{item.title}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
        {this.state.loading ? <div style={{position: 'fixed',top:'45px',bottom: 0,left: 0,right: 0,display:'flex'}}><Loading/></div> : null}
      </div>
      :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
  nowArticleList:store.nowArticleList,
  articleListToTheEnd:store.articleListToTheEnd
})
export default connect(mapStateToProps)(ArticleList)
