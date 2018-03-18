import { combineReducers } from 'redux'
import { REQUEST_TASKS, RECEIVE_TASKS } from './actions'


function selectedIntanceId(state = "710f79a7-00da-11e8-8779-18dbf211704a", action) {
      return state
}

function tasks(
    state = {
      isFetching: false,
      tasks: []
    },
    action
  ) {
    switch (action.type) {
      case REQUEST_TASKS:
        return Object.assign({}, state, {
          isFetching: true
        })
      case RECEIVE_TASKS:
        return Object.assign({}, state, {
          isFetching: false,
          tasks: action.tasks
        })
      default:
        return state
    }
  }

function taskReducer(state = {}, action){
    switch (action.type) {
        case RECEIVE_TASKS:
        case REQUEST_TASKS:
            return Object.assign({}, state, {
                [action.intanceId]: tasks(state[action.intanceId], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedIntanceId,
    taskReducer
  })
  
  export default rootReducer