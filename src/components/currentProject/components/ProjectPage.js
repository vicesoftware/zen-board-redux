import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from "../actions";
import Page from "../../common/Page";

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.openCurrentProject(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.actions.closeProject();
  }

  render() {
    const {isBusy, children} = this.props;

    return (
      <Page isBusy={isBusy}>
        <div className="panel panel-default panel-link-list">
          <div className="panel-body btn-toolbar">
            <button type="button" className="btn btn-xs btn-primary-outline">Tasks</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Discussions</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Files</button>
            <button type="button" className="btn btn-xs btn-primary-outline">Calendar</button>
          </div>
        </div>
        {children}
      </Page>
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

function mapStateToProps(state) {
  return {
    project: state.currentProject,
    isBusy: state.busyCount > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);