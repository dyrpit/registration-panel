import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [users, setUsers] = useState([]);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const value = { user, setUser, isLoggedIn, setIsLoggedIn, users, setUsers };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

UserProvider.propTypes = {
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
