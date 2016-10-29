/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 11:18:34
 * @version $Id$
 */

window.onload = function() {
	/*
	// alert(Node);
	//IE不支持
	// alert(Node.ELEMENT_NODE);
	// alert(Node.TEXT_NODE);

	// alert(document.nodeType);
	// alert(document.nodeValue);

	// alert(document.firstChild.nodeType);//非 IE 为 10，IE 为 8
	// alert(document.firstChild.nodeName);

	// alert(document.childNodes[1].nodeName);

	// alert(document.documentElement);
	// alert(document.body.nodeName);

	document.title;//获取和设置 <title>标签的值
	document.URL;//获取 URL 路径
	document.domain;//获取域名，服务器端
	document.referrer;//获取上一个 URL，服务器端

	document.anchors;//获取文档中带name属性的<a>元素集合
	document.links;//获取文档中带 href 属性的<a>元素集合
	document.forms;//获取文档中 <form>元素集合
	document.images;//获取文档中 <img>元素集合
	*/
	
	var box = document.getElementById('box');
	// var text1 = document.createTextNode('Mr.');
	// var text2 = document.createTextNode('Lee');

	// box.appendChild(text1);
	// box.appendChild(text2);

	// 合并同一级别的文本节点
	// box.normalize();
	// alert(box.childNodes.length);

	//分离一个节点
	// box.childNodes[0].splitText(4);

	// alert(box.childNodes[0].nodeValue);

	// 删除
	// box.childNodes[0].deleteData(0,4);

	// 插入
	// box.childNodes[0].insertData(0,'hello');

	// 替换
	// box.childNodes[0].replaceData(0,4,'hao');
	// alert(box.childNodes[0].nodeValue);

	// alert(box.childNodes[0].substringData(0,2)); 

	// alert(box.childNodes[0].nodeType);
	// alert(box.childNodes[0].nodeValue);


	// document.getElementById('box').scrollIntoView(true);

	// 忽略空白节点，非标准,测试不太好用
	// alert(box.children[0]);

	// var text = box.firstChild;
	// alert(box.contains(text));//判断box是否为text的父节点

	// PS:早期的 Firefox 不支持这个方法，新版的支持了，其他浏览器也都支持，
	// Safari2.x 浏览器支持的有问题，无法使用。所以，必须做兼容。 


	


	// innerHTML 属性
	// 这个属性之前就已经研究过，不拒绝 HTML。
	//获取文本(不过滤 HTML) document.getElementById('box') .innerHTML = '<b>123</b>'; //可解析 HTML
 	// document.getElementById('box').innerHTML; 

	// 虽然 innerHTML 可以插入 HTML，但本身还是有一定的限制，
	// 也就是所谓的作用域元 素，离开这个作用域就无效了。
	// box.innerHTML = "<script>alert('Lee');</script>"; //<script>元素不能被执行
	// box.innerHTML = "<style>background:red;</style>"; //<style>元素不能被执行

	// innerText outerText outerHTML了解即可，不建议用

	// 关于最常用的 innerHTML 属性和节点操作方法的比较，
	// 在插入大量 HTML 标记时 使用 innerHTML 的效率明显要高很多。
	// 因为在设置 innerHTML 时，会创建一个 HTML 解 析器。这个解析器是浏览器级别的 (C++编写)，
	// 因此执行 JavaScript 会快的多。但，创建和 销毁 HTML 解析器也会带来性能损失。

	// 最好控制在最合理的范围内，如下:
	for (var i = 0; i < 10; i ++) { 
		ul.innerHTML = '<li>item</li>';
	}
	
	//改
	for (var i = 0; i < 10; i ++) {
		a = '<li>item</li>';
	}
	ul.innerHTML = a;
}

//传递参考节点(父节点)，和其他节点(子节点) 
//判断支持 contains，并且非 Safari 浏览器 
function contains(refNode, otherNode) {
	if (typeof refNode.contains != 'undefined' &&
		!(BrowserDetect.browser == 'Safari' && BrowserDetect.version < 3)) { 
	return refNode.contains(otherNode);
//判断支持 compareDocumentPosition 的浏览器，大于 16 就是包含 
	} else if (typeof refNode.compareDocumentPosition == 'function') {

	return !!(refNode.compareDocumentPosition(otherNode) > 16); 
	} else {

	}
//更低的浏览器兼容，通过递归一个个获取他的父节点是否存在 var node = otherNode.parentNode;
	do {
		if (node === refNode) {
			return true;
		} else {
			node = node.parentNode;
		}	
	} while (node != null); 

	return false;
}

function getInnerText(element) {
	return (typeof element.textContent == 'string') ? element.textContent : element.innerText;
}

function setInnerText(element, text) {
	if (typeof element.textContent == 'string') {
  		element.textContent = text; 
  	} else {
		element.innerText = text; 
	}
}
