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

export default combineReducers({
  initializationData,
  leasesData
})
