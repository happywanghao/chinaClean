import {combineReducers} from 'redux'
//预加载信息
function initializationData(state='',action){
  switch(action.type){
    case 'INITIALIZATIONDATA':
      return action.content
    default:
      return state
  }
}
//首页租赁商品信息
function leasesData(state='',action){
  switch(action.type){
    case 'LEASESDATA':
      return action.content
    default:
      return state
  }
}
//是否显示footer
function showFooter(state=true,action){
  switch(action.type){
    case 'SHOWFOOTER':
      return action.content
    default:
      return state
  }
}
//当前文章详情
function nowArticleContent(state='',action){
  switch(action.type){
    case 'NOWARTICLECONTENT':
      return action.content
    default:
      return state
  }
}
//头部是否显示返回按钮
function showBack(state=false,action){
  switch(action.type){
    case 'SHOWBACK':
      return action.content
    default:
      return state
  }
}
//头部的title
function headerTitle(state='中清商务',action){
  switch(action.type){
    case 'HEADERTITLE':
      return action.content
    default:
      return state
  }
}
//header是否透明
function headerTransparent(state=false,action){
  switch(action.type){
    case 'HEADERTRANSPARENT':
      return action.content
    default:
      return state
  }
}
//文章列表
function nowArticleList(state='',action){
  switch(action.type){
    case 'NOWARTICLELISTCONTENT':
      if(!state){
        return action.content
      }else if(!action.content.contents){
        return state
      }else if(state.contents[0].catid===action.content.contents[0].catid){
        action.content.contents=state.contents.concat(action.content.contents)
      }
      return action.content
    default:
      return state
  }
}
//文章列表是否到底了
function articleListToTheEnd(state='',action){
  switch(action.type){
    case 'ARTICLELISTISTOTHEEND':
      return action.content
    default:
      return state
  }
}
//商品详情
function nowGoodsDetails(state='',action){
  switch(action.type){
    case 'NOWGOODSDETAILS':
      return action.content
    default:
      return state
  }
}
//搜索的列表
function nowSearchList(state='',action){
  switch(action.type){
    case 'NOWSEARCHLIST':
      if(!state){
        return action.content
      }else if(!action.content){
        return action.content
      }else{
        action.content.searchs=state.searchs.concat(action.content.searchs)
      }
      return action.content
    default:
      return state
  }
}
//搜索的文章
function nowSearchviewContent(state='',action){
  switch(action.type){
    case 'SEARCHVIEWCONTENT' :
      return action.content
    default:
      return state
  }
}

export default combineReducers({
  initializationData,
  leasesData,
  showFooter,
  nowArticleContent,
  showBack,
  headerTitle,
  headerTransparent,
  nowArticleList,
  articleListToTheEnd,
  nowGoodsDetails,
  nowSearchList,
  nowSearchviewContent
})
