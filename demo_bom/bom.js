/**
 *  
 * @authors Your Name (you@example.org)
 * @date    2016-10-26 20:38:19
 * @version $Id$
 */

/*
if (confirm("please...")) {

} else {

}

var box = prompt('please input a value',0);
alert(box);

print();
find();

//没啥用,就IE有效
defaultStatus = 'lee';
status = 'xxx';

//_blank,_parent
// open('http://www.baidu.com');
// open('http://www.baidu.com','baidu');
// open('http://www.baidu.com','_parent');

//safari和chrome两者都支持
//火狐不支持
alert(screenLeft);
alert(screenTop);

//IE不支持
alert(screenX);
alert(screenY);

//兼容浏览器
var leftX = typeof window.screenLeft == 'number' ? window.screenLeft:window.scrollX;
var topY = typeof window.screenTop == 'number' ? window.screenTop:window.scrollY;
alert(leftX);
alert(topY);

alert(window.innerWidth);
alert(window.innerHeight);

alert(window.outerWidth);
alert(window.outerHeight);

alert(document.documentElement.clientWidth);
alert(document.documentElement.clientHeight);


function box() {
	alert('lee');
}
setTimeout(box,1000);

setTimeout(function() {
	alert('lee');
},1000);

var box = setTimeout(function() {
	alert('lee');
},1000);

clearTimeout(box);

setInterval(function() {
	alert('lee');
},1000);

var box = setInterval(function() {
	alert('lee');
},1000);

clearInterval(box);


//定时器
var num = 0;
var max = 5;

setInterval(function() {
	num++;
	if (num == max) {
		clearInterval(this);//this本身不能代表id
		alert('5秒到了...');
	}
},1000);


//定时器
var num = 0;
var max = 5;
var id = null;

function box() {
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		clearInterval(id);
		alert('5秒到了!');
	}
}

id = setInterval(box,1000);

//使用超时调用，模拟定时器
var num = 0;
var max = 5;
 
function box() {
	num++;
	document.getElementById('a').innerHTML += num;
	if (num == max) {
		alert('5秒到了!');
	} else {
		setTimeout(box,1000);
	}
}

setTimeout(box,1000);


location.hash = '#66';
alert(location.hash);

location.port = 8888;
alert(location.port);

alert(location.search);

//死循环
location.search = '?id=5';

location.href = 'http://www.baidu.com';


//?id=5&search=ok
function getArgs() {
	//去掉?
	var qs = location.search.length > 0 ?location.search.substring(1):'';

	var args = [];//字面量数组
	var items = qs.split('&');
	var item = null,name = null,value = null;

	for(var i = 0;i<items.length;i++) {
		// alert(items[i]);
		item = items[i].split('=');
		// alert(item);
		name = item[0];
		value = item[1];
		// alert(name);
		// alert(value);
		args[name] = value;
	}

	return args;
}

var args = getArgs();
alert(args['id']);
alert(args['search']);


location.assign('http://www.baidu.com');

location.reload();//最有效的重新加载，有可能从缓存加载
location.reload(true);//强制加载，从服务器重头加载

function a() {
	// location.href='http://www.baidu.com';

	//不产生任何历史记录的跳转
	location.replace('http://www.baidu.com');
}
*/


alert(hitory.length);

alert(hitory.back());
alert(hitory.forward());
alert(hitory.go(1));











