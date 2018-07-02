/* =======================
    GRID-LIST COMPONENT 
================================ */

import React from 'react';

const Money = () => {
	return (
		<div id="portfolio">
			<div className="container">
				<div className="section-title text-center center">
					<h2>Markets</h2>
					<hr />
					<p>Get access to hundreds of stocks and currencies</p>
				</div>
				{''}
				<div className="row">
					<div className="portfolio-items">
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a href="img/portfolio/about.jpg" title="Money" data-lightbox-gallery="gallery1">
										<img
											src="/real-estate-theme/img/portfolio/bitcoin.jpg"
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 commercial">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a href="img/portfolio/02-large.jpg" title="Money" data-lightbox-gallery="gallery1">
										<img
											src="/real-estate-theme/img/portfolio/dollar.jpg"
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a href="img/portfolio/03-large.jpg" title="Money" data-lightbox-gallery="gallery1">
										<img
											src="/real-estate-theme/img/portfolio/wallstreet.jpg"
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a href="img/portfolio/04-large.jpg" title="Money" data-lightbox-gallery="gallery1">
										<img
											src="/real-estate-theme/img/portfolio/money1.jpg"
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 commercial">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a href="img/portfolio/05-large.jpg" title="Money" data-lightbox-gallery="gallery1">
										<img
											src="/real-estate-theme/img/portfolio/trading.jpg "
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 office">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="/real-estate-theme/img/portfolio/06-large.jpg"
										title="Money"
										data-lightbox-gallery="gallery1"
									>
										<img
											src="/real-estate-theme/img/portfolio/money2.jpg"
											className="img-responsive"
											alt="Money"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Money;
