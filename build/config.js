var path = require('path');

module.exports = {
	dev: {
		"env": 'development',
		"port": process.env.PORT || 8080,
		"src": path.resolve(__dirname, '../src'),
		"public": path.resolve(__dirname, '../public')
	}
};