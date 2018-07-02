/*=======================
  NAVBAR COMPONENT 
========================*/

import React from 'react';

const Nav = () => {
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
						<a className="navbar-brand page-scroll" href="#page-top" />MRKET WIZ{' '}
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
