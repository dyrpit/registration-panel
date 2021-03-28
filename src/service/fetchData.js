// const URL = 'https://pharmacy-rest.herokuapp.com/';

// const URL = 'http://localhost:3000/';

// method
//end of URL
//body

export const fetchData = async (method, path, body) => {
	let options = {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		credentials: 'include',
	};

	if (body) {
		options = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
			credentials: 'include',
			body,
		};
	}

	try {
		return await fetch(`${path}`, options)
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => data)
			.catch((e) => console.log(e));
	} catch (e) {
		console.log(e);
	}
};
