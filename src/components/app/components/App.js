import React, {PropTypes} from "react";
import {connect} from "react-redux";
import Header from "../../header/Header";
import projectList from "../../projectList";

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header project={this.props.project}/>
				<div className="client-area container-fluid">
					{this.props.children}
				</div>
			</div>
		);
	}
}

App.propTypes = {
	children: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    project: projectList.selectors.getById(state, ownProps.params.id)
  };
}

export default connect(mapStateToProps)(App);
