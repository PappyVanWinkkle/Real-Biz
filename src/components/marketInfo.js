/*
  ======================
    RECIPES COMPONENT
  ======================
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import getMarketInformation from '../actions/moneyAction';
import getMarketNews from '../actions/newsAction';

class MarketInfo extends Component {
	componentWillMount() {
		this.props.getMarketInformation();
		this.props.getMarketNews();
	}
	render() {
		console.log(this.props.news);
		return (
			<Container>
				<Row>
					<Col xs="6" sm="6">
						{this.props.money.map(function(key, index) {
							return (
								<ListGroup key={index}>
									<ListGroupItem className="justify-content-between">
										Date <Badge pill>{key.date}</Badge>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										Open <Badge pill>{key.open}</Badge>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										High <Badge pill>{key.high}</Badge>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										Low <Badge pill>{key.low}</Badge>
									</ListGroupItem>
									<ListGroupItem className="justify-content-between">
										Close <Badge pill>{key.close}</Badge>
									</ListGroupItem>
								</ListGroup>
							);
						})}
					</Col>
					<Col xs="6" sm="6">
						News
					</Col>
				</Row>
			</Container>
		);
	}
}

MarketInfo.propTypes = {
	getMarketInformation: PropTypes.func.isRequired,
	getMarketNews: PropTypes.func.isRequired,
	money: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	money: state.money.money,
	news: state.news.news
});

export default connect(mapStateToProps, { getMarketInformation, getMarketNews })(MarketInfo);
