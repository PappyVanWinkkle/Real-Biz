import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Landing from './components/Landing';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Route exact path="/" component={Landing} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
