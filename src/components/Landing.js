/* ========================
  LANDING PAGE OF THE APPLICATION
============================= */

import React from 'react';
import Header from './Header';
import Properties from './properties';
import Footer from './Footer';

const Landing = () => {
	return (
		<div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
			<nav id="menu" className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
						>
							{' '}
							<span className="sr-only">Toggle navigation</span> <span className="icon-bar" />{' '}
							<span className="icon-bar" /> <span className="icon-bar" />{' '}
						</button>
						<a className="navbar-brand page-scroll" href="#page-top">
							REAL HOMES
						</a>{' '}
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li>
								<a href="#about" className="page-scroll">
									About
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Header />
			<div id="about">
				<div className="container">
					<div className="section-title text-center center">
						<h2>Your New home begins here</h2>
						<hr />
					</div>
					<div className="row">
						<div className="col-xs-12 col-md-6 text-center">
							{' '}
							<img src="/real-estate-theme/img/home.jpg" className="img-responsive" alt="" />{' '}
						</div>
						<div className="col-xs-12 col-md-6">
							<div className="about-text">
								<h3>UK properties</h3>
								<p>
									With extensive properties around the country, Real / Homes is the only place to find
									that perfect home or nest egg.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Properties />
			<Footer />
		</div>
	);
};

export default Landing;
