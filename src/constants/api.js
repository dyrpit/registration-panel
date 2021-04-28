// export const API_BASE_URL = 'http://localhost:3000/';
export const API_BASE_URL = 'https://pharmacy-rest.herokuapp.com/';

export const HTTP_METHODS = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
	PATCH: 'PATCH',
};

export const loginURL = `${API_BASE_URL}auth/login`;
export const logoutURL = `${API_BASE_URL}auth/logout`;
export const getAllUsersURL = `${API_BASE_URL}admin/all-users`;
export const deleteUserURL = `${API_BASE_URL}admin/delete-user`;
export const updatedUserURL = `${API_BASE_URL}admin/update-user`;
export const registerUserURL = `${API_BASE_URL}user/register`;
