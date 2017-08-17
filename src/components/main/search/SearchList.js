import React from 'react';
import {connect} from 'react-redux'
import Loading from '../../loading/Loading.js'
import {getSearchList} from '../../../redux/actions/actions.js'
import listLogo from '../../../images/search-list-logo.jpg'
import './searchlist.css'
class SearchList extends React.Component{
  state={page:1,loading:false}
  componentDidMount(){
    this.props.dispatch({type:'SHOWFOOTER',content:false})
    this.props.dispatch({type:'SHOWBACK',content:true})
    this.props.dispatch({type:'HEADERTITLE',content:`${this.props.match.params.val}`})
    this.props.dispatch(getSearchList(this.props.match.params.val))
  }
  componentWillUnmount(){
    this.props.dispatch({type:'SHOWFOOTER',content:true})
    this.props.dispatch({type:'SHOWBACK',content:false})
    this.props.dispatch({type:'HEADERTITLE',content:''})
    this.props.dispatch({type:"NOWSEARCHLIST",content:''})
    this.props.dispatch({type:'ARTICLELISTISTOTHEEND',content:false})
  }
  componentWillReceiveProps(nextProps){
    this.setState({loading:false})
  }
  onScroll(e){
    let loadNextPage = e.target.offsetHeight + e.target.scrollTop + 10 > document.querySelector('.searchList .articlelistul').offsetHeight
    if(loadNextPage&&(!this.state.loading)&&(!this.props.articleListToTheEnd)){
      this.props.dispatch(getSearchList(this.props.match.params.val,this.state.page+1))
      this.setState({page:this.state.page+1,loading:true})
    }
  }
  handleClick(id){
    this.props.history.push(`/searchview/${id}`)
  }
  render(){
    let nowSearchList=this.props.nowSearchList
    return (
      nowSearchList ?
      <div onScroll={this.onScroll.bind(this)} className="searchList">
        <div className="articlelistul">
          {nowSearchList.searchs.length>0 ?
            nowSearchList.searchs.map(item=>(
              <div key={Math.random()} onClick={this.handleClick.bind(this,item.id)} className="struct clearfix" >
                <div className="thumb"><img alt='img' src={listLogo} /></div>
                <div className="detail">
                  <div className="title">{decodeURI(item.caption)}</div>
                  <div className="description">{decodeURI(item.summary)}</div>
                </div>
              </div>
            ))
            :<h1 style={{textAlign:'center',lineHeight:'2rem'}}>没有找到结果</h1>
          }
        </div>
        {this.state.loading ? <div style={{position: 'fixed',top:'45px',bottom: 0,left: 0,right: 0,display:'flex'}}><Loading/></div> : null}
      </div>
      :<Loading/>
    )
  }
}
const mapStateToProps=store=>({
  nowSearchList:store.nowSearchList,
  articleListToTheEnd:store.articleListToTheEnd
})
export default connect(mapStateToProps)(SearchList)
