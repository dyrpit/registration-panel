import PropTypes from 'prop-types';

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

Button.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
};
