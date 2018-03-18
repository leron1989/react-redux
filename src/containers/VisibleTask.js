import React from 'react';
import TaskTable from '../components/TaskTable';
import { fetchTasks } from '../actions'
import { connect } from 'react-redux'

class VisibleTask extends React.Component{

    componentDidMount(){
        const { dispatch, selectedIntanceId } = this.props;
        dispatch(fetchTasks(selectedIntanceId));
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps")
    //     const { dispatch, intanceId } = this.props;
    //     dispatch(fetchTasks(intanceId));
    // }

    render(){
        const { tasks } = this.props
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
      tasks: tasks
    } = taskReducer[selectedIntanceId] || {
      isFetching: true,
      tasks: []
    }
  
    return {
        selectedIntanceId,
        tasks,
        isFetching,
        lastUpdated
    }
  }
  
  export default connect(mapStateToProps)(VisibleTask)