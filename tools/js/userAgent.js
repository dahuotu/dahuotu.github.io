var userAgent = {
	Init: function() {
		console.log('init userAgent');
	},
	//标题
	Title: 'User Agent',
	//说明
	Remark: '浏览器用户代理信息',
	//浏览器的userAgent信息
	All: navigator.userAgent,
	//浏览器名称
	Name: navigator.appName,
	//浏览器的内部名称
	CodeName: navigator.appCodeName,
	//浏览器版本号
	Version: parseFloat(navigator.appVersion),
	//浏览器的次要版本
	MinorVersion: navigator.appMinorVersion || null,
	//浏览器所在的系统平台类型
	Platform: navigator.platform,
	//浏览器的产品名称
	Product: navigator.product,
	//浏览器的内部版本号
	ProductSub: navigator.productSub,
	//浏览器的语言
	Language: navigator.browserLanguage || navigator.language,
	//浏览器支持的MIME类型
	MimeTypes: {
		Length: navigator.mimeTypes.length || null,
		List: navigator.mimeTypes,
	},
	//浏览器安装的插件信息
	Plugins: {
		Length: navigator.plugins.length || null,
		List: navigator.plugins,
	},
	//浏览器的品牌 
	Vendor: navigator.vendor,
	//浏览器供应商次要信息
	VendorSub: navigator.vendorSub,
	//浏览器识别码 
	BuildID: navigator.buildID,
	//IE内核
	isIE: navigator.userAgent.indexOf('Trident') > -1,
	//opera内核
	isOpera: navigator.userAgent.indexOf('Presto') > -1,
	//苹果、谷歌内核
	isWebKit: navigator.userAgent.indexOf('AppleWebKit') > -1,
	//火狐内核
	isFirefox: navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1,
	//移动终端
	isMobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
	//ios终端
	isIos: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
	//android终端或uc浏览器
	isAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
	//iPhone或者QQHD浏览器
	isIPhone: navigator.userAgent.indexOf('iPhone') > -1,
	//iPad
	isIPad: navigator.userAgent.indexOf('iPad') > -1,
	//是否web应该程序，没有头部与底部
	isWebApp: navigator.userAgent.indexOf('Safari') == -1,
	//浏览器是否支持webVR技术
	isWebVR: navigator.activeVRDisplays == undefined,
	//浏览器是否启用Cookie
	cookieEnabled: navigator.cookieEnabled,
	//浏览器是否支持IndexedDB数据库
	indexedDBEnabled: function() {
		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
		window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

		if(!window.indexedDB) {
			return false;
		} else {
			return true;
		}
	},
	//浏览器是否支持localStorage
	localStorage: {
		isUsed: function() {
			if(window.Storage && window.localStorage && window.localStorage instanceof Storage) {
				return true;
			} else {
				return false;
			}
		},

	},
	//浏览器是否支持sessionStorage
	sessionStorage: {
		isUsed: function() {
			if(window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage) {
				return true;
			} else {
				return false;
			}
		},

	},
	//浏览器是否启用Java
	javaEnabled: navigator.javaEnabled(),
	//浏览器是否启用了数据污点
	taintEnabled: function() {
		try {
			return navigator.taintEnabled();
		} catch(err) {
			console.log(err.message);
			return null;
		}
	},
	//浏览器是否启用禁止跟踪
	doNotTrack: navigator.doNotTrack || null,

};