import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

import { UserContext } from '../../context/user-context';

import { HTTP_METHODS, logoutURL } from '../../constants/api';
import { fetchData } from '../../service/fetchData';

import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Spinner from '../../components/Spinner/Spinner';

import './ProfilePage.scss';

const ProfilePage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const { user, isLoggedIn, setIsLoggedIn, setUser, setUsers } = useContext(UserContext);

	const handleLogout = async () => {
		setIsLoading(true);
		const res = await fetchData(HTTP_METHODS.GET, logoutURL);

		if (res.ok) {
			setIsLoggedIn(false);
			setUser(null);
			setUsers(null);
		} else {
			setError(res.message);
		}

		setIsLoading(false);
	};

	return !isLoggedIn ? (
		<Redirect to='/login' />
	) : (
		<Container>
			<div className='profile'>
				{error && <Alert message={error} />}
				{user && (
					<>
						<h1 className='profile__title'>Profile</h1>
						<p className='profile__user'>
							{user.name || ''} {user.lastName || ''}
						</p>
						<div className='profile__avatar'>
							<div className='profile__role'>{user.role}</div>
						</div>
						<p className='profile__email'>{user.email}</p>
						<div className='profile__buttons'>
							<button className='button' onClick={handleLogout}>
								{isLoading ? <Spinner /> : 'Log out'}
							</button>
						</div>
					</>
				)}
			</div>
			<Button title='Home' to='/' />
		</Container>
	);
};

export default ProfilePage;
