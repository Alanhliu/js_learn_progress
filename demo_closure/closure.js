/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-24 19:01:22
 * @version $Id$
 */


/*
//普通函数
function box() {
	return 'lee';
}

//匿名函数
function() {
	return 'lee';
}

//把匿名函数赋值给变量
var box = function() {
	return 'lee';
};
alert(box());

//通过自我执行来执行匿名函数
(function() {
	alert('lee');
	return 'lee';
})();//函数执行加括号()

//把匿名函数自我执行的返回值赋给变量
var box = (function() {
	return 'lee';
})();

alert(box);

//自我执行后用alert打印
alert((function() {
	return 'lee';
})());

//自我执行匿名函数的传参
(function(age) {
	 alert(age);
})(100);

//函数里放一个匿名函数
function box() {

	return function() {//闭包
		return 'lee';
	}
}

alert(box()());

var b = box();
alert(b());


//闭包是指有权访问另一个函数作用域中的变量的函数，创建闭包函数的常见方式，
//就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量
function box() {
	var age = 100;
	return function() {
		return age;
	};
}

// alert(age);
alert(box()());


//闭包
//使用闭包有一个优点，也是它的缺点：就是可以把局部变量驻留在内存中，可以避免使用全局变量。
//(全局变量污染导致应用程序不可预测性，每个模块都可调用必将引来灾难，所以推荐使用私有的，封装的局部变量)

//使用全局变量进行累加
var age = 100;

function box() {
	age++;
}
alert(age);
box();
alert(age);
box();
alert(age);

//使用局部变量进行累加,无法累加
function box() {
	var age = 100;
	age++;
	return age;
}

alert(age);
box();
alert(age);
box();
alert(age);

//使用匿名函数实现局部变量驻留内存中从而累加
function box() {
	var age = 100;
	return function() {
		age++;
		return age;
	};
}

var b = box();
alert(b());
alert(b());
alert(b());
//由于闭包里作用域返回的局部变量资源不会被立刻销毁回收，所以可能会占用更多
//的内存。过度使用闭包会导致性能下降，建议在非常必要的时候才使用闭包。
b = null;//解除引用，等待垃圾回收
alert(b());

//作用域链的机制导致一个问题，在循环中里的匿名函数取得的任何变量都是最后一个值。
//循环里的匿名函数的取值问题
//问题引出
function box() {
	var arr = [];
	for(var i = 0;i < 5;i++) {
		arr[i] = function() {
			return i;
		};
	}

	return arr;
}

// alert(box());
var b = box();
for(var i = 0;i < 5;i++) {
	alert(b[i]());//为什么每次打印的都是5?因为盗用box()时，循环已经执行完毕了
}


//改0
function box() {
	var arr = [];
	for(var i = 0;i < 5;i++) {
		arr[i] = i;
	}

	return arr;
}

var b = box();
for (var i = 0;i < 5;i++) {
	alert(b[i]);
}

//改1
function box() {
	var arr = [];

	for(var i = 0;i < 5;i++) {
		arr[i] = (function(num) {//通过自我及时执行匿名函数
			return num;
		})(i);
	}

	return arr;
}

var b = box();
for (var i = 0;i < 5;i++) {
	alert(b[i]);
}

//改2
function box() {
	var arr = [];

	for(var i = 0;i < 5;i++) {
		arr[i] = (function(num) {
			//num其实在这里
			return function() {//因为闭包可以将变量驻留在内存中
				return num;
			}

		})(i);
	}

	//已经执行完毕了，num为什么可以0,1,2,3,4
	return arr;
}

var b = box();
for (var i = 0;i < 5;i++) {
	alert(b[i]());
}

//改3
function box() {
	var arr = [];

	for(var i = 0;i < 5;i++) {
		//赋给一个变量,匿名函数就会执行
		//自我执行需要()();
		//对比改2
		arr[i] = function(num) {
			//num其实在这里
			return function() {//因为闭包可以将变量驻留在内存中
				return num;
			}

		}(i);
	}

	//已经执行完毕了，num为什么可以0,1,2,3,4
	return arr;
}

var b = box();
for (var i = 0;i < 5;i++) {
	alert(b[i]());
}


//关于this对象
//在闭包中使用this对象也可能会导致一些问题，this对象是在运行时基于函数的执行环境绑定的，
//如果this在全局范围内就是window，如果在对象内部就指这个对象。而闭包却在运行时指向w
//window的，因为闭包并不属于这个对象的属性或方法。

var box = {
	getThis:function() {
		return this;
	}
};

alert(this);
alert(box.getThis());

var box = {
	getThis:function() {
		return function() {
			return this;
		}
	}
};

alert(box.getThis()());

//继续了解闭包中的this
var user = 'the window';

var box = {
	user:'the box',
	getUser:function() {
		return this.user;
	}
};

alert(user);//the box
alert(box.getUser());//the window


var box = {
	user:'the box',
	getUser:function() {
		return function() {//闭包
			return this.user;
		}
	}
};
alert(box.getUser()());//the window

//想让闭包里的this指向box怎么办?
//1.对象冒充
alert(box.getUser().call(box));//the box

//2.var that = this;
var box = {
	user:'the box',
	getUser:function() {
		//这里作用域this是Box
		var that = this;
		return function() {//闭包
			//这里作用域是window
			return that.user;
		}
	}
};
alert(box.getUser()());//the box


//内存泄露
//由于IE的JScript对象和DOM对象使用不同的垃圾收集方法，因此闭包在IE中会导致
//一些问题。就是内存泄露的问题，也就是无法销毁驻留在内存中的元素。
//如果没有解除引用，那么需要等到浏览器关闭时才得以释放。

function box() {
	//oDiv用完之后一直驻留在内存中
	var oDiv = document.getElementById('oDiv');
	oDiv.onclick = function() {
		alert(oDiv.innerHTML);//这里用了oDiv导致内存泄露
	};
	alert(oDiv);
}
box();

//改写
function box() {
	//oDiv用完之后一直驻留在内存中
	var oDiv = document.getElementById('oDiv');
	var text = oDiv.innerHTML;
	oDiv.onclick = function() {
		alert(text);
	};
	oDiv = null;//所以这里解除引用，等待垃圾回收
	alert(oDiv);
}
box();


//模仿块级作用域

function box() {
	for(var i=0;i<5;i++) {//块级作用域(js没有这个东西)

	}
	alert(i);
}

box();

function box() {
	for(var i=0;i<5;i++) {//块级作用域(js没有这个东西)

	}
	var i;
	alert(i);
}

box();


//说明javascript没有块级语句的作用域，if(){},for(){}等没有作用域，
//如果有，出了这个范围i就应该被销毁了。就算重新声明一个变量也不会改变他的值

//javascript不会提醒你是否多次声明了同一个变量，会对后声明的变量视而不见。

//块级作用域(私有作用域)
//demo1
function box() {
	//包含自我执行的匿名函数，就可以实现私有作用域
	(function() {
		for(var i=0;i<5;i++) {
			alert(i);
		} 
	})();
	alert(i);//出了私有作用域，变量立即销毁，这里就不认识了
	//再使用i，就和之前的i没有任何联系了
}

box();

//demo2
(function() {
	var age = 100;
	alert(age);
})();

alert(age);


//私有变量
//demo1
function box() {
	var age = 100;//age私有变量
}

box();

function Box() {
	this.age = 100;//属性，公有的
	this.run = function() {//方法，共有的
		return 'running...';
	};
}

var box = new Box();
alert(box.age);
alert(box.run());


function Box() {
	var age = 100;//私有变量
	function run() {//私有方法
		return 'running...';
	}
	this.publicGo = function() {//对外可见的公共接口，特权方法
		return age+run();
	};
	this.getAge = function() {
		return age;
	}
}

var box = new Box();
alert(box.publicGo());
alert(box.getAge());


//demo2
//通过构造函数传参
function Box(value) {
	var user = value;
	this.getUser = function() {
		return user;
	};
	this.setUser = function(value) {
		user = value;
	};
}

var box = new Box('lee');
alert(box.getUser());//lee

var box2 = new Box('kkk');
alert(box.getUser());//lee
alert(box2.getUser());//kkk

box.setUser('ooo');
alert(box.getUser());//ooo
alert(box2.getUser());//kkk


//demo3
//对象的方法，在多次调用的时候，会创建多次。
//可以使用静态私有变量来避免这个问题
(function() {
	var user = '';//私有变量
	//构造函数,但在函数里写构造函数，不支持，因为私有作用域里的函数外部无法访问
	// function Box() {}

	//这样写外部就可以访问
	//全局构造函数
	Box = function(value) {
		user = value;
		this.getUser = function() {
			return user;
		}
	};
})();

//但这样写不好，所以见demo4
var box = new Box('lee');
alert(box.getUser());//lee

var box2 = new Box('kkk');

alert(box.getUser());//kkk
alert(box2.getUser());//kkk


//demo4
//使用了prototype导致方法共享了，而user也变成静态属性了
//(所谓静态属性，即共享于不同对象中的属性)
(function() {
	var user = '';//私有变量
	//构造函数,但在函数里写构造函数，不支持，因为私有作用域里的函数外部无法访问
	// function Box() {}

	//这样写外部就可以访问
	//全局构造函数
	Box = function(value) {
		user = value;
	};

	Box.prototype.getUser = function() {
		return user;
	};
	Box.prototype.setUser = function(value) {
		user = value;
	};
})();

var box = new Box('lee');
alert(box.getUser());//lee
var box2 = new Box('kkk');
alert(box2.getUser());//kkk
alert(box.getUser());//kkk

box2.setUser('ooo');
alert(box.getUser());//ooo
alert(box2.getUser());//ooo



//模块模式
//之前采用的都是构造函数的方式来创建私有变量和特权方法。
//那么对象字面量方式就采用模块模式来创建

//单例
//字面量就是单例
var box = {
	user:'lee',
	run:function() {
		return 'running...';
	}
};

//私有化变量和函数
//赋值时会自动执行
//写法1
var box = function() {
	var user = 'lee';//私有变量
	function run() {//私有函数
		return 'running...';
	}
	return {
		//对外公共接口的特权方法
		publicGo:function() {
			return user+run();
		}
	};
}();

alert(box.publicGo());

//写法2
var box = function() {
	var user = 'lee';//私有变量
	function run() {//私有函数
		return 'running...';
	}
	var obj = {
		//对外公共接口的特权方法
		publicGo:function() {
			return user+run();
		}
	};
	return obj;
}();

alert(box.publicGo());

//增强的模块模式，这个模式适合返回自定义对象，也就是构造函数
function Desk() {};

var box = function() {
	var user = 'lee';//私有变量
	function run() {//私有函数
		return 'running...';
	}
	
	var desk = new Desk();

	desk.publicGo = function() {
		return user+run();
	};
	desk.publicUser = user;
	
	return desk;
}();

alert(box.publicGo());
alert(box.publicUser);
*/





