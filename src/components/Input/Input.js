import React from 'react';
import Alert from '../Alert/Alert';

import './Input.scss';

const Input = ({ handleOnChange, value, type, name, title, warning }) => {
	const warningClass = Boolean(warning) ? 'input--warning' : '';

	return (
		<>
			<div className='input__container'>
				<label className='label'>{title || name}</label>
				<input
					className={`input ${warningClass}`}
					onChange={(e) => handleOnChange(e)}
					value={value || ''}
					type={type}
					name={name}
				/>
			</div>
			{Boolean(warning) && <Alert message={warning} />}
		</>
	);
};

export default Input;
