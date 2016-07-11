import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1>Redux Blog</h1>
				<p>Experiment with using Redux and ES6 to build a blog</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;