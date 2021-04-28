export const fetchData = async (method, path, body) => {
	const options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
		body: body || null,
	};

	try {
		const response = await fetch(`${path}`, options);
		const data = await response.json();

		return data;
	} catch (e) {
		return e;
	}
};
