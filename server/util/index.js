let siteFunc = {

	UserException: function(msg) {
		this.state = 'error';
		this.msg = msg;
	}

}

module.exports = siteFunc;