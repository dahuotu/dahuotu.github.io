var pintuer = {
	//初始化测试函数
	Init: function() {
		console.log('测试该库是否正常:Test this js is runing!');
	},
	//设备系统相关
	DeviceOS: {
		//标题
		Title: 'Device OS',
		//说明
		Remark: '设备/系统相关',
		//操作系统类型
		OsCPU: navigator.oscpu || null,
		//CPU核心数
		Concurrency: navigator.hardwareConcurrency || null,
		//CPU等级
		CPUClass: navigator.cpuClass || null,
		//系统内存
		Memory: navigator.deviceMemory || null,
		//键盘
		Keyboard: navigator.keyboard || null,
		//是否为移动终端
		IsMobile: !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),
		//是否为苹果系统
		IsIos: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		//是否为安卓系统
		IsAndroid: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
		//是否为iPhone
		IsIPhone: navigator.userAgent.indexOf('iPhone') > -1,
		//是否为iPad
		IsIPad: navigator.userAgent.indexOf('iPad') > -1,
	},
	//浏览器相关
	Browser: {
		//标题
		Title: 'Browser',
		//说明
		Remark: '浏览器相关',
		//浏览器userAgent信息
		UserAgent: navigator.userAgent,
		//浏览器名称
		Name: navigator.appName,
		//浏览器内部名称
		CodeName: navigator.appCodeName,
		//浏览器版本号
		Version: parseFloat(navigator.appVersion),
		//浏览器次要版本
		MinorVersion: navigator.appMinorVersion || null,
		//浏览器系统平台类型
		Platform: navigator.platform,
		//浏览器产品名称
		Product: navigator.product,
		//浏览器内部版本号
		ProductSub: navigator.productSub,
		//浏览器使用的语言
		Language: (navigator.language || navigator.browserLanguage).toLowerCase(),
		//浏览器的品牌 
		Vendor: navigator.vendor,
		//浏览器供应商次要信息
		VendorSub: navigator.vendorSub,
		//浏览器编译码 
		BuildID: navigator.buildID,
		//浏览器渲染模式
		CompatMode: document.compatMode,
		//浏览器当前打开文档默认字体大小
		DefaultSize: function() {
			var font = document.body.currentStyle || document.defaultView.getComputedStyle(document.body, '')
			return font.fontSize;
		},
		//浏览器是否为IE内核
		IsIE: (navigator.userAgent.indexOf('Trident') > -1) || (!!window.ActiveXObject || "ActiveXObject" in window),
		//浏览器是否为Opera内核
		IsOpera: (navigator.userAgent.indexOf('Presto') > -1) || (navigator.userAgent.indexOf("Opera") > -1),
		//浏览器是否为谷歌内核
		IsChrome: navigator.userAgent.indexOf('AppleWebKit') > -1 || (navigator.userAgent.indexOf("Chrome") > -1),
		//浏览器是否为火狐内核
		IsFirefox: (navigator.userAgent.indexOf('Gecko') > -1 && navigator.userAgent.indexOf('KHTML') == -1) || (navigator.userAgent.indexOf("Firefox") > -1),
		//浏览器是否为Safari内核
		IsSafari: navigator.userAgent.indexOf('Safari') > -1,
		//是否支持webVR技术
		WebVREnabled: navigator.activeVRDisplays == undefined,
		//是否启用Cookie
		CookieEnabled: navigator.cookieEnabled,
		//是否启用sessionStorage
		SessionStorageEnabled: function() {
			if(window.Storage && window.sessionStorage && window.sessionStorage instanceof Storage) {
				return true;
			} else {
				return false;
			}
		},
		//是否启用localStorage
		LocalStorageEnabled: function() {
			if(window.Storage && window.localStorage && window.localStorage instanceof Storage) {
				return true;
			} else {
				return false;
			}
		},
		//是否支持IndexedDB数据存储
		IndexedDBEnabled: function() {
			window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
			window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
			window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
			if(!window.indexedDB) {
				return false;
			} else {
				return true;
			}
		},
		//是否启用Java
		JavaEnabled: navigator.javaEnabled(),
		//否启用数据污点功能
		TaintEnabled: function() {
			try {
				return navigator.taintEnabled();
			} catch(err) {
				console.log(err.message);
				return null;
			}
		},
		//是否启用禁止跟踪
		DoNotTrack: navigator.doNotTrack || null,
	},
	//存储相关
	Storage: {
		//标题
		Title: 'Storage',
		//说明
		Remark: '浏览器存储相关（LocalStorage存储、SessionStorage存储、IndexedDB存储）',
		//LocalStorage存储
		LocalStorage: {
			//获取值
			Get: function(key) {

			},
			//设置值
			Set: function(key, val) {

			}
		},
		//SessionStorage存储
		SessionStorage: {
			//获取值
			Get: function(key) {

			},
			//设置值
			Set: function(key, val) {

			}
		},
		//WebSQL IndexedDB存储
		IndexedDB: {

		},
	},
	//浏览器MIME类型
	MimeTypes: {
		//标题
		Title: 'MimeTypes',
		//说明
		Remark: '浏览器MIME类型',
		//MIME数量
		Length: navigator.mimeTypes.length || null,
		//MIME列表
		List: navigator.mimeTypes,
	},
	//字体相关
	Font: {
		//标题
		Title: 'Font',
		//说明
		Remark: '字体相关',
		//字体列表
		List: [],
	},
	//浏览器插件相关
	Plugins: {
		//标题
		Title: 'Plugins',
		//说明
		Remark: '浏览器插件相关',
		//插件数量
		Length: navigator.plugins.length || null,
		//插件列表
		List: navigator.plugins,
	},
	//Flash插件相关
	Flash: {

	},
	//语言相关
	Language: {
		//标题
		Title: 'Language',
		//说明
		Remark: '语言相关',
		//系统默认语言
		SystemLanguage: navigator.systemLanguage || null,
		//系统自然语言设置
		UserLanguage: navigator.userLanguage || null,
	},
	//时区相关
	Timezone: {
		//标题
		Title: 'Timezone',
		//说明
		Remark: '时区相关',
		//系统时间
		SystemTime: new Date().toUTCString(),
		//时差
		OffsetTime: new Date().getTimezoneOffset(),
		//当地时间
		LocaleTime: new Date().toLocaleString(),
	},
	//媒体相关
	Media: {
		//标题
		Title: 'Media',
		//说明
		Remark: '媒体相关',
		//对象
		Obj: navigator.mediaCapabilities || null,
	},
	//屏幕相关
	Screen: {
		//标题
		Title: 'Screen',
		//说明
		Remark: '屏幕相关',
		//屏幕宽度
		Width: screen.width,
		//屏幕高度
		Height: screen.height,
		//屏幕色彩
		ColorDepth: screen.colorDepth,
		//屏幕像素点
		DeviceXDPI: screen.deviceXDPI,
		//屏幕支持的最大同时触摸的点数
		MaxTouchPoints: navigator.maxTouchPoints || null,
	},
	//网络连接相关
	Network: {
		//标题
		Title: 'Network',
		//说明
		Remark: '网络连接相关',
		//对象
		Obj: navigator.connection || null,
		//是否链接到了因特网
		OnLine: navigator.onLine,
	},
	//地理位置相关
	Geolocation: {
		//标题
		Title: 'Geolocation',
		//说明
		Remark: '地理位置相关',
		//对象
		Obj: navigator.geolocation || null,
	},
}