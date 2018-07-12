import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import NegativeStocks from './components/NegativeStocks';
import Errors from './components/Error';
import Landing from './components/Landing';
import MarketInfo from './components/marketInfo';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/markets" component={MarketInfo} />
							<Route exact path="/losers" component={NegativeStocks} />
							<Route component={Errors} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
