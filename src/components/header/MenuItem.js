import React, {PropTypes} from "react";
import { connect } from 'react-redux';
import ReduxLink from "./ReduxLink";

const MenuItem = ({className = "", text, linkTo, path}) => {
	let finalClassName = className.split(' ');

  if (path === linkTo) {
    finalClassName.push("active");
  }

	return (
		<li className={finalClassName.join(' ')}>
			<ReduxLink to={linkTo} activeClassName="active">{text}</ReduxLink>
		</li>
	);
};

MenuItem.propTypes = {
	text: PropTypes.string.isRequired,
	linkTo: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return Object.assign(
      {},
      ownProps,
      { path: state.routing.locationBeforeTransitions.pathname }
    );
}

export default connect(mapStateToProps)(MenuItem);
