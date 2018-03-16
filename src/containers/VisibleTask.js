import React from 'react';
import TaskTable from '../components/TaskTable';
import { fetchTasks } from '../actions'
import { connect } from 'react-redux'

class VisibleTask extends React.Component{

    componentDidMount(){
        const { dispatch, intanceId } = this.props;
        dispatch(fetchTasks(intanceId));
    }

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
    console.log(state)
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