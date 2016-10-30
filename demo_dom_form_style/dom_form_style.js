/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 17:45:26
 * @version $Id$
 */

//dom操作表格
/*
	//dom创建表格，很麻烦
	var table = document.createElement('table');
 	table.border = 1;
 	table.width = 300;//table.setAttribute('width',300);

 	var caption = document.createElement('caption');
 	table.appendChild(caption);
 	// caption.innerHTML = '人员表';
 	var captionText = document.createTextNode('人员表');
 	caption.appendChild(captionText);

 	var thead = document.createElement('thead');
 	table.appendChild(thead);

	var tr = document.createElement('tr');
	thead.appendChild(tr);

	var th1 = document.createElement('th');
	var th2 = document.createElement('th');
	var th3 = document.createElement('th');

	tr.appendChild(th1);
	th1.appendChild(document.createTextNode('姓名'));
	tr.appendChild(th2);
	th2.appendChild(document.createTextNode('年龄'));

 	document.body.appendChild(table);


 	//dom获取table内容也很烦，省略了..
 	//用html dom
 	var table = document.getElementsByTagName('table')[0];
 	// table.caption.innerHTML = '出师表';
 	// alert(table.tBodies[0]);

 	// alert(table.rows.length);
 	// alert(table.tBodies[0].rows.length);
 	// alert(table.tBodies[0].rows[0].cells.length);
 	// alert(table.tBodies[0].rows[1].cells[1].innerHTML);
 	// table.deleteCaption();
 	// table.deleteTHead();
 	// table.tBodies[0].deleteRow(0);
 	// table.tBodies[0].rows[0].deleteCell(1);

 	var table = document.createElement('table');
 	table.border = 1;
	table.width = 300;
	table.createCaption().innerHTML = '人员表';
	//table.createTHead();
	//table.tHead.insertRow(0);

	var thead = table.createTHead();
	var tr = thead.insertRow(0);

	tr.insertCell(0).innerHTML = '数据1';
	tr.insertCell(1).innerHTML = '数据2';
	tr.insertCell(2).innerHTML = '数据3';


	// var td = tr.insertCell(0);
	// td.appendChild(document.createTextNode('数据'));
	// var td2 = tr.insertCell(1);
	// td2.appendChild(document.createTextNode('数据 2'));

	document.body.appendChild(table);
	// 在创建表格的时候<table>、<tbody>、<th>没有特定的方法，需要使用 document 来创建。
	// 也可以模拟已有的方法编写特定的函数即可，例如: insertTH()之类的。
*/


 window.onload = function() {
	//dom操作css
	/*
	*/
	// 行内，内联，链接
	var box = document.getElementById('box');

	// box.style

	// var style = window.getComputedStyle(box,null);
	// alert(style);
	// alert(style.fontSize);//计算后的样式，或默认样式

	//class调用，是可以叠加的
	//叠加意思就是，如果样式相同，那么后面一个会覆盖前一个，如果不同就进行叠加

	// addClass(box,'ccc');//追加class
	// box.className = 'ccc';//替换class
	// removeClass(box,'aaa');//删除class


	//获取样式表
	var link = document.getElementsByTagName('link')[0];	
	// alert(link);

	var sheet = document.styleSheets[0]
	// alert(sheet);
	// alert(sheet.disabled = true);//引用样式
	// alert(sheet.href);

     //chrome得运行在服务器下,才能显示cssRules
	 alert(sheet.cssRules);
	// alert(sheet.cssRules[0].cssText);
	// alert(sheet.cssRules[0].selectorText);

	// 通过上面两个例子可以知道对于<link>元素引用的外联样式表，
	// chrome不知持通过cssRules属性获得其中的样式规则，而Firefox和IE可以。
	// 对于通过<style>元素添加的样式信息，三种浏览器都可以通过cssRules属性获得其中的样式规则。
}

//判断一个class是否存在
function hasClass(element, className) {
	return element.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)')); 
}

//添加一个 class，如果不存在的话 
function addClass(element, className) {
	if (!hasClass(element, className)) {
 		element.className += " "+className;
	} 
}

//删除一个 class，如果存在的话
function removeClass(element, className) {
	if (hasClass(element, className)) {
		element.className = element.className.replace(
			new RegExp('(\\s|^)'+className+'(\\s|$)'),' ');
	}
}
