import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { API_BASE_URL, FetchOptions } from '../../constants/api';
import { UserContext } from '../../context/user-context';
import { useFetch } from '../../hooks/useFetch';
import { formValidation } from '../../utils/formValidation';

import Alert from '../Alert/Alert';
import Input from '../Input/Input';

import './Form.scss';

const Form = ({ type, callback }) => {
	const [inputValues, setInputValues] = useState({});
	const [alerts, setAlerts] = useState({});

	const [{ data, isLoading, error }, login] = useFetch();

	const location = useLocation();

	const { setUser, setIsLoggedIn } = useContext(UserContext);

	const handleOnChange = (e) => {
		e.preventDefault();

		const { value, name } = e.target;

		setInputValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { email, password, repeatPassword } = inputValues;

		if (!Boolean(Object.keys(inputValues).length)) {
			setAlerts({ message: 'Fill up form before submit' });
			return;
		}

		const validationAlerts = formValidation(email, password, repeatPassword, type);

		if (Boolean(Object.keys(validationAlerts).length)) {
			setAlerts(validationAlerts);
			return;
		}

		const body = JSON.stringify(inputValues);

		const fetchOptions = new FetchOptions('POST', undefined, undefined, body);

		const URL =
			type === 'register'
				? `${API_BASE_URL}user${location.pathname}`
				: `${API_BASE_URL}auth${location.pathname}`;

		login(URL, fetchOptions);
	};
	console.log(data);

	useEffect(() => {
		if (data?.user) {
			setUser(data.user);
			setIsLoggedIn(true);
		}

		if (callback && data?.ok) {
			callback(true);
		}

		if (error) {
			setAlerts({ message: error });
		}
	}, [data, callback, error, setIsLoggedIn, setUser]);

	return (
		<>
			<form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
				<Input
					handleOnChange={handleOnChange}
					value={inputValues.email || ''}
					type='email'
					name='email'
					warning={alerts.email || ''}
				/>
				<Input
					handleOnChange={handleOnChange}
					value={inputValues.password || ''}
					type='password'
					name='password'
					warning={alerts.password || ''}
				/>
				{type === 'register' ? (
					<>
						<Input
							handleOnChange={handleOnChange}
							value={inputValues.repeatPassword || ''}
							type='password'
							name='repeatPassword'
							title='repeat password'
							warning={alerts.repeatPassword || ''}
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
							type='text'
							name='lastName'
							title='last name'
						/>
					</>
				) : null}
				<button className='form__button' type='submit'>
					{type === 'register' ? 'Register' : 'Log In'}
				</button>
			</form>
			{Boolean(alerts.message) && <Alert message={alerts.message} />}
		</>
	);
};

export default Form;
