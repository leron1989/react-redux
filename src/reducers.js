import { combineReducers } from 'redux'
import { SELECT_INTANCEID, REQUEST_TASKS, RECEIVE_TASKS } from './actions'


function selectedIntanceId(state = "710f79a7-00da-11e8-8779-18dbf211704a", action) {
    switch (action.type) {
    case SELECT_INTANCEID:
      return action.intanceId
    default:
      return state
    }
  }

function taskReducer(
    state = {
        isFetching: false,
        tasks: []
    }, action){
    switch(action.type){
        case REQUEST_TASKS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case RECEIVE_TASKS:
            return Object.assign({}, state, {
                tasks:action.tasks,
                lastUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    selectedIntanceId,
    taskReducer
  })
  
  export default rootReducer