import {combineReducers} from 'redux'

function initializationData(state='',action){
  switch(action.type){
    case 'INITIALIZATIONDATA':
      return action.content
    default:
      return state
  }
}

function leasesData(state='',action){
  switch(action.type){
    case 'LEASESDATA':
      return action.content
    default:
      return state
  }
}

function showFooter(state=true,action){
  switch(action.type){
    case 'SHOWFOOTER':
      return action.content
    default:
      return state
  }
}

function nowArticleContent(state='',action){
  switch(action.type){
    case 'NOWARTICLECONTENT':
      return action.content
    default:
      return state
  }
}
function showBack(state=false,action){
  switch(action.type){
    case 'SHOWBACK':
      return action.content
    default:
      return state
  }
}

function headerTitle(state='中清商务',action){
  switch(action.type){
    case 'HEADERTITLE':
      return action.content
    default:
      return state
  }
}

function headerTransparent(state=false,action){
  switch(action.type){
    case 'HEADERTRANSPARENT':
      return action.content
    default:
      return state
  }
}

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

function articleListToTheEnd(state='',action){
  switch(action.type){
    case 'ARTICLELISTISTOTHEEND':
      return action.content
    default:
      return state
  }
}

function nowGoodsDetails(state='',action){
  switch(action.type){
    case 'NOWGOODSDETAILS':
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
  nowGoodsDetails
})
