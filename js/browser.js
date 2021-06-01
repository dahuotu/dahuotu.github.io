var dahuotuUa = {
	init: function() {
		console.log('init 3');
	},
	//ua标题
	uaTitle: 'User Agent',
	//ua说明
	uaRemark: '浏览器用户代理信息',
	//浏览器的userAgent信息
	uaInfo: navigator.userAgent,
	//浏览器名称
	appName: navigator.appName,
	//浏览器的内部名称
	appCode: navigator.appCodeName,
	//浏览器版本号
	appVersion: navigator.appVersion,
	//浏览器所在的系统平台类型
	appPlatform: navigator.platform,
	//浏览器的产品名称
	appProductName: navigator.product,
	//浏览器的语言
	appLanguage: (navigator.browserLanguage || navigator.language).toLowerCase(),
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
	//是否支持webVR技术
	isWebVR: navigator.activeVRDisplays == undefined,
};
var dahuotuTs = {
	init: function() {
		console.log('init 48');
	},
	//标题
	tsTitle: 'en',
	//说明
	tsRemark: '说明',
}