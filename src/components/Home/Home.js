import React, { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import Button from '../Button/Button';
import Container from '../Container/Container';

const Home = () => {
	const { isLoggedIn, setIsLoggedIn, setUser } = useContext(UserContext);

	const handleLogout = async () => {
		const data = await fetch('http://localhost:3000/auth/logout', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => data)
			.catch((e) => console.log(e));

		if (data.ok) {
			setIsLoggedIn(false);
			setUser(null);
		}
	};

	return (
		<Container>
			<div>
				<h2>{!isLoggedIn ? 'Sign in' : 'Already signed in'}</h2>
				{!isLoggedIn ? (
					<Button title='sign in' to='login' />
				) : (
					<button className='button' onClick={() => handleLogout()}>
						log out
					</button>
				)}
				<h2>Don't have an account?</h2>
				<Button title='register' to='register' />
			</div>
		</Container>
	);
};

export default Home;
