import axios from 'axios'
import { Message, Loading } from 'element-ui';
import _ from 'lodash';
//loading对象
let loading = null;

//当前正在请求的数量
let needLoadingRequestCount = 0;
let config = null
//显示loading
function showLoading (target, title = '请稍后,正在加载') {
	// 后面这个判断很重要，因为关闭时加了抖动，此时loading对象可能还存在，
	// 但needLoadingRequestCount已经变成0.避免这种情况下会重新创建个loading
	if (needLoadingRequestCount === 0 && !loading) {
		loading = Loading.service({
			lock: true,
			text: title + '...',
			background: target == undefined ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.8)',
			target: target || "body"
		});
	}
	needLoadingRequestCount++;
}

//隐藏loading
function hideLoading () {
	needLoadingRequestCount--;
	needLoadingRequestCount = Math.max(needLoadingRequestCount, 0); //做个保护
	if (needLoadingRequestCount === 0) {
		//关闭loading
		toHideLoading();
	}
}

//防抖：将 300ms 间隔内的关闭 loading 便合并为一次。防止连续请求时， loading闪烁的问题。
var toHideLoading = _.debounce(() => {
	if (loading != null) {
		loading.close();
		loading = null;
	}
}, 300);

class HttpRequest {
	constructor() {
	}
	// 公共数据部分
	gerInsideConfig () {
		// return config
	}
	// 拦截器
	interceptors (instance) {
		// 添加请求拦截器
		instance.interceptors.request.use(function (config) {
			if (config.headers.showLoading !== false) {
				showLoading(config.headers.loadingTarget, config.title);
			}

			// 在发送请求之前做些什么
			switch (config.method) {
				case 'post':
					config.headers = { 'Content-Type': 'application/json;charset=utf-8' }
					break;
				case 'put':
					config.headers = { 'Content-Type': 'application/json;charset=utf-8' }
					break;
				case 'delete':
					config.headers = { 'Content-Type': 'application/json;charset=utf-8' }
					break;
				default:
					config.headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' }
			}
			return config;
		}, function (error) {
			// 对请求错误做些什么
			//判断当前请求是否设置了不显示Loading
			if (config.headers.showLoading !== false) {
				hideLoading();
			}
			Message.error('请求超时!');
			return Promise.reject(error);
		});

		// 添加响应拦截器
		instance.interceptors.response.use(function (response) {
			// 对响应数据做点什么
			if (response.config.headers.showLoading !== false) {
				hideLoading();
			}
			if (response.status == 200) {
				return response.data;
			} else {
				alert('触发服务异常')
			}
		}, function (error) {
			// 对响应错误做点什么
			if (error.config.headers.showLoading !== false) {
				hideLoading();
			}
			if (error.response && error.response.data && error.response.data.message) {
				var jsonObj = JSON.parse(error.response.data.message);
				Message.error(jsonObj.message);
			} else {
				Message.error('网络请求失败，请联系运维');
			}
			return Promise.reject(error);
		});

	}
	request (options) {
		options = { ...(this.gerInsideConfig()), ...options }
		const instance = axios.create()
		this.interceptors(instance)
		return instance(options)
	}
}
export default new HttpRequest()