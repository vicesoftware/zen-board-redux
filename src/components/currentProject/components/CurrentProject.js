import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Page from "../../common/page/Page";
import projectList from "../../projectList";

class ProjectPage extends React.Component {
  constructor(props, context) {
    super(props, context);
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

function mapStateToProps(state, ownProps) {
  return {
    project: projectList.selectors.getById(state, ownProps.params.id),
    isBusy: state.busyCount > 0
  };
}

export default connect(mapStateToProps)(ProjectPage);
