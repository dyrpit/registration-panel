import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { UserContext } from '../../context/user-context';
import Button from '../Button/Button';
import Container from '../Container/Container';
import ContentContainer from '../ContentContainer/ContentContainer';
import Form from '../Form/Form';

import './LoginPage.scss';

const LoginPage = () => {
	const { isLoggedIn } = useContext(UserContext);

	return (
		<Container>
			{isLoggedIn && <Redirect to='/profile' />}
			<ContentContainer>
				<h1 className='content-container__title'>Log in</h1>
				<Form />
			</ContentContainer>
			<Button title='home' to='/' />
		</Container>
	);
};

export default LoginPage;
