const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AdminUserSchema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	userName: String,
	phoneNum: Number,
	email: Number,
	enable: {
		type: Boolean,
		default: false
	},
	date: {
		type: Date,
		default: Date.noew
	}

});

let AdminUser = mongoose.model('AdminUser', AdminUserSchema);

module.exports = AdminUser;