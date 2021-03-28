import React, { useState } from 'react';

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userDetails, setUserDetails] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const value = { user, setUser, isLoggedIn, setIsLoggedIn, userDetails, setUserDetails };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
