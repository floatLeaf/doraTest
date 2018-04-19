const SAVE_USER = 'SAVE_USER';
const REMOVE_USER = 'REMOVE_USER';

export const userAction = {
	SAVE_USER,
	REMOVE_USER
};

export const saveUser = (data) => {
	return {
		type: SAVE_USER,
		data
	}
};

export const removeUser = () => {
	return {
		type: REMOVE_USER
	}
};