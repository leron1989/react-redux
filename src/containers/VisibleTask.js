import React from 'react';
import TaskTable from '../components/TaskTable';
import { fetchTasks } from '../actions'
import { connect } from 'react-redux'

class VisibleTask extends React.Component{

    componentDidMount(){
        console.log("componentDidMount")
        const { dispatch, intanceId } = this.props;
        dispatch(fetchTasks(intanceId));
        console.log(this.props.tasks)
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps")
    //     const { dispatch, intanceId } = this.props;
    //     dispatch(fetchTasks(intanceId));
    // }

    render(){
        console.log("render")
        const { tasks } = this.props
        console.log(tasks)
        return(
            <div>
                <TaskTable tasks={tasks}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { selectedIntanceId, taskReducer } = state
    const {
      isFetching,
      lastUpdated,
      items: tasks
    } = taskReducer[selectedIntanceId] || {
      isFetching: true,
      items: []
    }
  
    return {
        selectedIntanceId,
        tasks,
        isFetching,
        lastUpdated
    }
  }
  
  export default connect(mapStateToProps)(VisibleTask)