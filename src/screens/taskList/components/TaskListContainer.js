import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import TaskListLayout from "./TaskList";
import * as selectors from "../selector";

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
  tasks: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: selectors.getGroupedByStatus(state),
    currentProject: state.currentProject
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
