import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import VisibleTask from './containers/VisibleTask'
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <VisibleTask />
    </Provider>,
    document.getElementById("root")
)


// const tasks = [
//     {
//         "taskId": "71597a22-00da-11e8-8779-18dbf211704a",
//         "taskName": "example2222(example2222-部门副总审批)",
//         "createTime": "2018-01-24 15:44:43",
//         "endTime": "2018-01-24 15:45:20"
//     },
//     {
//         "taskId": "71132236-00da-11e8-8779-18dbf211704a",
//         "taskName": "example2222(example2222-流程起草人)",
//         "createTime": "2018-01-24 15:44:43",
//         "endTime": "2018-01-24 15:44:43"
//     }
// ];