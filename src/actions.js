import fetch from 'cross-fetch'

export const SELECT_INTANCEID = 'SELECT_INTANCEID'
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

function selectIintanceId(intanceId){
    return{
        type: SELECT_INTANCEID,
        intanceId
    }
}

function requestTasks(intanceId){
    return{
        type: REQUEST_TASKS,
        intanceId
    }
}

function receiveTasks(intanceId, json){
    return {
        type: RECEIVE_TASKS,
        intanceId,
        tasks: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export function fetchTasks(intanceId){
    return dispatch => {
        dispatch(requestTasks(intanceId));
        return fetch(`http://localhost:8080/pms/rest/tasks/query?intanceId=710f79a7-00da-11e8-8779-18dbf211704a`)
            .then(response => response.json())
            .then(json => dispatch(receiveTasks(intanceId, json)))
    }
}