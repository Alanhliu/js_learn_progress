/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-28 19:33:12
 * @version $Id$
 */

/*
// 主要注意兼容性的问题
// 节点种类:元素节点1、属性节点2、文本节点3。

// 1.getElementById() 方法
// getElementById()方法，接受一个参数:获取元素的 ID。如果找到相应的元素则返回该 元素的 HTMLDivElement 对象，如果不存在，则返回 null。
var box = document.getElementById('box'); //获取 id 为 box 的元素节点
alert(box);

// 上面的例子，默认情况返回 null，这无关是否存在 id="box"的标签，而是执行顺序问题。
// 1.把 script 调用标签移到 html 末尾即可;
// 2.使用 onload 事件来处理 JS，等 待 html 加载完毕再加载 onload 事件里的 JS。
window.onload = function () { 
	//预加载 html 后执行
	var box = document.getElementById('box');
};

// id 表示一个元素节点的唯一性，不能同时给两个或以上的元素节点创建同一个命名的id
// 某些低版本的浏览器会无法识别 getElementById()方法，
// 比如 IE5.0-，这时需要做 一些判断，可以结合上章的浏览器检测来操作。

//判断是否支持 getElementById 
if (document.getElementById) { 
	alert('当前浏览器支持 getElementById');
}
*/

