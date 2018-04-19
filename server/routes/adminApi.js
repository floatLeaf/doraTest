const express = require('express');
const router = express.Router();
const {
	adminUser
} = require('../controller');


router.post('/admin/login', adminUser.adminUserLogin);

module.exports = router;