/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-22 12:21:08
 * @version $Id$
 */

/*

//demo1
//name最好不要作为全局变量
var box = new Object();
box.username = 'lee';
box.age = 100;
box.run = function() {
	//this要放在一个作用于下，比如box.run(){}，这个是box作用于下的方法
	//方可用this，来表示box本身
	return this.name + this.age + '运行中';
};

alert(box.run());
alert(this.username);



//demo2
//工厂模式
//解决了重复实例化的问题，但还有一个问题，那就是识别问题，因为根本
//无法搞清楚他们到底是哪个对象的市里。
function createObject(name,age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function() {
		return this.name + this.age +'running...';
	};
	return obj;
}

var box1 = createObject('Lee',100);
var box2 = createObject('Jack',200);

alert(box1.run());
alert(box2.run());

alert(typeof box1);
alert(typeof box2);

alert(box1 instanceof Object);
alert(box2 instanceof Object);



//demo3
//构造函数
//1.构造函数没有new Object,但它后台会自动var obj = new Object();
//2.this就相当于obj
//3.构造函数不需要返回，他是后台自动返回
function Box(name,age) {
	//实例属性
	this.name = name;
	this.age = age;
	//实例方法
	this.run = function() {
		return this.name + this.age + 'running...';
	};
	//不建议这么用
	this.walk = walk;
}

function walk() {
	return this.name + this.age + 'walking...';
}

var box1 = new Box('Lee',100);
var box2 = new Box("Lee",100);

alert(box1.run());
alert(box2.run());

alert(box1 instanceof Object);
alert(box1 instanceof Box);

alert(box1.name == box2.name);
alert(box1.age == box2.age);
alert(box1.run() == box2.run());//true
alert(box1.run == box2.run);//false 比较的是引用地址
alert(box1.walk == box2.walk);//true 引用的是同一地址

//对象冒充成box
var o = new Object();
Box.call(o,'lee',100);
alert(o.run());



//demo4
//原型
//原型模式的执行流程：
//1.先查找构造函数实例里的属性或方法，如果有，立刻返回
//2.如果构造函数实例里没有，则去它的原型对象里找，如果有，就返回

//构造函数体内什么都没有，这里如果有，叫做实例属性，实例方法
function Box() {
	//this.name = 'Jack'
}
//我们创建的每个函数都有一个prototype属性，这个属性是一个对象，
//它的用途是包含可以由特定类型的所有实例共享的属性和方法。

//原型属性
Box.prototype.name = 'lee';
Box.prototype.age = 100;
//原型方法
Box.prototype.run = function() {
	return this.name + this.age +'running...';
}

//如果是实例方法，不同的实例化，他们的方法地址是不一样的
//如果是原型方法，他们的地址是一样的
var box1 = new Box();
var box2 = new Box();

alert(box1.run == box2.run);
//就近原则打印出Jack
box1.name = 'Jack';
alert(box1.name);
//删除实例中的属性
delete box1.name;
alert(box1.name);
//删除原型中的属性
delete Box.prototype.name;
//覆盖原型中的属性
Box.prototype.name = 'kkk';
alert(box1.name);

//这个属性是一个对象，访问不到
alert(box1.prototype);
//这个属性是一个指针指向prototype原型对象
alert(box1.__proto__);
//构造属性，可以获取构造函数本身
//作用是被圆形指针丁文，然后得到构造函数本身
//其实就是对象实例对应的原型对象的作用
alert(box1.constructor);
//判断一个对象实例（对象引用）是不是指向了原型对象
alert(Box.prototype.isPrototypeOf(box1));
//判断实例中是否存在指定属性
alert(box1.hasOwnProperty('name'));
//不管实例属性或原型属性是否存存在，只要有就返回true，两边都没有返回false
alert('name' in box1);
//判断只有原型中有的属性
function isOriginProperty(object,property) {
	return !object.hasOwnProperty(property) && (prototype in object)
}



//demo5
// 对比下面两种方式
function Box(){}

// Box.prototype.name = 'lee';
// Box.prototype.age = 100;
// Box.prototype.run = function() {
// 	return this.name + this.age +'running...';
// }

//使用字面量的方式创建原型对象，这里{}就是对象，是Object，new Object()相当于{}
Box.prototype = {
	constructor:Box,
	name:'lee',
	age:100,
	run:function() {
		return this.name + this.age + 'running...';
	}
};

//重写原型对象
//把原来的原型对象和构造函数对象实例之前的关系切断了
//不会再保留之前原型的任何信息了
// Box.prototype = {
// 	age:200
// }

var box = new Box();
alert(box.run());
alert(box.constructor == Box);
alert(box.constructor == Object);



//demo6
//查看sort是否是Array原型对象里的方法
alert(Array.prototype.sort);
alert(String.prototype.substring);

//扩展String
String.prototype.addstring = function(str) {
	return this + str;
}

var box = 'lee';
alert(box.addstring('123456'));



//demo7
//原型对象的缺点

function Box() {}

Box.prototype = {
	constructor:Box,
	name:'lee',
	age:200,
	family:['哥哥','姐姐','妹妹'],
	run:function() {
		return this.name + this.age + 'running...';
	}
};

var box1 = new Box();

alert(box1.run());

alert(box1.family);
box1.family.push('弟弟');
alert(box1.family);

var box2 new Box();
alert(box2.family);//共享了box1添加后的引用类型的原型



//demo8
//为了解决构造传参和共享问题，可以组合构造函数+原型模式
//不共享的使用构造函数
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];
}

Box.prototype = {
	constructor:Box,
	run:function() {
		return this.name + this.age + this.family;
	}
}

var box1 = new Box('lee',100);
alert(box1.run());
alert(box1.family);
box1.family.push('弟弟');
alert(box1.family);

var box2 = new Box('jack',200);
alert(box2.run()); 
alert(box2.family);



//动态原型模式(组合构造函数+原型模式 封装到一起)
//将原型对象封装到构造方法里
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];

//原型的初始化，只要第一次初始化，就可以了，没必要每次构造函数时都初始化
	if (typeof this.run != 'function') {//判断this.run是否存在
		alert('first init');
		Box.prototype.run = function() {
			return this.name + this.age + 'running...';
		};
	}
}


var box1 = new Box('lee',100);
// alert(box1.run());
// alert(box1.family);
// box1.family.push('弟弟');
// alert(box1.family);

var box2 = new Box('jack',200);
// alert(box2.run()); 
// alert(box2.family);



//寄生构造函数 = 工厂模式 + 构造函数
function Box(name,age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function() {
		return this.name + this.age + 'running...';
	};
	return obj;
}

var box1 = new Box('lee',100);
alert(box1.run());

var box2 = new Box('jack',200);
alert(box2.run()); 


//稳妥构造函数
//box里不能用this，外面不能用new
function Box(name,age) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function() {
		return this.name + this.age + 'running...';
	};
	return obj;
}

var box1 = Box('lee',100);
alert(box1.run());

var box2 = Box('jack',200);
alert(box2.run()); 



//demo9
//继承
//1.原型链条实现
function Box() {
	this.name = 'lee';
}

function Desk() {
	this.age = 100;
}

//通过原型链继承,超类型实例化后的对象实例，赋值给予子类型的原型属性
//new Box()会将Box结构里的信息和原型里的信息都交给Desk
Desk.prototype = new Box();

var desk = new Desk();
alert(desk.name);

//就近原则
function Box() {
	this.name = 'lee';
}

Box.prototype.name = 'jack';

function Desk() {
	this.age = 100;
}

Desk.prototype = new Box();

var desk = new Desk();
//就近原则，实例里有，就返回，没有就去查找原型
alert(desk.name);


//2.借用构造函数继承（对象冒充继承）
//为了解决引用共享和超类型无法传参的问题，我们采用一种叫借用构造函数的技术，
//或者称为对象冒充的技术来解决这两种问题
function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];//引用类型放到构造里就不被共享
}

Box.prototype.family = ['哥哥','姐姐','妹妹'];

function Desk(name,age) {
	//对象冒充,对象冒充只能继承构造里的信息
	Box.call(this,name,age);
}

var desk = new Desk('lee',100);
alert(desk.family);
desk.family.push('弟弟');
alert(desk.family);

var desk2 = new Desk('lee',100);
alert(desk2.family);//引用类型放到构造里就不被共享


function Box(name,age) {
	this.name = name;
	this.age = age;
	this.family = ['哥哥','姐姐','妹妹'];
	//this.run = function() {
	//	return this.name + this.age + 'running...';
	//}
}

//构造函数里的方法，放在构造里，每次实例化，都会分配一个内存地址
//所以最好放在原型里，保证多次实例化只有一个地址
Box.prototype.run = function() {
	return this.name + this.age + 'running...';
}

//3.组合继承
//原型链+借用构造函数的模式,组合继承
//解决了
//1.对象冒充解决了构造方法传参，但不能继承原型
//2.原型链方法的继承
//3.引用类型的共享
function Desk(name,age) {
	Box.call(this,name,age);//对象冒充，继承构造里的
}

Desk.prototype = new Box();//原型链继承,只继承原型里的

var desk = new Desk('lee',100);

alert(desk.run());


//4.临时中转函数继承
function obj(o) {
	function F() {}
	F.prototype = o;
	return new F();
}
//F.prototype = o相当于 Desk.prototype = new Box();

//这是字面量的声明方式，相当于var box = new Box();
var box = {
	name:'lee',
	age:100,
	family:['哥哥','姐姐','妹妹']
}

var box1 = obj(box);

alert(box1.family);
box1.family.push('弟弟');
alert(box1.family);

var box2 = obj(box);
alert(box2.family);//引用类型的属性共享了


//5.寄生式继承 = 原型式 + 工厂式
function obj(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

//寄生函数
function create(o) {
	var f = obj(o);
	f.run = function() {
		return this.name + 'running...';
	};
	return f;
}

var box = {
	name:'lee',
	age:100,
	family:['哥哥','姐姐','妹妹']
}

var box1 = create(box);
alert(box1.name);
alert(box1.run());
*/


//6寄生组合继承 ！！！

//临时中转函数
function obj(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

//寄生函数
function create(box,desk) {
	var f = obj(box.prototype);
	f.constructor = desk;//调整原型构造指针
	desk.prototype = f; 
}

function Box(name ,age) {
	this.name = name;
	this.age = age;
}

Box.prototype.run = function() {
	return this.name + this.age + 'running...';
}

function Desk(name,age) {
	Box.call(this,name,age);
}

//通过寄生组合继承来实现继承
create(Box,Desk);//这句话用来替代Desk.prototype = new Box();

var desk = new Desk('lee',100);
alert(desk.run());
alert(desk.constructor);



