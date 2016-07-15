import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from './projectActions';

class ManageProjectPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<h1>Manage Project</h1>
		);
	}
}

ManageProjectPage.propTypes = {
	//myProp: PropTypes.string.isRequired
}
;

function mapStateToProps(state, ownProps) {
	return {
		state: state
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(projectActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);