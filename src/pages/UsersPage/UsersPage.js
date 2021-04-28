import { useContext, useEffect } from 'react';

import { fetchData } from '../../service/fetchData';
import { getAllUsersURL, HTTP_METHODS } from '../../constants/api';

import { UserContext } from '../../context/user-context';

import Container from '../../components/Container/Container';
import UserItem from '../../components/UserItem/UserItem';

import './UsersPage.scss';

const UsersPage = () => {
	const { users, setUsers } = useContext(UserContext);

	useEffect(() => {
		fetchData(HTTP_METHODS.GET, getAllUsersURL)
			.then((res) => {
				if (res?.users) {
					setUsers(res.users);
				}
			})
			.catch((e) => console.warn(e));
	}, [setUsers]);

	return (
		<Container>
			<ul className='users-list'>
				{users.map((user, index) => (
					<UserItem key={index} index={index} user={user} />
				))}
			</ul>
		</Container>
	);
};

export default UsersPage;
