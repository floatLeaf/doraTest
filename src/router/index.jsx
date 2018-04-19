import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

const Index = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('components/index').default)
    }, 'index');
};

const AminLogin = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('components/admin/login').default)
    }, 'adminLogin');
};

const AdminIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('components/admin/index').default)
    }, 'adminIndex');
};

export default (
	<Router history={hashHistory}>
		<Route path="/" getComponent={AminLogin}></Route>
		<Route path="/admin-login" getComponent={AminLogin}></Route>
        <Route path="/admin-index" getComponent={AdminIndex}></Route>
	</Router>
)