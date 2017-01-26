import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import projectList from "../../projectList";
import ProjectScreen from "./ProjectScreen"

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ProjectScreen {...this.props}/>
    );
  }
}

ProjectPage.propTypes = {
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  isBusy: PropTypes.bool,
  children: PropTypes.node.isRequired
};

ProjectPage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    project: projectList.selectors.getById(state, ownProps.params.id),
    isBusy: state.busySpinner.count > 0
  };
}

export default connect(mapStateToProps)(ProjectPage);
