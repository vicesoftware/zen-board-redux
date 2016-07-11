import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
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
					<a className="navbar-brand" href="#"><span className="glyphicon glyphicon-file icon" aria-hidden="true"/> Zen Board</a>
				</div>
				<div id="navbar" className="navbar-collapse collapse">
					<ul className="nav navbar-nav">
						<li className="active"><IndexLink to="/">Home</IndexLink></li>
						<li><Link to="/projects">Projects</Link></li>
						<li><Link to="/about">About</Link></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;