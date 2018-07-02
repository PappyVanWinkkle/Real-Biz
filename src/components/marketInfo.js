/*
  ======================
    RECIPES COMPONENT
  ======================
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getMarketInformation from '../actions/moneyAction';
import Footer from './Footer';

class MarketInfo extends Component {
	componentDidMount() {
		this.props.getMarketInformation();
	}
	render() {
		console.log(this.props.money.money.results);
		return (
			<div style={{ background: '#fff' }}>
				<div className="intro-text">
					<h2 style={{ textAlign: 'center', fontFamily: "'Permanent Marker', cursive", marginTop: '3em' }}>
						Ready Steady Cook!
					</h2>
				</div>
				<Footer />
			</div>
		);
	}
}

MarketInfo.propTypes = {
	getMarketInformation: PropTypes.func.isRequired,
	money: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	money: state.money
});

export default connect(mapStateToProps, { getMarketInformation })(MarketInfo);
