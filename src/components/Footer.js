import React from 'react';

const Footer = () => {
	return (
		<footer className='footContainer'>
			<div className='footer'>
				<div className='top'>
					<div className='item'>
						<h1>Categories</h1>
						<ul>
							<li>Women</li>
							<li>Men</li>
							<li>Shoes</li>
							<li>Accessories</li>
							<li>New Arrivals</li>
						</ul>
					</div>
					<div className='item'>
						<h1>Links</h1>
						<ul>
							<li>FAQs</li>
							<li>Pages</li>
							<li>Stores</li>
							<li>Compare</li>
							<li>Cookies</li>
						</ul>
					</div>
					<div className='item'>
						<h1>About</h1>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Blanditiis tempora magnam vitae deleniti fugit
							beatae laborum cum dolore dolores consequatur.
							Impedit cum cumque dicta assumenda! Dicta molestiae
							natus incidunt facilis tempore aliquid, consectetur
							quis aliquam.
						</span>
					</div>
					<div className='item'>
						<h1>Contact</h1>
						<span>
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Ad harum non laborum quam facilis consequuntur
							sequi distinctio ullam minus esse animi dolorem,
							obcaecati sit voluptatum tempora accusamus eligendi
							magnam adipisci explicabo repudiandae sed vel est
							earum.
						</span>
					</div>
				</div>
				<div className='bottom'>
					<div className='left'>
						<span className='logo'>Twitter API</span>
						<span className='copyRight'>
							&copy;
							{new Date().getFullYear()}, Aknowledgement: <a href=""></a>
						</span>
					</div>
				</div>
			</div>
		</footer>

	);
};

export default Footer;
