import {combineReducers} from 'redux'

function initializationData(state='',action){
  switch(action.type){
    case 'INITIALIZATIONDATa':
      return action.content
    default:
      return state
  }
}

export default combineReducers({
  initializationData,
})
