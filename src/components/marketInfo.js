/*
  ======================
    RECIPES COMPONENT
  ======================
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
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
						{this.props.money.map(function(key, value) {
							return (
								<ListGroup key={value}>
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
						<h2>Business News</h2>
						{this.props.news.map(function(article, value) {
							return (
								<div key={value} style={{ background: 'white' }}>
									<h5>{article.title}</h5>
									<p>{article.description}</p>
									<p>{article.author}</p>
									<p>{article.publishedAt}</p>
									<div>
										<a href={`${article.url}`}>
											<Button color="primary">Read More</Button>{' '}
										</a>
									</div>
								</div>
							);
						})}
					</Col>
				</Row>
			</Container>
		);
	}
}

MarketInfo.propTypes = {
	getMarketInformation: PropTypes.func.isRequired,
	getMarketNews: PropTypes.func.isRequired,
	money: PropTypes.array.isRequired,
	news: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	money: state.money.money,
	news: state.news.news
});

export default connect(mapStateToProps, { getMarketInformation, getMarketNews })(MarketInfo);
