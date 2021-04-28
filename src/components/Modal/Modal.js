import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { getAllUsersURL, HTTP_METHODS, updatedUserURL } from '../../constants/api';
import { fetchData } from '../../service/fetchData';

import { UserContext } from '../../context/user-context';

import Alert from '../Alert/Alert';
import Input from '../Input/Input';
import Spinner from '../Spinner/Spinner';

import './Modal.scss';

const Modal = ({ id, toggleModal }) => {
	const [inputValues, setInputValues] = useState({});
	const [alert, setAlert] = useState('');
	const [successAlert, setSuccessAlert] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const { setUsers } = useContext(UserContext);

	const handleInputChange = (e) => {
		e.preventDefault();

		const { value, name } = e.target;

		setInputValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setAlert('');
		setSuccessAlert('');

		if (!Boolean(Object.keys(inputValues).length)) {
			setAlert('Nothing to update');
			return;
		}

		const body = JSON.stringify(inputValues);

		try {
			setIsLoading(true);

			const res = await fetchData(HTTP_METHODS.PATCH, `${updatedUserURL}?id=${id}`, body);

			if (res.ok) {
				setSuccessAlert(res.message);

				fetchData(HTTP_METHODS.GET, getAllUsersURL)
					.then((res) => setUsers(res.users))
					.catch((e) => console.warn(e));
			} else {
				setAlert(res.message);
			}

			setIsLoading(false);
		} catch (e) {
			console.warn(e);
		}

		setInputValues({});
	};

	const modal = (
		<div className={`modal__background`}>
			<div className='modal__container'>
				<button className='modal__close-button' onClick={toggleModal}>
					X
				</button>
				<h2 className='modal__title'>Edit user</h2>
				<form className='modal__form' onSubmit={(e) => handleSubmit(e)} noValidate>
					<Input
						handleOnChange={handleInputChange}
						value={inputValues.name || ''}
						type='text'
						name='name'
					/>
					<Input
						handleOnChange={handleInputChange}
						value={inputValues.lastName || ''}
						type='text'
						name='lastName'
						title='last name'
					/>
					<div className='input__container'>
						<label className='modal__input'>
							<select
								name='role'
								className='modal__select'
								value={inputValues.role}
								onChange={handleInputChange}
							>
								<option className='modal__select__option' value=''>
									Choose role for user
								</option>
								<option className='modal__select__option' value='admin'>
									Admin
								</option>
								<option className='modal__select__option' value='user'>
									User
								</option>
							</select>
						</label>
					</div>
					{alert && <Alert message={alert} />}
					{successAlert && <Alert message={successAlert} success={true} />}
					<button className='form__button modal_button' type='submit'>
						{isLoading ? <Spinner /> : 'Change'}
					</button>
				</form>
			</div>
		</div>
	);

	return createPortal(modal, document.querySelector('.modal'));
};

export default Modal;

Modal.propTypes = {
	id: PropTypes.string,
	toggleModal: PropTypes.func,
};
