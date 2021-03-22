import React from 'react';

import './Input.scss';

const Input = ({ handleOnChange, value, type, name, title }) => {
	return (
		<div className='input__container'>
			<label className='label'>{title || name}</label>
			<input
				className='input'
				onChange={(e) => handleOnChange(e)}
				value={value || ''}
				type={type}
				name={name}
			/>
		</div>
	);
};

export default Input;
