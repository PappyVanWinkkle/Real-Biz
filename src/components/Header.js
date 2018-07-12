/* ================
   HEADER COMPONENT 
===================== */

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="jumbotron overlay" style={{ background: 'white', height: '350px' }}>
			<h1 className="display-4" style={{ fontWeight: '800' }}>
				MRKETS
			</h1>
			<p className="lead">
				Use this website to find the top and worst performing stocks on the Markets. Also catch up on some News
			</p>
			<Link to="/markets" style={{ textDecoration: 'none' }}>
				<button type="button" className="btn btn-outline-primary btn-lg">
					Learn More
				</button>
			</Link>
		</div>
	);
};

export default Header;
