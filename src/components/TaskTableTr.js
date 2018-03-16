import React from 'react';

export default class TaskTableTr extends React.Component{

    render(){
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.taskDetails.taskName}</td>
                <td>{this.props.taskDetails.createTime}</td>
                <td>{this.props.taskDetails.endTime}</td>
            </tr>
        )
    }
}