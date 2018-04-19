import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Breadcrumb, Alert, Button } from 'antd';
import Immutable from 'immutable';

import { saveUser, removeUser } from 'myRedux/action/userAction';

console.log('userAction', saveUser, removeUser);
 
class Index extends Component {

	constructor(props) {
		super(props);

		this.rebackUser = this.rebackUser.bind(this);
	}

	state = {
		loading: false
	}

	// static propTypes = {
	// 	text: PropTypes.string
	// };
	
	createUser() {
		let obj = {name: 'wang'};
		this.props.saveUser(obj);
	}

	rebackUser() {
		this.props.removeUser();
	}

	render() {
		return (
			<div> 
				<h1>hello word, {this.props.user.name}</h1>

				<Button type="primary" loading={this.state.loading} onClick={this.createUser.bind(this)}>Click me!</Button>
				<Button type="primary" onClick={this.rebackUser}>remove user</Button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('state', state);
	let {user} = state;
	return {
		user: user.toJS()
	}
}
 
let mapDispatchToProps = {
	saveUser, 
	removeUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);