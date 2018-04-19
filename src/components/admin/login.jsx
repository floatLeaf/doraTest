import React, { Component } from 'react';  
import PropTypes from 'prop-types'; 
import Immutable from 'immutable';
import md5 from 'js-md5';
import { Icon, Button, message } from 'antd';

import { axiosPost } from 'src/config';

function FormItemError(props) {
	if (!props.condition) {
		return <div className="form-item-error"></div>;
	}

	return (
		<div className="form-item-error">{props.msg}</div>
	)
}


class AdminLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
			password: '',
			code: '',
			errorMsg: {
				userName: '请输入用户名',
				password: '请输入密码',
				code: '请输入验证码'
			},
			focusState: {
				userName: false,
				password: false,
				code: false
			}		
		};

		this.form = React.createRef();

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		let focusState = this.state.focusState;
		focusState[name] =  true;
		this.setState({[name]: e.target.value, focusState});
	}

	// 登陆前验证
	validateForm() {
		let status = true,
			name = '';
		if (!this.state.userName) {
			status = false;
			name = 'userName';

		} else if (!this.state.password) {
			status = false;
			name = 'password';

		} else if (!this.state.code) {
			status = false;
			name = 'code';
		}

		let focusState = this.state.focusState;
		focusState[name] =  true;
		this.setState({focusState});

		return status;
	}

	// 登录
	async handleSubmit(e) {
		e.preventDefault();
		if (!this.validateForm()) return;

		let loginData = {
			userName: this.state.userName,
			password: md5(this.state.password),
			code: this.state.code
		}; 

		let json = await axiosPost('/admin/login', loginData);
		
		if (json.status == 'error') {
			message.error(json.msg);
			return false;
		}

		
	}

	render() {
		return (
			<div className="admin-login-wrap">
				<h1><span>Dora</span>CMS</h1>

				<form method="POST" onSubmit={this.handleSubmit.bind(this)} ref={this.form}> 
					<div className="form-item">
						<Icon type="user" />
						<input type="text" name="userName" value={this.state.userName} onChange={this.handleChange} placeholder="请输入用户名" autoComplete="off" />
					</div>
					<FormItemError condition={!this.state.userName && this.state.focusState.userName} msg={this.state.errorMsg.userName} />

					<div className="form-item">
						<Icon type="safety" />
						<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="请输入密码" autoComplete="off" />
					</div>
					<FormItemError condition={!this.state.password && this.state.focusState.password} msg={this.state.errorMsg.password} />

					<div className="form-item">
						<Icon type="code-o" />
						<input type="text" name="code" value={this.state.code} onChange={this.handleChange} placeholder="请输入验证码" autoComplete="off" />
					</div>
					<FormItemError condition={!this.state.code && this.state.focusState.code} msg={this.state.errorMsg.code} />

					<Button type="primary" htmlType="submit" style={{width: '100%', height: '36px'}}>登录</Button>
				</form>
			</div>
		)
	}
}


export default AdminLogin;