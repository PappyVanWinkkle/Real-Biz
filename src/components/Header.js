/* ================
   HEADER COMPONENT 
===================== */

import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="intro-text">
								<h1>
									<strong>MARKET / WIZ</strong>
								</h1>
								<Link to="/markets">
									<Button color="primary">Explore the Markets</Button>{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
