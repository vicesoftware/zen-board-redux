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
        <ul className="nav nav-pills">
          <li>
            <a className="nav-link active" href="#">Tasks</a>
          </li>
          <li>
            <a className="nav-link" href="#">Discussions</a>
          </li>
          <li>
            <a className="nav-link" href="#">Calendar</a>
          </li>
          <li>
            <a className="nav-link" href="#">Files</a>
          </li>
        </ul>
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
