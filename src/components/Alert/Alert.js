import PropTypes from 'prop-types';

import './Alert.scss';

const Alert = ({ message, success }) => {
	const successStyle = success ? 'alert--success' : '';

	return (
		<div className={`alert ${successStyle}`}>
			<p className='alert__message'>{message}</p>
		</div>
	);
};

export default Alert;

Alert.propTypes = {
	message: PropTypes.string,
	success: PropTypes.bool,
};
