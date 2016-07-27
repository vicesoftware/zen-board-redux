import React, {PropTypes} from 'react';
import Header from '../header/Header';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
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

export default App;
