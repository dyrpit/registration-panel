const validateEmail = (email) => {
	let message = '';

	if (!email) {
		message = 'Insert email';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		message = 'Invalid email address';
	}

	return { message, type: 'email' };
};

const validatePassword = (password, type) => {
	let message = '';
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

	if (!password) {
		message = 'Insert password';
	}

	if (!password.match(passwordRegex) && type === 'register') {
		message =
			'Passoword must have 8 to 15 characters, at least one lowercase and uppercase letters, one digit, one special character';
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

export const formValidation = (inputValues, formType) => {
	const validationAlerts = {};
	let isValid = true;

	const { email, password, repeatPassword } = inputValues;

	if (!Boolean(Object.keys(inputValues).length)) {
		validationAlerts.message = 'Fill up form before submit';
		return { validationAlerts, isValid: false };
	}

	const emailValidation = validateEmail(email);
	const passwordValidation = validatePassword(password, formType);
	const repeatPasswordValidation =
		formType === 'register' ? validatePasswordRepeat(password, repeatPassword) : null;

	const validationArray = [emailValidation, passwordValidation, repeatPasswordValidation];

	isValid = validationArray.every((validation) => {
		if (validation == null) {
			return true;
		}

		return !validation.message;
	});

	validationArray.forEach((validation) =>
		validation && validation.message
			? (validationAlerts[validation.type] = validation.message)
			: null
	);

	return { validationAlerts, isValid };
};
