import React from 'react';
import logoImg from '../../../images/search-logo.jpg'
import searchToolbarBg from '../../../images/search-toolbar-bg.jpg'
import './search.css'
class Search extends React.Component{
  render(){
    return (
      <div className="search">
        <div className="logo">
          <img alt='img' src={logoImg} />
        </div>
        <div style={{backgroundImage: `url(${searchToolbarBg})`}} className="toolbar">
          <div className="input"><input type="text"/></div>
          <div className="button">搜索</div>
        </div>
      </div>
    )
  }
}
export default Search
