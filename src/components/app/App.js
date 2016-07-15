import React, {PropTypes} from 'react';
import Header from '../common/Header';

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
				<div className="client-area">
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