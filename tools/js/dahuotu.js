var uA = {
	Code: "userAgent",
	Desc: "浏览器用户代理信息",
	List: [{
			name: '浏览器的userAgent信息',
			code: 'User-Agent',
			value: userAgent.All,
		},
		{
			name: '浏览器名称',
			code: 'Name',
			value: userAgent.Name,
		},
		{
			name: '浏览器的内部名称',
			code: 'Code Name',
			value: userAgent.CodeName,
		},
		{
			name: '浏览器版本号',
			code: 'Browser Version',
			value: userAgent.Version,
		},
		{
			name: '浏览器的次要版本',
			code: 'Browser MinorVersion',
			value: userAgent.MinorVersion,
		},
		{
			name: '浏览器内核名称',
			code: 'Engine Name',
			value: userAgent.Product,
		},
		{
			name: '浏览器内核版本号',
			code: 'Engine Version',
			value: userAgent.ProductSub,
		},
		{
			name: '浏览器内核系统类型',
			code: 'Engine Platform',
			value: userAgent.Platform,
		},
		{
			name: '浏览器的语言',
			code: 'Browser Language',
			value: userAgent.Language,
		},
		{
			name: '是否为Web应该程序，没有头部与底部',
			code: 'Browser WebApp',
			value: userAgent.isWebApp,
		},
		{
			name: '浏览器是否支持webVR技术',
			code: 'Browser WebVR',
			value: userAgent.isWebVR,
		},
		{
			name: '浏览器是否启用Cookie',
			code: 'Browser CookieEnabled',
			value: userAgent.cookieEnabled,
		},
		{
			name: '浏览器是否支持IndexedDB数据库',
			code: 'Browser IndexedDBEnabled',
			value: userAgent.indexedDBEnabled(),
		},
		{
			name: '浏览器是否支持localStorage',
			code: 'Browser LocalStorage IsUsed',
			value: userAgent.localStorage.isUsed(),
		},
		{
			name: '浏览器是否支持sessionStorage',
			code: 'Browser SessionStorage IsUsed',
			value: userAgent.sessionStorage.isUsed(),
		},
		{
			name: '浏览器是否启用Java',
			code: 'Browser JavaEnabled',
			value: userAgent.javaEnabled,
		},
		{
			name: '浏览器是否启用了数据污点',
			code: 'Browser TaintEnabled',
			value: userAgent.taintEnabled(),
		},
		{
			name: '浏览器是否启用禁止跟踪',
			code: 'Browser doNotTrack',
			value: userAgent.doNotTrack,
		},
		{
			name: '浏览器支持的MIME数量',
			code: 'Browser MimeTypes',
			value: userAgent.MimeTypes.Length,
		},
		{
			name: '浏览器安装的插件数量',
			code: 'Browser Plugins',
			value: userAgent.Plugins.Length,
		},
		{
			name: '浏览器的品牌',
			code: 'Browser Vendor',
			value: userAgent.Vendor,
		},
		{
			name: '浏览器供应商次要信息',
			code: 'Browser VendorSub',
			value: userAgent.VendorSub,
		},
		{
			name: '浏览器识别码',
			code: 'Browser BuildID',
			value: userAgent.BuildID,
		},
		{
			name: '浏览器是否为IE内核',
			code: 'Browser IE',
			value: userAgent.isIE,
		},
		{
			name: '浏览器是否为Opera内核',
			code: 'Browser Opera',
			value: userAgent.isOpera,
		},
		{
			name: '浏览器是否为苹果、谷歌内核',
			code: 'Browser WebKit',
			value: userAgent.isWebKit,
		},
		{
			name: '浏览器是否为火狐内核',
			code: 'Browser Firefox',
			value: userAgent.isFirefox,
		},
		{
			name: '设备是否为移动终端',
			code: 'Device Mobile',
			value: userAgent.isMobile,
		},
		{
			name: '设备是否为ios终端',
			code: 'Device iOS',
			value: userAgent.isIos,
		},
		{
			name: '设备是否为Android终端或UC浏览器',
			code: 'Device Android',
			value: userAgent.isAndroid,
		},
		{
			name: '设备是否为iPhone或者QQHD浏览器',
			code: 'Device iPhone',
			value: userAgent.isIPhone,
		},
		{
			name: '设备是否为iPad',
			code: 'Device iPad',
			value: userAgent.isIPad,
		},
	]
};

var devOS = {
	Code: "DeviceOS",
	Desc: "设备、系统、网络等信息",
	List: [{
			name: 'CPU核心数',
			code: 'Device CPU Concurrency',
			value: deviceOS.Concurrency,
		},
		{
			name: 'CPU等级',
			code: 'Device CPU Class',
			value: deviceOS.CPUClass,
		},
		{
			name: '内存',
			code: 'Device Memory',
			value: deviceOS.Memory,
		},
		{
			name: '键盘',
			code: 'Device Keyboard',
			value: deviceOS.Keyboard,
		},
		{
			name: '最大同时触摸的点数',
			code: 'Device MaxTouchPoints',
			value: deviceOS.MaxTouchPoints,
		},
		{
			name: '屏幕分辨率',
			code: 'Device ScreenResolution',
			value: deviceOS.ScreenResolution.width + 'x' + deviceOS.ScreenResolution.height,
		},
		{
			name: '屏幕色彩',
			code: 'Device Screen ColorDepth',
			value: deviceOS.ScreenResolution.colorDepth,
		},
		{
			name: '屏幕像素点',
			code: 'Device Screen DeviceXDPI',
			value: deviceOS.ScreenResolution.deviceXDPI,
		},
		{
			name: '当前所使用的操作系统类型',
			code: 'OS CPU',
			value: deviceOS.OsCPU,
		},
		{
			name: '系统默认语言',
			code: 'OS SystemLanguage',
			value: deviceOS.SystemLanguage,
		},
		{
			name: '系统支持语言',
			code: 'OS UserLanguage',
			value: deviceOS.UserLanguage,
		},
		{
			name: '系统时间UTC',
			code: 'OS Timezone SystemTime',
			value: deviceOS.Timezone.systemTime,
		},
		{
			name: '系统时差',
			code: 'OS Timezone OffsetTime',
			value: deviceOS.Timezone.offsetTime,
		},
		{
			name: '系统当地时间',
			code: 'OS Timezone LocaleTime',
			value: deviceOS.Timezone.localeTime,
		},
		{
			name: '系统媒体信息',
			code: 'OS MediaCapabilities',
			value: deviceOS.MediaCapabilities.Obj,
		},
		{
			name: '是否链接到了因特网',
			code: 'Network OnLine',
			value: deviceOS.OnLine,
		},
		{
			name: '网络连接信息',
			code: 'Network Connection',
			value: deviceOS.ConnectionInfo.Obj,
		},
		{
			name: '地理位置信息',
			code: 'Network Geolocation',
			value: deviceOS.Geolocation.Obj,
		},

	]
};