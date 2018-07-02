import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Landing from './components/Landing';
import MarketInfo from './components/marketInfo';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Route exact path="/" component={Landing} />
						<Route exact path="/markets" component={MarketInfo} />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
