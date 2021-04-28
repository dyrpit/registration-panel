import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/user-context';

import Nav from '../Nav/Nav';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { user } = useContext(UserContext);

	const openClass = isOpen ? '--open' : '';

	const toggleOpen = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<header className='header'>
			<Nav isOpen={isOpen} setIsOpen={toggleOpen} />
			<div onClick={toggleOpen} className={`menu menu${openClass}`}>
				<div className='menu__bar'></div>
				<div className='menu__bar'></div>
				<div className='menu__bar'></div>
			</div>
			<div className='header__user'>
				<p>{!user ? 'No user logged in' : `Logged as ${user?.name || user.email}`}</p>
				<Link to='/profile'>
					<i className='fas fa-user'></i>
				</Link>
			</div>
		</header>
	);
};

export default Header;
