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

export default combineReducers({
  initializationData,
  leasesData,
  showFooter,
  nowArticleContent,
  showBack,
  headerTitle
})
