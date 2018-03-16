import React from 'react';
import TaskTableTr from './TaskTableTr'

export default class TaskTableBody extends React.Component{

    render(){
        return(
            <tbody>
                {this.props.tasks.map((task, index) => {
                    return (<TaskTableTr taskDetails={task} key={task.taskId} index={index} />);
                })}
            </tbody>
        )
    }
}