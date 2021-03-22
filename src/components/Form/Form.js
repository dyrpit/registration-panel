import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { UserContext } from '../../context/user-context';
import { formValidation } from '../../utils/formValidation';

import Alert from '../Alert/Alert';
import Input from '../Input/Input';

import './Form.scss';

const Form = ({ type }) => {
	const [inputValues, setInputValues] = useState({});
	const [alerts, setAlerts] = useState({});

	const location = useLocation();
	console.log(location);

	const { setUser, setIsLoggedIn } = useContext(UserContext);

	const handleOnChange = (e) => {
		e.preventDefault();

		const { value, name } = e.target;

		setInputValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password, repeatPassword } = inputValues;

		if (!Boolean(Object.keys(alerts).length)) {
			setAlerts({ message: 'Fill up form before submit' });
			return;
		}

		const validationAlerts = formValidation(email, password, repeatPassword);

		if (Boolean(Object.keys(validationAlerts).length)) {
			setAlerts(validationAlerts);
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
			console.log(data);
			setAlerts({ message: data.message });
		}
	};

	console.log(alerts);

	return (
		<>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<Input
					handleOnChange={handleOnChange}
					value={inputValues.email || ''}
					type='email'
					name='email'
				/>
				<Input
					handleOnChange={handleOnChange}
					value={inputValues.password || ''}
					type='password'
					name='password'
				/>
				{type === 'register' ? (
					<>
						<Input
							handleOnChange={handleOnChange}
							value={inputValues.repeatPassword || ''}
							type='password'
							name='repeatPassword'
							title='repeat password'
						/>
						<Input
							handleOnChange={handleOnChange}
							value={inputValues.name || ''}
							type='text'
							name='name'
						/>
						<Input
							handleOnChange={handleOnChange}
							value={inputValues.lastName || ''}
							type='password'
							name='lastName'
							title='last name'
						/>
					</>
				) : null}
				<button className='form__button' type='submit'>
					Log In
				</button>
			</form>
			{Boolean(Object.keys(alerts).length) && <Alert message={alerts.message} />}
		</>
	);
};

export default Form;