//预加载 html 后执行
window.onload = function () { 
	// 1.getElementById() 方法
	var box = document.getElementById('box');
	/*
	// alert(box.tagName);
	// alert(box.innerHTML);

	// alert(box.id);
	// alert(box.title);
	// alert(box.style);
	// alert(box.style.color);

	// alert(box.class)//保留字不能用,所以用className
	// alert(box.className);
	// box.innerHTML = '玩转<strong>js</strong>';

	// 2.getElementsByTagName()方法
	// var li = document.getElementsByTagName('li');
	// alert(li);//返回一个数组集合
	// alert(li.length);
	// alert(li[0]);
	// alert(li.item(0));
	// alert(li[0].tagName);
	// alert(li[0].innerHTML);

	// var body = document.getElementsByTagName('body')[0];
	// alert(body);

	// var all = document.getElementsByTagName('*');
	// alert(all);
	// alert(all.length);
	// alert(all[0].tagName);

	// 3.getElementsByName() 方法
	// var box = document.getElementsByName('test');
	// alert(box);
	// alert(box[0]);

	// name不是div中的属性,name一般在表单里，比如input
	// 对于并不是 HTML 合法的属性，那么在 JS 获取的兼容性上也会存在差异，
	// IE浏览器支持本身合法的 name 属性，而不合法的就会出现不兼容的问题。



	// var box = document.getElementById('box');
	//非ie返回字符串，ie返回对象，不兼容
	// alert(box.getAttribute('style'));

	// alert(box.className);//都兼容
	// alert(box.getAttribute('class'));//ie无法获取
	// alert(box.getAttribute('className'));//ie可以获取，非ie无法获取

// HTML 通用属性 style 和 onclick，IE7 更低的版本 style 返回一个对象，
// onclick 返回 一个函数式。虽然 IE8 已经修复这个 bug，
// 但为了更好的兼容，开发人员只有尽可能避免使 用 getAttribute()访问 HTML 属性了，
// 或者碰到特殊的属性获取做特殊的兼容处理。
	
	// box.setAttribute('title','标题');//创建一个属性和属性值
	// box.setAttribute('align','center');

	// 在 IE7 及更低的版本中，使用 setAttribute()方法设置 class 和 style 属性是没有效果 的，
	// 虽然 IE8 解决了这个 bug，但还是不建议使用。
	// box.setAttribute('style','color:green');

	// box.removeAttribute('style');


	// var box = document.getElementById('box');

	//node只能获取当前节点的东西
	// alert(box.nodeName);
	// alert(box.nodeType);

	//node本身把节点指针放在元素<div></div>上，也就是说本身是没有value的
	// alert(box.nodeValue);
	// alert(box.innerHTML);
	//文本节点不等于文本内容

	//nodelist集合，返回当前元素所有子节点
	// alert(box.childNodes);
	// alert(box.childNodes.length);

	//3个子节点为 哈哈<em>123</em>呵呵
	//第一个 哈哈
	//第二个 <em>123</em>
	//第三个 呵呵
	// alert(box.childNodes[0]);
	// alert(box.childNodes[0].nodeType);//3，表示文本节点
	// alert(box.childNodes[0].nodeValue);//获取文本节点的文本内容
	// alert(box.childNodes[0].innerHTML);//文本节点不可能有内容的
	// alert(box.childNodes[0].nodeName);//#text,文本节点没有标签名

	// alert(box.childNodes[1]);
	// alert(box.childNodes[2]);

	// for(var i=0;i<box.childNodes.length;i++) {
	// 	if (box.childNodes[i].nodeType ===1 ) {
	// 		alert('元素节点:'+box.childNodes[i].nodeName);
	// 	} else if (box.childNodes[i].nodeType === 3) {
	// 		alert('文本节点:'+box.childNodes[i].nodeValue);
	// 	}
	// }

	// var pox = document.getElementById('pox');
	//firefox里好用，chrome里不好用,
	// pox.innerHTML = '测试<strong>Pox</strong>';

	// pox.nodeValue = '测试Pox';//没出错，但没赋值上，nodeValue必须在当前节点上操作
	// pox.childNodes[0].nodeValue = '测试Pox';
	// pox.childNodes[0].nodeValue = '测试<strong>Pox</strong>';

	// alert(box.firstChild.nodeValue);
	// alert(box.lastChild.nodeValue);
	// alert(box.ownerDocument);
	// alert(document);

	// alert(box.parentNode);
	//nextSibling得到同级的下一个节点
	// alert(box.firstChild.nodeValue);
	// alert(box.firstChild.nextSibling);
	// alert(box.firstChild.nextSibling.nodeName);
	// alert(box.lastChild.nodeValue);
	// alert(box.lastChild.previousSibling.nodeName);


	//属性节点
	// alert(box.attributes);
	// alert(box.attributes.length);
	// alert(box.attributes[0]);
	// alert(box.attributes[0].nodeType);
	// alert(box.attributes[0].nodeName);
	// alert(box.attributes[0].nodeValue);
	// alert(box.attributes['title'].nodeValue);

	//空白文本节点
	// var mox = document.getElementById('mox');
	// alert(mox.childNodes.length);
	// alert(filterWhiteNode(mox.childNodes).length);
	// alert(removeWhiteNode(mox.childNodes).length);

	// alert(mox.firstChild.nodeValue);

	// alert(getWhileNode(mox).firstChild.nodeName);
	// alert(getWhileNode(mox).firstChild.nodeValue);


	// 创建节点
	// document.write('测试write');
	// var p = document.createElement('p');
	// box.appendChild(p);//添加到子节点的末尾处

	// var text = document.createTextNode('测试123');
	// p.appendChild(text);

	// document.getElementsByTagName('body')[0].appendChild(p);

	//在box前面插入一个节点
	// box.parentNode.insertBefore(p,box);
	//在box后面插入一个节点
	// insertAfter(p,box);


	var body = document.getElementsByTagName('body')[0];

	//兼容ie7以下的版本
	if (BrowserDetect.browser == 'Internet Explorer'&&
		BrowserDetect.version <= 7) {
		//反斜杠转义
		var input = document.createElement("<input type=\"radio\" name=\"sex\">");
	} else {
		var input = document.createElement('input');
		input.setAttribute('type','radio');
		input.setAttribute('name','sex');
	}		
	body.appendChild(input);


	//替换节点
	var span = document.getElementsByTagName('span')[0];
	var em = document.createElement('em');
	span.parentNode.replaceChild(em,span);
	*/


	var mox = document.getElementById('mox');

	//true把标签内的文本也clone,false只克隆标签
	// var clone = mox.firstChild.cloneNode(true);
	var clone = getWhileNode(mox).firstChild.cloneNode(true);
	mox.appendChild(clone);

	//删除ul第一个li
	mox.removeChild(getWhileNode(mox).firstChild);

	//删除整个ul
	box.parentNode.removeChild(mox);
};

//没提供insertAfter,得自己写...
function insertAfter(newElement,targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild === targetElement) {
		parent.appendChild(newElement,targetElement);
	} else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

//主要是浏览器兼容问题
//返回去掉空白字符的节点
function getWhileNode(node) {
	for (var i=0; i<node.childNodes.length;i++) {
		if (node.childNodes[i].nodeType ===3 && /^\s+$/.test(node.childNodes[i].nodeValue)) {
			node.childNodes[i].parentNode.removeChild(node.childNodes[i]);
		} 
	}
	return node;
}

//忽略空白字符
function filterWhiteNode(nodes) {
	var ret = [];
	for (var i=0; i<nodes.length;i++) {
		if (nodes[i].nodeType ===3 && /^\s+$/.test(nodes[i].nodeValue)) {
			continue;
		} else {
			ret.push(nodes[i]);
		}
	}
	return ret;
}

//移除空白字符
function removeWhiteNode(nodes) {
	for (var i=0; i<nodes.length;i++) {
		if (nodes[i].nodeType ===3 && /^\s+$/.test(nodes[i].nodeValue)) {
			nodes[i].parentNode.removeChild(nodes[i]);
		} 
	}
	return nodes;
}