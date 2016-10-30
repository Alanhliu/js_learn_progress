/**
 * Created by hliu on 2016/10/30.
 */

window.onload = function () {
    //var pox = document.getElementById('pox');
    //获取行内style
    //alert(pox.style.width);
    //alert(pox.style.height);

    var box = document.getElementById('box');
    //获取计算后的style,link链接的style
    //var style = window.getComputedStyle?window.getComputedStyle(box,null) :null ||box.currentStyle;
    //alert(style.width);
    //alert(style.height);

    //使用CSSStyleSheet对象中的cssRules获取
    //var box = document.getElementById('box');
    //var sheet = document.styleSheets[0];
    //var rule = (sheet.cssRules || sheet.rules)[0];
    //alert(rule.style.width);
    //alert(rule.style.height);

    //没有单位,但默认是px
    //alert(box.clientWidth);
    //alert(box.clientHeight);

    //alert(box.scrollWidth);
    //alert(box.scrollHeight);
    //
    //alert(box.clientTop);
    //alert(box.clientLeft);
    //
    //alert(box.offsetTop);
    //alert(box.offsetLeft);

    //获取元素
    alert(box.getBoundingClientRect().top);//元素上边距离页面上边的距离
    alert(box.getBoundingClientRect().right);//元素右边距离页面左边的距离
    alert(box.getBoundingClientRect().bottom); //元素下边距离页面上边的距离
    alert(box.getBoundingClientRect().left);//元素左边距离页面左边的距离

    //PS:IE、Firefox3+、Opera9.5、Chrome、Safari 支持，在 IE 中，默认坐标从(2,2)开始计算，
    //导致最终距离比其他浏览器多出两个像素，我们需要做个兼容。
    //document.documentElement.clientTop; //非 IE 为 0，IE 为 2
    //document.documentElement.clientLeft ; //非 IE 为 0，IE 为 2
}

function getRect(element) {
    var rect = element.getBoundingClientRect();
    var top = document.documentElement.clientTop;
    var left = document.documentElement.clientLeft;
    return {
        top: rect.top - top,
        bottom: rect.bottom - top, left: rect.left - left,
        right: rect.right - left
    }
}