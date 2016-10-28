/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-28 09:45:01
 * @version $Id$
 */

/*
一.navigator对象

//1.浏览器及版本号
//不同的浏览器支持的功能 、属性和方法各有不同 。比如 IE 和 Firefox 显示的页面可能就 会有所略微不同。
alert(navigator.appName);
alert(navigator.appVersion);
alert(navigator.userAgent);
alert(navigator.platform);

//2.浏览器嗅探器
// browserdetect.js
// alert(BrowserDetect.browser);
// alert(BrowserDetect.version);
// alert(BrowserDetect.OS);

//3.检测插件
//列出所有插件
for (var i = 0;i<navigator.plugins.length;i++) {
	document.write(navigator.plugins[i].name+'<br/>');
}

//检测是否安装了某插件
function hasPlugin(name) {
	var name = name.toLowerCase();
	for (var i = 0; i < navigator.plugins.length; i ++) {
		if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1) {
		 return true;
		} 
	}
	return false; 
}
alert(hasPlugin('Flash'));//检测 Flash 是否存在
alert(hasPlugin('java')); //检测 Java 是否存在


//4.ActiveX
//IE 浏览器没有插件,但提供了 ActiveX 控件。ActiveX 控件一种在 Web页面中嵌入对象 或组件的方法。
//由于在 JS 中,我们无法把所有已安装的 ActiveX 控件遍历出来,但我们还是可以去验 证是否安装了此控件。
//检测 IE 中的控件

function hasIEPlugin(name) { 
	try {
		new ActiveXObject(name);
		return true; 
	} catch (e) {
		return false; 
	}
}
//检测 Flash 
alert(hasIEPlugin('ShockwaveFlash.ShockwaveFlash'));


//ShockwaveFlash.ShockwaveFlash 是 IE 中代表 FLASH 的标识符,你需要检查哪种 控件,必须先获取它的标识符。
//跨浏览器检测是否支持 Flash function hasFlash() {
var result = hasPlugin('Flash'); 

if (!result) {
	result = hasIEPlugin('ShockwaveFlash.ShockwaveFlash'); }
	return result;
}
//检测 Flash
alert(hasFlash());


// 5.MIME 类型
// MIME 是指多用途因特网邮件扩展 。它是通过因特网发送邮件消息的标准格式 。现在也 被用于在因特网中交换各种类型的文件。
// PS:mimeType[]数组在 IE 中不产生输出。

// type 			MIME 类型名
// description 		MIME 类型的描述信息
// enabledPlugin 	指定 MIME 类型配置好的 plugin 对象引用
// suffixes			MIME 类型所有可能的文件扩展名

//遍历非 IE 下所有 MIME 类型信息
for (var i = 0; i < navigator.mimeTypes.length; i++) {

	if (navigator.mimeTypes[i].enabledPlugin != null) {
		document.write('<dl>');
		document.write('<dd>类型名称:' + navigator.mimeTypes[i].type+ '</dd>'); 
		document.write('<dd>类型引用:' + navigator.mimeTypes[i].enabledPlugin.name +'</dd>');
		document.write('<dd>类型描述:' + navigator.mimeTypes[i].description + '</dd>');
		document.write('<dd>类型后缀:' + navigator.mimeTypes[i].suffixes+ '</dd>');
		document.write('</dl>');
	}
}
*/

//二.客户端检测
// 客户端检测一共分为三种 ,分别为:能力检测、怪癖检测和用户代理检测 ,通过这三种
// 检测方案,我们可以充分的了解当前浏览器所处系统、所支持的语法、所具有的特殊性能 。
// 1.能力检测
// 能力检测又称作为特性检测 ,检测的目标不是识别特定的浏览器 ,而是识别浏览器的能 力。能力检测不必估计特定的浏览器 ,只需要确定当前的浏览器是否支持特定的能力 ,就可 以给出可行的解决方案。
//BOM 章节的一段程序

var width = window.innerWidth; //如果是非 IE 浏览器
if (typeof width != 'number') { //如果是 IE,就使用 document 
	if (document.compatMode == 'CSS1Compat') {
		width = document.documentElement.clientWidth; 
	} else {
		width = document.body.clientWidth; //非标准模式使用 body 
	}
}


// 2.怪癖检测(bug 检测)
// 与能力检测类似,怪癖检测的目标是识别浏览器的特殊行为 。但与能力检测确认浏览器 支持什么能力不同,怪癖检测是想要知道浏览器存在什么缺陷 (bug)。
// bug 一般属于个别浏览器独有,在大多数新版本的浏览器被修复。在后续的开发过程中, 如果遇到浏览器 bug 我们再详细探讨。
var box = {
	toString : function () {}//创建一个 toString(),和原型中重名了
};
for (var o in box) {
	alert(o);//IE 浏览器的一个 bug,不识别了
}


// 3.用户代理检测
// 用户代理检测通过检测用户代理字符串来确定实际使用的浏览器 。在每一次 HTTP 请求 过程中,用户代理字符串是作为响应首部发送的,而且该字符串可以通过 JavaScript 的 navigator.userAgent 属性访问。
// 用户代理代理检测 ,主要通过 navigator.userAgent 来获取用户代理字符串的 ,通过这组 字符串,我们来获取当前浏览器的版本号、浏览器名称、系统名称。
// PS:在服务器端,通过检测用户代理字符串确定用户使用的浏览器是一种比较广为接 受的做法。但在客户端,这种测试被当作是一种万不得已的做法 ,且饱受争议,其优先级排 在能力检测或怪癖检测之后。饱受争议的原因,是因为它具有一定的欺骗性。
document.write(navigator.userAgent); //得到用户代理字符串

