/* =======================
    GRID-LIST COMPONENT 
================================ */

import React from 'react';

const Properties = () => {
	return (
		<div id="portfolio">
			<div className="container">
				<div className="section-title text-center center">
					<h2>Foodz</h2>
					<hr />
					<p>Get inspired by looking at our different recipes awaken the chef in you.</p>
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
											<h4>
												All you need is love. But a little chocolate now and then doesn't hurt
											</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food2.jpg"
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
											<h4>Ask not what you can do for your country. Ask what’s for lunch.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food3.jpg"
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
											<h4>
												After a good dinner one can forgive anybody, even one's own relations.
											</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food4.jpg"
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
											<h4>There is no love sincerer than the love of food.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food5.jpg"
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
											<h4>If you're afraid of butter, use cream.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food6.jpg"
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
											<h4>All sorrows are less with bread.</h4>
										</div>
										<img
											src="/real-estate-theme/img/portfolio/food7.jpg"
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
