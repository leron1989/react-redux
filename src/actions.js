import fetch from 'cross-fetch'

export const SELECT_INTANCEID = 'SELECT_INTANCEID'
export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECEIVE_TASKS'

const testData = {
    data:[
    {
        "taskId": "71597a22-00da-11e8-8779-18dbf211704a",
        "taskName": "example2222(example2222-部门副总审批)",
        "createTime": "2018-01-24 15:44:43",
        "endTime": "2018-01-24 15:45:20"
    },
    {
        "taskId": "71132236-00da-11e8-8779-18dbf211704a",
        "taskName": "example2222(example2222-流程起草人)",
        "createTime": "2018-01-24 15:44:43",
        "endTime": "2018-01-24 15:44:43"
    }
]
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
        tasks: json.data,
        receivedAt: Date.now()
    }
}

export function fetchTasks(intanceId){
    return dispatch => {
        dispatch(requestTasks(intanceId));
        setTimeout(() => {
            dispatch(receiveTasks(intanceId, testData))
        }, 500);
        // return fetch(`http://localhost:8080/pms/rest/tasks/query?intanceId=710f79a7-00da-11e8-8779-18dbf211704a`)
        //     .then(response => response.json())
        //     .then(json => dispatch(receiveTasks(intanceId, json)))
    }
}