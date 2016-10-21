/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-21 21:03:22
 * @version $Id$
 */

/*

//demo1 函数体内有var变量是局部变量
var box = 'lee';
function setBox(box) {
	var box = 'red';
}
setBox();
alert(box);


//demo2
var box = 'lee';
function setBox() {
	box = 'red';
} 
setBox();
alert(box);

//demo3
var box = 'lee';
function setBox(box) {
	alert(box);
}
setBox('red');
alert(box);


//demo4
function setBox() {

	function setColor() {
		var b = 'kkk';
		alert(b);
		return 123;
	}
	return setColor();
}
alert(setBox());


//demo5 if和for () {} 没有作用域的功能
if (true) {
	var box = 'lee';
}
alert(box);

for (var i = 0; i < 10; i++) {
	var box = 'lee';
}
alert(i);
alert(box);
*/





