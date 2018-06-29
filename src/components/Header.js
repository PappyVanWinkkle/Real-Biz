/* ================
   HEADER COMPONENT 
===================== */

import React from 'react';

const Header = () => {
	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="intro-text">
								<h1>
									<strong>REAL / FOOD</strong>
								</h1>
								<input
									type="text"
									className="form-control"
									placeholder="Search by Dish or Meal"
									aria-label="Search by Dish or Meal"
									aria-describedby="basic-addon2"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
