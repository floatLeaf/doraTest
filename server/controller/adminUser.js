const AdminUserModel = require('../model').AdminUser;
const formidable = require('formidable');
const validator = require('validator');
const lodash = require('lodash');
const siteFunc = require('../util');

// 表单校验
function checkFormValid(fields) {
	let msg = '';

	if (!fields.userName || validator.isEmpty(fields.userName)) {
		msg = '请输入用户名';

	} else if (!fields.password || !validator.isHash(fields.password, 'md5')) {
		msg = '请输入密码';

	} else if (!fields.code) {
		msg = '请输入验证码';
	}

	if (msg) {
		throw new siteFunc.UserException(msg);
	}
}

class AdminUser {
	constructor() {}

	async adminUserLogin(req, res) {
		let form = new formidable.IncomingForm();
		form.parse(req, async (err, fields, files) => {
			try {
				checkFormValid(fields);
			} catch (err) {
				res.send({
					state: 'error1',
					msg: err.msg
				});
				return;
			}

			let userObj = {
				userName: fields.userName,
				password: fields.password
			};

			try {
				let user = await AdminUserModel.findOne(userObj).exec();
				console.log('user=> ', user);
				if (user) {
					res.send({
						state: 'success',
						msg: '登录成功'
					});
				} else {
					res.send({
						state: 'error',
						msg: "用户名或密码错误"
					});
				}
			} catch (err) {
				res.send({
					state: 'error',
					msg: err.message
				});
			}

		});
	}



}

module.exports = new AdminUser();