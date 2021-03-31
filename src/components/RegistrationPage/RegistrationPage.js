import React, { useState } from 'react';

import Button from '../Button/Button';
import Container from '../Container/Container';
import ContentContainer from '../ContentContainer/ContentContainer';
import Form from '../Form/Form';

import './RegistrationPage.scss';

const RegistartionPage = () => {
	const [registered, setRegistered] = useState(false);

	return (
		<Container>
			<ContentContainer>
				{registered ? (
					<>
						<h1 className='content-container__title'>Hurray you have successfully registered</h1>
						<Button title='log in' to='/login' />
					</>
				) : (
					<>
						<h1 className='content-container__title'>sign in</h1>
						<Form type='register' callback={setRegistered} />
					</>
				)}
			</ContentContainer>
			<Button title='home' to='/' />
		</Container>
	);
};

export default RegistartionPage;
