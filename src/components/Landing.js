/* ========================
  LANDING PAGE OF THE APPLICATION
============================= */

import React from 'react';
import Header from './Header';
import Money from './money';
import Footer from './Footer';

const Landing = () => {
	return (
		<div
			id="page-top"
			data-spy="scroll"
			data-target=".navbar-fixed-top"
			style={{ height: '100vh', width: '100vw' }}
		>
			<Header />
			<div id="about">
				<div className="container">
					<div className="section-title text-center center">
						<h2>The best place for Forex and Stock Prices</h2>
						<hr />
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6 text-center">
							{' '}
							<img
								src="/real-estate-theme/img/portfolio/about.jpg"
								className="img-responsive"
								alt=""
							/>{' '}
						</div>
						<div className="col-xs-12 col-md-6">
							<div className="about-text">
								<h3>Get the latest stock movements right in front of your screen.</h3>
								<p>
									Market / Wiz provides you the latest information on stocks and currencies so your
									not behind on your trading game. Simply search for a currency or stock
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Money />
			<Footer />
		</div>
	);
};

export default Landing;
