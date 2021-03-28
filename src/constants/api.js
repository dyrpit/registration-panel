// export const API_BASE_URL = 'http://localhost:3000/';
export const API_BASE_URL = 'https://pharmacy-rest.herokuapp.com/';

export class FetchOptions {
	constructor(
		method = 'GET',
		headers = { 'Content-Type': 'application/json' },
		credentials = 'include',
		body = null
	) {
		this.method = method;
		this.headers = headers;
		this.credentials = credentials;
		this.body = body;
	}

	getOptions() {
		return {
			method: this.method,
			headers: this.headers,
			credentials: this.credentials,
			body: this.body,
		};
	}
}
