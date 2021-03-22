import React from 'react';

import Button from '../Button/Button';
import Container from '../Container/Container';
import ContentContainer from '../ContentContainer/ContentContainer';
import Form from '../Form/Form';

import './RegistrationPage.scss';

const RegistartionPage = () => {
	return (
		<Container>
			<ContentContainer>
				<h1>Sign Up</h1>
				<Form type='register' />
			</ContentContainer>
			<Button title='home' to='/' />
		</Container>
	);
};

export default RegistartionPage;
