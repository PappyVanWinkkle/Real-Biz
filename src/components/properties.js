/* =======================
    GRID-LIST COMPONENT 
================================ */

import React from 'react';

const Properties = () => {
	return (
		<div id="portfolio">
			<div className="container">
				<div className="section-title text-center center">
					<h2>Homes</h2>
					<hr />
					<p>Get inspired by looking at our different properties around the country</p>
				</div>
				{''}
				<div className="row">
					<div className="portfolio-items">
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="img/portfolio/01-large.jpg"
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>Everyday is a journey and the journey itself is Home</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/01-small.jpg"
											className="img-responsive"
											alt="Project Title"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 commercial">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="img/portfolio/02-large.jpg"
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>
												It’s home sweet home. It’s where your heart is. It’s where you make it.
											</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/02-small.jpg"
											className="img-responsive"
											alt="Project Title"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="img/portfolio/03-large.jpg"
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>Home is the starting place of love, hope and dreams.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/03-small.jpg"
											className="img-responsive"
											alt="Project Title"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 residential">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="img/portfolio/04-large.jpg"
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>There is nothing more important than a good, safe, secure home.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/04-small.jpg"
											className="img-responsive"
											alt="Project Title"
										/>{' '}
									</a>{' '}
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-md-4 col-lg-4 commercial">
							<div className="portfolio-item">
								<div className="hover-bg">
									{' '}
									<a
										href="img/portfolio/05-large.jpg"
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>Home is not a place…it’s a feeling</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/05-small.jpg"
											className="img-responsive"
											alt="Project Title"
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
										title="Project Title"
										data-lightbox-gallery="gallery1"
									>
										<div className="hover-text">
											<h4>There’s no place like home.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/06-small.jpg"
											className="img-responsive"
											alt="Project Title"
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

export default Properties;
