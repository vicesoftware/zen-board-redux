import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const ReduxLink = ({ className = "", activeClassName, to, path, children }) => {
  let finalClassName = className.split(' ');

  if (activeClassName && path === to) {
    finalClassName.push(activeClassName);
  }

  return (
    <Link to={to} className={finalClassName.join(' ')}>
      {children}
    </Link>
  );
};

ReduxLink.propTypes = {
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  to: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node
};

function mapStateToProps(state, ownProps) {
  return Object.assign(
      {},
      ownProps,
      { path: state.routing.locationBeforeTransitions.pathname }
    );
}

export default connect(mapStateToProps)(ReduxLink);
