import { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchData } from '../../service/fetchData';
import { deleteUserURL, getAllUsersURL, HTTP_METHODS } from '../../constants/api';

import { UserContext } from '../../context/user-context';

import Modal from '../Modal/Modal';

import './UserItem.scss';

const UserItem = ({ user, index }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { setUsers } = useContext(UserContext);

	const toggleModal = () => setIsOpen((prev) => !prev);

	const handleDeleteUser = async (id) => {
		const res = await fetchData(HTTP_METHODS.DELETE, `${deleteUserURL}?id=${id}`);

		if (res.ok) {
			fetchData(HTTP_METHODS.GET, getAllUsersURL)
				.then((res) => {
					setUsers(res.users);
				})
				.catch((e) => console.warn(e));
		} else {
			return;
		}
	};

	return (
		<>
			<li className='list-item'>
				<div className='list-item__number'>{index + 1}</div>
				<div className='list-item__wrapper'>
					<div className='item'>
						<p className='item__title'>Name:</p>{' '}
						<span className='item__value'>{user.name || '---'}</span>
					</div>
					<div className='item'>
						<p className='item__title'>Last name:</p>{' '}
						<span className='item__value'>{user.lastName || '---'}</span>
					</div>
					<div className='item'>
						<p className='item__title'>Email:</p> <span className='item__value'>{user.email}</span>
					</div>
					<div className='item'>
						<p className='item__title'>Role:</p>
						<span className='item__value'>{user.role}</span>
					</div>
				</div>
				<div className='list-item__buttons'>
					<button data-tooltip='Edit User' className='button' onClick={toggleModal}>
						<i className='fas fa-user-edit'></i>
					</button>
					<button
						data-tooltip='Delete User'
						className='button'
						onClick={() => handleDeleteUser(user.id)}
						disabled={user.role === 'admin'}
					>
						<i className='fas fa-user-slash'></i>
					</button>
				</div>
			</li>
			{isOpen && <Modal toggleModal={toggleModal} id={user.id} />}
		</>
	);
};

export default UserItem;

UserItem.propTypes = {
	user: PropTypes.object,
	index: PropTypes.number,
};
