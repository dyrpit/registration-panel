import React from 'react';

import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<p>By Piotr Dyrda</p>
			<div className='footer__links'>
				<div>
					<a
						href='https://www.linkedin.com/in/dyrda-piotr/'
						target='_blank'
						rel='noreferrer'
						alt='github-logo'
					>
						<i className='fab fa-linkedin'></i>
					</a>
				</div>
				<div>
					<a href='https://github.com/dyrpit' target='_blank' rel='noreferrer' alt='github-logo'>
						<i className='fab fa-github'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
