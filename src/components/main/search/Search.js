import React from 'react';
import logoImg from '../../../images/search-logo.jpg'
import searchToolbarBg from '../../../images/search-toolbar-bg.jpg'
import {connect} from 'react-redux'
import './search.css'
class Search extends React.Component{
  state={inputVal:''}
  inputChange(e){
    this.setState({inputVal:e.target.value})
  }
  handleClick(){
    if(this.state.inputVal.trim()){
      this.props.history.push(`/searchlist/${this.state.inputVal.trim()}`)
    }
  }
  render(){
    return (
      <div className="search">
        <div className="logo">
          <img alt='img' src={logoImg} />
        </div>
        <div style={{backgroundImage: `url(${searchToolbarBg})`}} className="toolbar">
          <div className="input"><input value={this.state.inputVal} placeholder='请输入关键字' onBlur={this.handleClick.bind(this)} onChange={this.inputChange.bind(this)} type="text"/></div>
          <div className="button" onClick={this.handleClick.bind(this)}>搜索</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps=store=>({

})
export default connect(mapStateToProps)(Search)
