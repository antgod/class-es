/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	//对象解构赋值：

	console.log("-------对象解构赋值---------");
	var { bar, foo } = { foo: "aaa", bar: "bbb" };
	console.log('1.{ bar, foo } = { foo: "aaa", bar: "bbb" }', bar, foo);

	//如果变量名与属性名不一致，必须写成下面这样。
	var obj = { first: 'hello', last: 'world' };
	var { first: f, last: l } = obj;
	console.log("1.{ first: 'hello', last: 'world' }", f, l);

	//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
	let { log, sin, cos } = Math;
	console.log('1.{ log, sin, cos } = Math', log, sin, cos);

	//字符串解构赋值：
	console.log("-------字符串解构赋值---------");
	//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
	var [a, b, c, d, e] = 'hello';
	console.log("2.[a, b, c, d, e] = 'hello'", a, b, c, d, e);
	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
	var { length: len } = 'hello';
	console.log("2.{length : len} = 'hello'", len);

	//其他解构赋值：
	console.log("-------其他解构赋值---------");
	//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
	var { toString: s } = 123;
	console.log("3.s === Number.prototype.toString", s === Number.prototype.toString);
	var { toString: s } = true;
	console.log("3.s === Boolean.prototype.toString", s === Number.prototype.toString);

	//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
	//let { prop: x } = undefined; // TypeError
	//let { prop: y } = null; // TypeError


	//函数参数解构赋值：
	console.log("-------函数参数解构赋值---------");
	function add([x, y]) {
	    return x + y;
	}

	console.log("4.add([1, 2])", add([1, 2]));

	//试试以下两种写法的区别

	//如果没传参数,默认传递{},如果x映射不到,传递0,y映射不到,传递0
	function move1({ x = 0, y = 0 } = {}) {
	    console.log("4.{x = 0, y = 0} = {}", x, y);
	}

	move1({ x: 3, y: 8 }); // [3, 8]
	move1({ x: 3 }); // [3, 0]
	move1({}); // [0, 0]
	move1(); // [0, 0]

	//如果没传参数,默认传递{ x: 0, y: 0 }
	function move2({ x, y } = { x: 0, y: 0 }) {
	    console.log("5.{x = 0, y = 0} = {}", x, y);
	}
	move2({ x: 3, y: 8 }); // [3, 8]
	move2({ x: 3 }); // [3, undefined]
	move2({}); // [undefined, undefined]
	move2(); // [0, 0]


	//undefined就会触发函数参数的默认值。
	var arr = [1, undefined, 3].map((x = 'yes') => x);
	console.log("6." + arr);

/***/ }
/******/ ]);