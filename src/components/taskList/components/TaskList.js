import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import _ from "lodash";
import * as actions from "../actions";
import TaskListLayout from "./TaskListLayout";

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {tasks} = this.props;
    return (
      <TaskListLayout tasks={tasks}/>
    );
  }
}

TaskList.propTypes = {
  // actions: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.taskList,
    currentProject: state.currentProject
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
