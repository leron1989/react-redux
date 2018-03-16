import React from 'react';
import TaskTableBody from './TaskTableBody';

export default class TaskTable extends React.Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <td>序号</td>
                        <td>任务节点</td>
                        <td>开始时间</td>
                        <td>结束时间</td>
                    </tr>
                </thead>
                <TaskTableBody tasks={this.props.tasks}/>
            </table>
        )
    }
}