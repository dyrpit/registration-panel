import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Container from '../Container/Container';

import './Profile.scss';

const Profile = () => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3000/user/profile', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setUser(data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<Container>
			{user && (
				<div className='profile'>
					<h1 className='profile__title'>Profile</h1>
					<p className='profile__user'>
						{user.name || 'NO'} {user.lastName || 'NAME'}
					</p>
					<div className='profile__avatar'>
						<div className='profile__role'>{user.role[0]}</div>
					</div>
					<p>{user.email}</p>
				</div>
			)}
			<Button title='home' to='/' />
		</Container>
	);
};

export default Profile;
