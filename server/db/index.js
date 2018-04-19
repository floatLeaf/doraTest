const mongoose = require('mongoose');
const dburl = 'mongodb://localhost/doratest';

mongoose.connect(dburl);
let connection = mongoose.connection;

connection.on('open', () => {
	console.log('数据库链接成功！');
});

connection.on('error', (err) => {
	console.log('数据库链接出错：' + err);
});

connection.on('close', () => {
	console.log('数据库链接断开');
});