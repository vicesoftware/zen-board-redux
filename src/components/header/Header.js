import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MenuItem from "./MenuItem";

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                    aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-file icon" aria-hidden="true"/>
              Zen Board</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <MenuItem
                text="Home"
                linkTo="/"/>
              <MenuItem
                text="Projects"
                linkTo="/projects"/>
              <MenuItem
                text="About"
                linkTo="/about"/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Header);
