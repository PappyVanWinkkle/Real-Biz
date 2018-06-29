/*=======================
  NAVBAR COMPONENT 
========================*/

import React from 'react';

const Nav = () => {
	return (
		<div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
			<nav id="menu" className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div class="navbar-header">
						<button
							type="button"
							className="navbar-toggle collapsed"
							data-toggle="collapse"
							data-target="#bs-example-navbar-collapse-1"
						>
							{' '}
							<span class="sr-only">Toggle navigation</span> <span class="icon-bar" />{' '}
							<span class="icon-bar" /> <span class="icon-bar" />{' '}
						</button>
						<a className="navbar-brand page-scroll" href="#page-top">
							REAL FOOD
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
		</div>
	);
};

export default Nav;
