/**
 * Created by hliu on 2016/10/30.
 */

window.onload = function () {

    alert(typeof BrowserDetect);
};

//这里注意执行顺序的问题
var flag = true;

if (flag) {
    //动态加载js代码
    loadScript();
    //动态加载js文件
    loadScriptFile('BrowserDetect.js');

    //动态加载css代码
    loadCss();
    //动态加载css文件
    loadCSSFile('dynamic_loadscript.css');
}

function insertRule(sheet, selectorText, cssText, position) {
    if (sheet.insertRule) {//如果是非 IE
        sheet.insertRule(selectorText + "{" + cssText + "}", position);

    } else if (sheet.addRule) { //如果是 IE
        sheet.addRule(selectorText, cssText, position);
    }
}

function loadCss() {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    insertRule(document.styleSheets[0], '#box', 'color:yellow', 0);
}

function loadCSSFile(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.getElementsByTagName('head')[0].appendChild(link);
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = "alert('lee')";
    document.getElementsByTagName('head')[0].appendChild(script);
}

function loadScriptFile(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    //document.head.appendChild(script); // document.head 表示<head>
    document.getElementsByTagName('head')[0].appendChild(script);
}