import React from 'react';
import { useHistory } from 'react-router';

import './Button.scss';

const Button = ({ title, to }) => {
	const history = useHistory();

	return (
		<button className='button' onClick={() => history.push(to)}>
			{title}
		</button>
	);
};

export default Button;
