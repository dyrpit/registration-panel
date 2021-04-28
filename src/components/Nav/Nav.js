import PropTypes from 'prop-types';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user-context';

import './Nav.scss';

const adminLinks = [
	{ path: '/users', name: 'users', description: 'See all users' },
	{ path: '/profile', name: 'profile', description: 'See user profile' },
	{
		path: '/about',
		name: 'about',
		description: 'Read about project & author',
	},
];

const userLinks = [
	{ path: '/profile', name: 'profile', description: 'See user profile' },
	{
		path: '/about',
		name: 'about',
		description: 'Read about project & author',
	},
];

const Nav = ({ isOpen, setIsOpen }) => {
	const openClass = isOpen ? '--open' : '';

	const { user } = useContext(UserContext);

	const links = user && user.role.includes('admin') ? adminLinks : userLinks;

	return (
		<>
			<div onClick={setIsOpen} className={`nav-background nav-background${openClass}`}></div>
			<nav className={`nav nav${openClass}`}>
				<ul className='nav__items'>
					{links.map((link) => (
						<li key={link.name} className='nav__item'>
							<Link onClick={setIsOpen} className='nav__item__link' to={link.path}>
								{link.name}
							</Link>
							<div className='nav__item__description'>{link.description}</div>
						</li>
					))}
				</ul>
			</nav>
		</>
	);
};

export default Nav;

Nav.propTypes = {
	isOpen: PropTypes.bool,
	setIsOpen: PropTypes.func,
};
