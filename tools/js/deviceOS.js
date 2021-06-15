var deviceOS = {
	Init: function() {
		console.log('init Network');
	},
	//标题
	Title: 'DeviceOS',
	//说明
	Remark: '设备、系统、网络等信息',
	//CPU核心数
	Concurrency: navigator.hardwareConcurrency || null,
	//CPU等级
	CPUClass: navigator.cpuClass || null,
	//系统内存
	Memory: navigator.deviceMemory || null,
	//键盘
	Keyboard: navigator.keyboard || null,
	//支持的最大同时触摸的点数
	MaxTouchPoints: navigator.maxTouchPoints || null,
	//当前所使用的操作系统类型
	OsCPU: navigator.oscpu || null,
	//系统默认语言
	SystemLanguage: navigator.systemLanguage || navigator.language,
	//系统自然语言
	UserLanguage: navigator.userLanguage || navigator.languages,
	//时区
	Timezone: {
		//系统时间
		systemTime: new Date().toUTCString(),
		//时差
		offsetTime: new Date().getTimezoneOffset(),
		//当地时间
		localeTime: new Date().toLocaleString(),
	},
	//媒体相关
	MediaCapabilities: {
		Obj: navigator.mediaCapabilities || null,
	},
	//屏幕分辨率
	ScreenResolution: {
		width: screen.width,
		height: screen.height,
		colorDepth: screen.colorDepth,
		deviceXDPI: screen.deviceXDPI,
	},
	//是否链接到了因特网
	OnLine: navigator.onLine,
	//网络连接信息
	ConnectionInfo: {
		Obj: navigator.connection || null,
	},
	//地理位置
	Geolocation: {
		Obj: navigator.geolocation || null,
	},
}