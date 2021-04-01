import React from 'react';

import './Nav.scss';

const Nav = ({ isOpen, setIsOpen }) => {
	const openClass = isOpen ? '--open' : '';

	return (
		<>
			<div onClick={setIsOpen} className={`nav-background nav-background${openClass}`}></div>
			<nav className={`nav nav${openClass}`}>
				<ul>
					<li>Users</li>
					<li>Blog</li>
					<li>About</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
