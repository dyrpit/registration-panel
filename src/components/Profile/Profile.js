import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useFetch } from '../../hooks/useFetch';
import Button from '../Button/Button';
import Container from '../Container/Container';

import { API_BASE_URL } from '../../constants/api';

import './Profile.scss';

const Profile = () => {
	const [userDetails, setUserDetails] = useState(null);
	const location = useLocation();

	const URL = `${API_BASE_URL}user${location.pathname}`;

	const [{ data, error }, getUserDetails] = useFetch();

	useEffect(() => {
		if (error) return;

		getUserDetails(URL);

		if (data?.ok) {
			setUserDetails(data.user);
		}
	}, [error, getUserDetails, URL, data]);

	return (
		<Container>
			<div className='profile'>
				{error}
				{userDetails && (
					<>
						<h1 className='profile__title'>Profile</h1>
						<p className='profile__user'>
							{userDetails.name || 'NO'} {userDetails.lastName || 'NAME'}
						</p>
						<div className='profile__avatar'>
							<div className='profile__role'>{userDetails.role[0]}</div>
						</div>
						<p>{userDetails.email}</p>
					</>
				)}
			</div>
			<Button title='home' to='/' />
		</Container>
	);
};

export default Profile;
