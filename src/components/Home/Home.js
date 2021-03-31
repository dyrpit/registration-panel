import React, { useContext, useEffect } from 'react';

import { API_BASE_URL, FetchOptions } from '../../constants/api';
import { UserContext } from '../../context/user-context';
import { useFetch } from '../../hooks/useFetch';
import Alert from '../Alert/Alert';

import Button from '../Button/Button';
import Container from '../Container/Container';

import './Home.scss';

const Home = () => {
	const [{ data, error }, logout] = useFetch();

	const { isLoggedIn, setIsLoggedIn, setUser } = useContext(UserContext);

	const handleLogout = async () => {
		const URL = `${API_BASE_URL}auth/logout`;

		const fetchOptions = new FetchOptions();

		logout(URL, fetchOptions.getOptions());
	};

	useEffect(() => {
		if (data?.ok) {
			setIsLoggedIn(false);
			setUser(null);
		}
	}, [data, setIsLoggedIn, setUser]);

	return (
		<Container>
			<div className='home'>
				<div className='home__container'>
					{error && <Alert message={error} />}
					<h2 className='home__container__title'>
						{!isLoggedIn ? 'Sign in' : 'Already signed in'}
					</h2>
					{!isLoggedIn ? (
						<Button title='sign in' to='login' />
					) : (
						<button className='button' onClick={() => handleLogout()}>
							log out
						</button>
					)}
				</div>
				<div className='home__container'>
					<h2 className='home__container__title'>Don't have an account?</h2>
					<Button title='register' to='register' />
				</div>
			</div>
		</Container>
	);
};

export default Home;
