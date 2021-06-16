var DeviceOS = {
	Code: "DeviceOS",
	Desc: pintuer.DeviceOS.Remark,
	List: [{
			name: '操作系统类型',
			code: 'OsCPU',
			value: pintuer.DeviceOS.OsCPU,
		},
		{
			name: 'CPU核心数',
			code: 'Concurrency',
			value: pintuer.DeviceOS.Concurrency,
		},
		{
			name: 'CPU等级',
			code: 'CPUClass',
			value: pintuer.DeviceOS.CPUClass,
		},
		{
			name: '系统内存',
			code: 'Memory',
			value: pintuer.DeviceOS.Memory,
		},
		{
			name: '键盘',
			code: 'Keyboard',
			value: pintuer.DeviceOS.Keyboard,
		},
		{
			name: '是否为移动终端',
			code: 'IsMobile',
			value: pintuer.DeviceOS.IsMobile,
		},
		{
			name: '是否为苹果系统',
			code: 'IsIos',
			value: pintuer.DeviceOS.IsIos,
		},
		{
			name: '是否为安卓系统',
			code: 'IsAndroid',
			value: pintuer.DeviceOS.IsAndroid,
		},
		{
			name: '是否为iPhone',
			code: 'IsIPhone',
			value: pintuer.DeviceOS.IsIPhone,
		},
		{
			name: '是否为iPad',
			code: 'IsIPad',
			value: pintuer.DeviceOS.IsIPad,
		},
	]
};

var Browser = {
	Code: "Browser",
	Desc: pintuer.Browser.Remark,
	List: [{
			name: '浏览器userAgent信息',
			code: 'UserAgent',
			value: pintuer.Browser.UserAgent,
		},
		{
			name: '浏览器名称',
			code: 'Name',
			value: pintuer.Browser.Name,
		},
		{
			name: '浏览器内部名称',
			code: 'CodeName',
			value: pintuer.Browser.CodeName,
		},
		{
			name: '浏览器版本号',
			code: 'Version',
			value: pintuer.Browser.Version,
		},
		{
			name: '浏览器次要版本',
			code: 'MinorVersion',
			value: pintuer.Browser.MinorVersion,
		},
		{
			name: '浏览器系统平台类型',
			code: 'Platform',
			value: pintuer.Browser.Platform,
		},
		{
			name: '浏览器产品名称',
			code: 'Product',
			value: pintuer.Browser.Product,
		},
		{
			name: '浏览器内部版本号',
			code: 'ProductSub',
			value: pintuer.Browser.ProductSub,
		},
		{
			name: '浏览器使用的语言',
			code: 'Language',
			value: pintuer.Browser.Language,
		},
		{
			name: '浏览器的品牌',
			code: 'Vendor',
			value: pintuer.Browser.Vendor,
		},
		{
			name: '浏览器供应商次要信息',
			code: 'VendorSub',
			value: pintuer.Browser.VendorSub,
		},
		{
			name: '浏览器编译码',
			code: 'BuildID',
			value: pintuer.Browser.BuildID,
		},
		{
			name: '浏览器渲染模式',
			code: 'CompatMode',
			value: pintuer.Browser.CompatMode,
		},
		{
			name: '浏览器当前打开文档默认字体大小',
			code: 'DefaultSize',
			value: pintuer.Browser.DefaultSize(),
		},
		{
			name: '浏览器是否为IE内核',
			code: 'IsIE',
			value: pintuer.Browser.IsIE,
		},
		{
			name: '浏览器是否为Opera内核',
			code: 'IsOpera',
			value: pintuer.Browser.IsOpera,
		},
		{
			name: '浏览器是否为谷歌内核',
			code: 'IsChrome',
			value: pintuer.Browser.IsChrome,
		},
		{
			name: '浏览器是否为火狐内核',
			code: 'IsFirefox',
			value: pintuer.Browser.IsFirefox,
		},
		{
			name: '浏览器是否为Safari内核',
			code: 'IsSafari',
			value: pintuer.Browser.IsSafari,
		},
		{
			name: '是否支持webVR技术',
			code: 'WebVREnabled',
			value: pintuer.Browser.WebVREnabled,
		},
		{
			name: '是否启用Cookie',
			code: 'CookieEnabled',
			value: pintuer.Browser.CookieEnabled,
		},
		{
			name: '是否启用sessionStorage',
			code: 'SessionStorageEnabled',
			value: pintuer.Browser.SessionStorageEnabled(),
		},
		{
			name: '是否启用localStorage',
			code: 'LocalStorageEnabled',
			value: pintuer.Browser.LocalStorageEnabled(),
		},
		{
			name: '是否支持IndexedDB数据存储',
			code: 'IndexedDBEnabled',
			value: pintuer.Browser.IndexedDBEnabled(),
		},
		{
			name: '是否启用Java',
			code: 'JavaEnabled',
			value: pintuer.Browser.JavaEnabled,
		},
		{
			name: '否启用数据污点功能',
			code: 'TaintEnabled',
			value: pintuer.Browser.TaintEnabled(),
		},
		{
			name: '是否启用禁止跟踪',
			code: 'DoNotTrack',
			value: pintuer.Browser.DoNotTrack,
		},
	]
};

