/* ====================
   SEARCH COMPONENT
======================== */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import getMarketInformation from '../actions/moneyAction';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			symbol: ''
		};
	}

	render() {
		return (
			<input
				type="text"
				className="form-control"
				placeholder="Search by Stocky symbol AAPL MSFT"
				aria-label="Search by Stock or Symbol"
				aria-describedby="basic-addon2"
				value={this.state.symbol}
				onChange={(evt) => this.InputChange(evt.target.value)}
			/>
		);
	}
	InputChange(value) {
		this.setState({ symbol: value });
	}
}

const mapStateToProps = (state) => ({
	symbol: state.news
});

export default connect(null, { getMarketInformation })(Search);
