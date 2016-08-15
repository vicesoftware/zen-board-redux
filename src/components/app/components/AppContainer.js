import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Header from "../../header/Header";
import * as projectListSelectors from "../../projectList/selectors";

class AppContainer extends React.Component {

  render() {
    const {project, userProfile} = this.props;


    return (
      <div className="container-fluid">
        <Header project={project} userProfile={userProfile}/>
        <div className="client-area container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    project: projectListSelectors.getById(state, ownProps.params.id),
    userProfile: state.userProfile
  };
}

export default connect(mapStateToProps)(AppContainer);
