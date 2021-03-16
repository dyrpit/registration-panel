import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';

const Profile = () => {
	useEffect(() => {
		fetch('http://localhost:3000/user/profile', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((e) => console.log(e));
	}, []);

	return (
		<Container>
			<div>Profile</div>
			<Button title='home' to='/' />
		</Container>
	);
};

export default Profile;
