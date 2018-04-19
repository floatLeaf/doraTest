webpackJsonp([3],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(20);

var _reduxThunk = __webpack_require__(56);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducer = __webpack_require__(123);

var reducer = _interopRequireWildcard(_reducer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = void 0;

// 判断浏览器是否安装了redux-tools插件
if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
	store = (0, _redux.createStore)((0, _redux.combineReducers)(reducer), (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
} else {
	store = (0, _redux.createStore)((0, _redux.combineReducers)(reducer), (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

exports.default = store;

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = undefined;

var _user2 = __webpack_require__(124);

var _user3 = _interopRequireDefault(_user2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.user = _user3.default;

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _immutable = __webpack_require__(31);

var _immutable2 = _interopRequireDefault(_immutable);

var _action = __webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultUser = _immutable2.default.fromJS({ name: 'xu' });
var user = function user() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultUser;
	var action = arguments[1];

	switch (action.type) {
		case _action.userAction.SAVE_USER:
			return _immutable2.default.fromJS(action.data);

		case _action.userAction.REMOVE_USER:
			return defaultUser;

		default:
			return state;
	}
};

exports.default = user;

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userAction = __webpack_require__(57);

Object.keys(_userAction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _userAction[key];
    }
  });
});

var _adminTitle = __webpack_require__(392);

Object.keys(_adminTitle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _adminTitle[key];
    }
  });
});

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'F:\\Nodejs 基础学习\\DoraTest\\src\\redux\\action\\adminTitle.jsx'");

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var SAVE_USER = 'SAVE_USER';
var REMOVE_USER = 'REMOVE_USER';

var userAction = exports.userAction = {
	SAVE_USER: SAVE_USER,
	REMOVE_USER: REMOVE_USER
};

var saveUser = exports.saveUser = function saveUser(data) {
	return {
		type: SAVE_USER,
		data: data
	};
};

var removeUser = exports.removeUser = function removeUser() {
	return {
		type: REMOVE_USER
	};
};

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(30);

var _reactRedux = __webpack_require__(32);

var _router = __webpack_require__(95);

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__(122);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(126);

__webpack_require__(127);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
	_reactRedux.Provider,
	{ store: _store2.default },
	_router2.default
), document.getElementById('app'));

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function Index(location, cb) {
    __webpack_require__.e/* require.ensure */(2).then((function (require) {
        cb(null, __webpack_require__(131).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var AminLogin = function AminLogin(location, cb) {
    __webpack_require__.e/* require.ensure */(1).then((function (require) {
        cb(null, __webpack_require__(132).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

var AdminIndex = function AdminIndex(location, cb) {
    __webpack_require__.e/* require.ensure */(0).then((function (require) {
        cb(null, __webpack_require__(133).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};

exports.default = _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(_reactRouter.Route, { path: '/', getComponent: AminLogin }),
    _react2.default.createElement(_reactRouter.Route, { path: '/admin-login', getComponent: AminLogin }),
    _react2.default.createElement(_reactRouter.Route, { path: '/admin-index', getComponent: AdminIndex })
);

/***/ })

},[58]);
//# sourceMappingURL=app.js.map