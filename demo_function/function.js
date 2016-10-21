/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-20 19:53:00
 * @version $Id$
 */

/*

//demo1
//把函数本身作为参数传递，而不是函数的结果
function box(sum,num) {
	return sum(num);
}

function sum(num) {
	return num+10;
}

//这里sum是一个函数，当做参数传递到另外一个函数里，而不是函数的返回值
var result = box(sum,10);
alert(result);


//demo2
//arguments.callee --> box 递归
 function box(num) {
 	if (num<=1) {
 		return 1;
 	} else {
 		return num*arguments.callee(num-1);
 	}
 }

 alert(box(4));


//demo3
alert(this);
alert(typeof this);

var color ='red';
alert(window.color);
alert(this.color);


//demo4
window.color = 'red';

var box = {
	color:'blue',
	sayColor:function() {
		alert(this.color);
	}
};

alert(this.color);
box.sayColor();


//demo5
window.color = 'red';

//所以这里的执行是动态的第一次在window下，第二次在box下
function sayColor() {
	alert(this.color);
}

sayColor();

var box = {
	color:'blue'
};

// box.sayColor = sayColor相当于
// sayColor:function() {
// 	alert(this.color);
// }
box.sayColor = sayColor;

//所以这里执行的是box里的this
box.sayColor();


//demo6
function box(num1,num2) {
	return num1 + num2;
}

//box的参数个数
alert(box.length);

function sum(num1,num2) {
	//apply和call可以冒充另一个函数
	//this表示window作用于，[]表示传递的参数
	return box.apply(this,[num1,num2]);
}

function sum2(num1,num2) {
	//apply参数可以传数组
	//call参数必须一个一个传
	
	//arguments可以当数组传递
	return box.apply(this,arguments);
}

alert(sum(10,10));
alert(sum2(10,10));



*/

//demo7
var color = 'red';

var box = {
	color:'blue'
};

function sayColor() {
	alert(this.color);
}

sayColor();

//使用call或apply来扩充作用于的最大好处，就是对象不需要和方法
//发生任何耦合关系(耦合，就是相互关联的意思，扩展和维护会发生连锁反应)。
//也就是说，box对象和sayColor()方法间不会有多余的关联操作。
//比如box.sayColor = sayColor

//用call是实现对象冒充，冒充box下，冒充window下
sayColor.call(window);
sayColor.call(this);

sayColor.call(box);













