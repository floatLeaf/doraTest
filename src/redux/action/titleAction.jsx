const SET_TITLE = 'SET_TITLE';
const RESET_TITLE = 'RESET_TITLE';

export const titleAction = {
	SET_TITLE,
	RESET_TITLE
};

export const setTitle = (data) => {
	return {
		type: SET_TITLE,
		data
	}
};

export const resetTitle = () => {
	return {
		type: RESET_TITLE 
	}
};
