import { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import PropTypes from 'prop-types';

import { UserContext } from '../../context/user-context';

const PrivateRoute = ({ component: Component, role, ...rest }) => {
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

PrivateRoute.propTypes = {
	Component: PropTypes.element,
	role: PropTypes.string,
	rest: PropTypes.node,
};
