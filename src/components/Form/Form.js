import { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import { HTTP_METHODS, loginURL, registerUserURL } from '../../constants/api';
import { fetchData } from '../../service/fetchData';
import { formValidation } from '../../utils/formValidation';

import { UserContext } from '../../context/user-context';

import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import Spinner from '../Spinner/Spinner';

import './Form.scss';

const Form = ({ type }) => {
	const [inputValues, setInputValues] = useState({});
	const [alerts, setAlerts] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { setUser, setIsLoggedIn, isLoggedIn } = useContext(UserContext);

	const handleOnChange = (e) => {
		e.preventDefault();

		const { value, name } = e.target;

		if (alerts[name]) {
			setAlerts((prevState) => ({ ...prevState, [name]: '' }));
		}

		setInputValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { validationAlerts, isValid } = formValidation(inputValues, type);

		if (!isValid) {
			setAlerts(validationAlerts);
			return;
		}

		const body = JSON.stringify(inputValues);

		const URL = type === 'register' ? registerUserURL : loginURL;

		try {
			setIsLoading(true);
			const res = await fetchData(HTTP_METHODS.POST, URL, body);

			if (type === 'register' && res.ok) {
				setIsLoading(false);
				setAlerts({ success: 'User registered successfully!' });
				setInputValues({});
				return;
			}

			if (res.ok) {
				setUser(res.user);
				setIsLoggedIn(true);
				setIsLoading(false);
				return;
			} else {
				setAlerts({ message: res.message });
			}

			setIsLoading(false);
		} catch (e) {
			setAlerts({ message: e.message });
		}

		setInputValues({});
	};

	return (
		<>
			{isLoggedIn && <Redirect to='/profile' />}
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
					{isLoading ? <Spinner /> : type === 'register' ? 'Register' : 'Log in'}
				</button>
			</form>
			{type === 'register' && Boolean(alerts.success) ? (
				<Alert success={true} message={alerts.success} />
			) : (
				Boolean(alerts.message) && <Alert message={alerts.message} />
			)}
		</>
	);
};

export default Form;

Form.propTypes = {
	type: PropTypes.string,
};
