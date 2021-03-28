import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user-context';

import './Nav.scss';

const Nav = () => {
	const { user } = useContext(UserContext);

	return (
		<nav className='nav'>
			<div className='nav__menu'>
				<i className='fas fa-bars'></i>
			</div>
			<div className='nav__user'>
				<p>{!user ? 'No user logged in' : `Logged as ${user.name || user.email}`}</p>
				<Link to='/profile'>
					<i className='fas fa-user'></i>
				</Link>
			</div>
		</nav>
	);
};

export default Nav;
