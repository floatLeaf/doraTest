import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import * as reducer from '../reducer';
 
let store;

// 判断浏览器是否安装了redux-tools插件
if ((window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())) {
	store = createStore(
		combineReducers(reducer),
		compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
	);
} else {
	store = createStore(
		combineReducers(reducer),
		applyMiddleware(thunk)
	);
}


export default store;