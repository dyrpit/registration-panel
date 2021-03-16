import React from 'react';

import './Alert.scss';

const Alert = ({ message }) => {
	return (
		<div className='alert'>
			<p className='alert__message'>{message}</p>
		</div>
	);
};

export default Alert;
