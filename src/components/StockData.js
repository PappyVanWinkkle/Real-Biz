/*
  ======================
    STOCK DATA 
  ======================
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import getStockData from '../actions/newsAction';

class StockData extends Component {
	componentWillMount() {
		this.props.getStockData(this.props.match.params.id);
	}
	render() {
		return (
			<div>
				<h1>
					Heading <Badge color="secondary">New</Badge>
				</h1>
			</div>
		);
	}
}

StockData.propTypes = {
	getStockData: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	data: state.data.data
});

export default connect(mapStateToProps, { getStockData })(StockData);