var Storage = {
	Code: "Storage",
	Desc: pintuer.Storage.Remark,
	List: [{
			name: 'LocalStorage存储',
			code: 'LocalStorage',
			value: pintuer.Storage.LocalStorage,
		},
		{
			name: 'SessionStorage存储',
			code: 'SessionStorage',
			value: pintuer.Storage.SessionStorage,
		},
		{
			name: 'WebSQL IndexedDB存储',
			code: 'IndexedDB',
			value: pintuer.Storage.IndexedDB,
		},
	]
};

var MimeTypes = {
	Code: "MimeTypes",
	Desc: pintuer.MimeTypes.Remark,
	List: [{
			name: 'MIME数量',
			code: 'Length',
			value: pintuer.MimeTypes.Length,
		},
		{
			name: 'MIME列表',
			code: 'List',
			value: pintuer.MimeTypes.List,
		},
	]
};

var Font = {
	Code: "Font",
	Desc: pintuer.Font.Remark,
	List: [{
		name: '字体列表',
		code: 'List',
		value: pintuer.Font.List,
	}]
};

var Plugins = {
	Code: "Plugins",
	Desc: pintuer.Plugins.Remark,
	List: [{
			name: '插件数量',
			code: 'Length',
			value: pintuer.Plugins.Length,
		},
		{
			name: '插件列表',
			code: 'List',
			value: pintuer.Plugins.List,
		},
	]
};

var Language = {
	Code: "Language",
	Desc: pintuer.Language.Remark,
	List: [{
			name: '系统默认语言',
			code: 'SystemLanguage',
			value: pintuer.Language.SystemLanguage,
		},
		{
			name: '系统自然语言设置',
			code: 'UserLanguage',
			value: pintuer.Language.UserLanguage,
		},
	]
};

var Timezone = {
	Code: "Timezone",
	Desc: pintuer.Timezone.Remark,
	List: [{
			name: '系统时间',
			code: 'SystemTime',
			value: pintuer.Timezone.SystemTime,
		},
		{
			name: '时差',
			code: 'OffsetTime',
			value: pintuer.Timezone.OffsetTime,
		},
		{
			name: '当地时间',
			code: 'LocaleTime',
			value: pintuer.Timezone.LocaleTime,
		},
	]
};

var Media = {
	Code: "Media",
	Desc: pintuer.Media.Remark,
	List: [{
		name: '对象',
		code: 'Obj',
		value: pintuer.Media.Obj,
	}]
};

var Screen = {
	Code: "Screen",
	Desc: pintuer.Screen.Remark,
	List: [{
			name: '屏幕宽度',
			code: 'Width',
			value: pintuer.Screen.Width,
		},
		{
			name: '屏幕高度',
			code: 'Height',
			value: pintuer.Screen.Height,
		},
		{
			name: '屏幕色彩',
			code: 'ColorDepth',
			value: pintuer.Screen.ColorDepth,
		},
		{
			name: '屏幕像素点',
			code: 'DeviceXDPI',
			value: pintuer.Screen.DeviceXDPI,
		},
		{
			name: '屏幕支持的最大同时触摸的点数',
			code: 'MaxTouchPoints',
			value: pintuer.Screen.MaxTouchPoints,
		},
	]
};

var Network = {
	Code: "Network",
	Desc: pintuer.Network.Remark,
	List: [{
			name: '对象',
			code: 'Obj',
			value: pintuer.Network.Obj,
		},
		{
			name: '是否链接到了因特网',
			code: 'OnLine',
			value: pintuer.Network.OnLine,
		},
	]
};

var Geolocation = {
	Code: "Geolocation",
	Desc: pintuer.Geolocation.Remark,
	List: [{
		name: '对象',
		code: 'Obj',
		value: pintuer.Geolocation.Obj,
	}]
};