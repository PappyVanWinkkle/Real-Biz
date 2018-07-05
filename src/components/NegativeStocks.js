/*
  ======================
    MARKETS COMPONENT FOR LOSERS
  ======================
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import moment from 'moment';
import getMarketNews from '../actions/newsAction';
import getNegativeStocks from '../actions/negativeStockAction';

class NegativeStocks extends Component {
	componentWillMount() {
		this.props.getMarketNews();
		this.props.getNegativeStocks();
	}
	render() {
		return (
			<div class="container" style={{ height: '100vh', width: '100vw' }}>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<h1
						style={{
							fontSize: '6em',
							marginTop: '10px',
							textTransform: 'uppercase',
							color: '#FFFFFF',
							background: '#14191D'
						}}
					>
						MRKETS
					</h1>
				</Link>
				<div className="row">
					<div className="col-sm-6">
						<Link to="/markets" style={{ textDecoration: 'none' }}>
							<h2 className="badge badge-secondary" style={{ fontSize: '1.5em' }}>
								Top Gainers
							</h2>
						</Link>
						{this.props.stocks.map(function(stock, item) {
							return (
								<ul className="list-group" style={{ marginTop: '2em', fontSize: '2em' }} key={item}>
									<li className="list-group-item d-flex justify-content-between align-items-center ">
										Symbol <span className="badge badge-primary badge-pill">{stock.symbol}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center active">
										Name {stock.companyName}
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Exchange
										<span className="badge badge-primary badge-pill">{stock.primaryExchange}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Sector
										<span className="badge badge-primary badge-pill">{stock.sector}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Open
										<span className="badge badge-primary badge-pill">{stock.open}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Close
										<span className="badge badge-primary badge-pill">{stock.close}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										Low
										<span className="badge badge-primary badge-pill">{stock.low}</span>
									</li>
									<li className="list-group-item d-flex justify-content-between align-items-center">
										latestTime
										<span className="badge badge-primary badge-pill">{stock.latestTime}</span>
									</li>
								</ul>
							);
						})}
					</div>
					<div className="col-sm-6">
						<h2 className="badge badge-secondary" style={{ fontSize: '1.5em', marginLeft: '2em' }}>
							Business News
						</h2>
						{this.props.news.map(function(article, value) {
							const publishedAt = moment(article.publishedAt).calendar();
							return (
								<div key={value} style={{ background: 'white' }}>
									<h5 style={{ color: '#e17055' }}>{article.title}</h5>
									<p style={{ fontFamily: " 'Roboto', sans-serif" }}>{article.description}</p>
									<p>{article.author}</p>
									<p>{publishedAt}</p>
									<div>
										<a href={`${article.url}`}>
											<button type="button" className="btn btn-outline-primary">
												Read More
											</button>
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

NegativeStocks.propTypes = {
	getMarketNews: PropTypes.func.isRequired,
	getNegativeStocks: PropTypes.func.isRequired,
	stocks: PropTypes.array.isRequired,
	news: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	stocks: state.stocks.stocks,
	news: state.news.news
});

export default connect(mapStateToProps, { getMarketNews, getNegativeStocks })(NegativeStocks);
