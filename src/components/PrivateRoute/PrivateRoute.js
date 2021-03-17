import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../context/user-context';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const { isLoggedIn } = useContext(UserContext);

	return (
		<Route
			render={() => {
				if (!isLoggedIn) {
					return <Redirect to='/login' />;
				} else {
					return <Component {...rest} />;
				}
			}}
		/>
	);
};

export default PrivateRoute;
