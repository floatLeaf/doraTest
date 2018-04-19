import Immutable from 'immutable';
import { userAction } from  '../action';

const defaultUser =  Immutable.fromJS({name: 'xu'});
const user = (state = defaultUser, action) => {
	switch(action.type) {
		case userAction.SAVE_USER: 
			return Immutable.fromJS(action.data);

		case userAction.REMOVE_USER: 
			return defaultUser;

		default: 
			return state;
	}
};

export default user;