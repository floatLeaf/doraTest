import axios from 'axios';
import { message } from 'antd';

export const baseUrl = 'http://localhost:3000/api';

export const axiosPost = (url, data = {}) => { 
	let conf = {
		method: 'post',
	  	url: baseUrl + url,
	  	data,
	  	timeout: 10000
	};
	return axios(conf)
		.then(res => { 
			if (res.status == 200) {
				return res.data;
			} else {
				message.error('请求失败！');
			}
		})
		.catch(() => {
			message.error('请求失败！');
		});
};


export const axiosGet = (url, params = {}) => {
	let conf = {
		method: 'get',
	  	url: baseUrl + url,
	  	params,
	  	timeout: 10000
	};
	
	return axios(conf)
		.then(res => {
			if (res.status == 200) {
				return res.data;
			} else {
				message.error('请求失败！');
			}
		})
		.catch(() => {
			message.error('请求失败！');
		});
};