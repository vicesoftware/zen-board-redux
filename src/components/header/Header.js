import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import MenuItem from "./MenuItem";
import { Link } from 'react-router';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top app-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed"
                    data-toggle="collapse" data-target="#navbar-collapse-main">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
              <Link className="navbar-brand" to="/">
                <i className="fa fa-comments-o" aria-hidden="true"></i>Zen Board
              </Link>
          </div>
          <div className="navbar-collapse collapse" id="navbar-collapse-main">

            <ul className="nav navbar-nav hidden-xs">
                <MenuItem
                  text="Projects"
                  linkTo="/projects"/>
                <MenuItem
                  text="About"
                  linkTo="/about"/>
            </ul>

            <ul className="nav navbar-nav navbar-right m-r-0 hidden-xs">
              <li>
                <a className="app-notifications" href="../notifications/index.html">
                  <span className="icon icon-bell"></span>
                </a>
              </li>
              <li>
                <button className="btn btn-default navbar-btn navbar-btn-avitar"
                        data-toggle="popover" data-original-title="" title="">
                  <img className="img-circle" src="http://adnug.org/Home/wp-content/uploads/2013/04/image002.png"/>
                </button>
              </li>
            </ul>

            <form className="navbar-form navbar-right app-search" role="search">
              <div className="form-group">
                <input type="text" className="form-control"
                       data-action="grow" placeholder="Search"/>
              </div>
            </form>

            <ul className="nav navbar-nav hidden-sm hidden-md hidden-lg">
              <li><a href="../index.html">Home</a></li>
              <li><a href="../profile/index.html">Profile</a></li>
              <li><a href="../notifications/index.html">Notifications</a></li>
              <li><a data-toggle="modal" href="#msgModal">Messages</a></li>
              <li><a href="../docs/index.html">Docs</a></li>
              <li><a href="#" data-action="growl">Growl</a></li>
              <li><a href="../login/index.html">Logout</a></li>
            </ul>

            <ul className="nav navbar-nav hidden">
              <li><a href="#" data-action="growl">Growl</a></li>
              <li><a href="../login/index.html">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default connect()(Header);
