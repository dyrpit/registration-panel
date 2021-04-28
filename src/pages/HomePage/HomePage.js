import { useContext, useState } from 'react';

import { UserContext } from '../../context/user-context';

import { HTTP_METHODS, logoutURL } from '../../constants/api';
import { fetchData } from '../../service/fetchData';

import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import Container from '../../components/Container/Container';
import Spinner from '../../components/Spinner/Spinner';

import './HomePage.scss';

const HomePage = () => {
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { isLoggedIn, setIsLoggedIn, setUser, setUsers } = useContext(UserContext);

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

	return (
		<Container>
			<div className='home'>
				<div className='home__container'>
					{error && <Alert message={error} />}
					<h3 className='home__container__title'>
						{!isLoggedIn ? 'Sign in' : 'Already signed in'}
					</h3>
					{!isLoggedIn ? (
						<Button title='Sign in' to='login' />
					) : (
						<button className='button' onClick={handleLogout}>
							{isLoading ? <Spinner /> : 'Log out'}
						</button>
					)}
				</div>
				<div className='home__container'>
					<h3 className='home__container__title'>Don't have an account?</h3>
					<Button title='Register' to='register' />
				</div>
			</div>
		</Container>
	);
};

export default HomePage;
