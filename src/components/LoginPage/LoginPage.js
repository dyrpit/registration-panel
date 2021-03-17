import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import { UserContext } from '../../context/user-context';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import Container from '../Container/Container';

import './LoginPage.scss';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [alert, setAlert] = useState('');

	const { setUser, isLoggedIn, setIsLoggedIn } = useContext(UserContext);

	const handleOnChange = (e) => {
		e.preventDefault();

		const { value, type } = e.target;

		if (type === 'email') {
			setEmail(value);
		} else if (type === 'password') {
			setPassword(value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const validateEmail = (email) => {
			let message;
			let validationFail;

			if (!email) {
				message = 'Insert email';
				validationFail = true;
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
				message = 'Invalid email address';
				validationFail = true;
			}

			return { message, validationFail };
		};

		const validatePassword = (password) => {
			let message;
			let validationFail;

			if (!password) {
				message = 'Insert password';
				validationFail = true;
			}

			return { message, validationFail };
		};

		const emailValidation = validateEmail(email);
		const passwordValidation = validatePassword(password);

		if (emailValidation.validationFail) {
			setAlert(emailValidation.message);
			return;
		} else if (passwordValidation.validationFail) {
			setAlert(passwordValidation.message);
			return;
		}

		const body = JSON.stringify({ email, password });

		// const URL = 'https://pharmacy-rest.herokuapp.com/auth/login'

		const data = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body,
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => data)
			.catch((e) => console.log(e));

		if (data.ok) {
			setUser(data.user);
			setIsLoggedIn(true);
		} else {
			setAlert(data.message);
		}
	};

	return (
		<Container>
			{isLoggedIn && <Redirect to='/profile' />}
			<div className='login-page'>
				<h1>Log in</h1>
				<form className='form' onSubmit={(e) => handleSubmit(e)}>
					<div className='form__field'>
						<label className='form__label'>Email</label>
						<input
							className='form__input'
							onChange={(e) => handleOnChange(e)}
							value={email}
							type='email'
						/>
					</div>
					<div className='form__field'>
						<label className='form__label'>Password</label>
						<input
							className='form__input'
							onChange={(e) => handleOnChange(e)}
							value={password}
							type='password'
						/>
					</div>
					<button className='form__button' type='submit'>
						Log In
					</button>
				</form>
				{alert && <Alert message={alert} />}
			</div>
			<Button title='home' to='/' />
		</Container>
	);
};

export default LoginPage;
