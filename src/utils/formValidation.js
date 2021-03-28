const validateEmail = (email) => {
	let message = '';

	if (!email) {
		message = 'Insert email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		message = 'Invalid email address';
	}

	return { message, type: 'email' };
};

const validatePassword = (password) => {
	let message = '';

	if (!password) {
		message = 'Insert password';
	}

	return { message, type: 'password' };
};

const validatePasswordRepeat = (password, repeatPassword) => {
	let message = '';

	if (!repeatPassword) {
		message = 'Repeat password';
	} else if (password !== repeatPassword) {
		message = 'Passwords must be the same';
	}

	return { message, type: 'repeatPassword' };
};

export const formValidation = (email, password, repeatPassword, formType) => {
	const alerts = {};

	const emailValidation = validateEmail(email);
	const passwordValidation = validatePassword(password);
	const repeatPasswordValidation =
		formType === 'register' ? validatePasswordRepeat(password, repeatPassword) : null;

	const validationArray = [emailValidation, passwordValidation, repeatPasswordValidation];

	validationArray.forEach((validation) =>
		validation && validation.message ? (alerts[validation.type] = validation.message) : null
	);

	return alerts;
};
