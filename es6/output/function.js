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
/***/ (function(module, exports) {

	"use strict";

	console.log("-------函数扩展1---------");

	//除了简洁，ES6的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，
	//不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本彻底拿掉这个参数，
	//也不会导致以前的代码无法运行。
	function Point() {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    this.x = x;
	    this.y = y;
	}

	var p = new Point();
	console.log("1.默认参数", p);

	//参数变量是默认声明的，所以不能用let或const再次声明。打开注释，编译报错
	//function foo(x = 5) {
	//    let x = 1; // error
	//    const x = 2; // error
	//}

	// 写法一
	function m1() {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref$x = _ref.x;
	    var x = _ref$x === undefined ? 0 : _ref$x;
	    var _ref$y = _ref.y;
	    var y = _ref$y === undefined ? 0 : _ref$y;

	    console.log("2.m1:" + x, y);
	}

	// 写法二
	function m2() {
	    var _ref2 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

	    var x = _ref2.x;
	    var y = _ref2.y;

	    console.log("2.m2:" + x, y);
	}

	//// 函数没有参数的情况
	m1(); // [0, 0]
	m2(); // [0, 0]
	//
	// x和y都有值的情况
	m1({ x: 3, y: 8 }); // [3, 8]
	m2({ x: 3, y: 8 }); // [3, 8]
	//
	//// x有值，y无值的情况
	m1({ x: 3 }); // [3, 0]
	m2({ x: 3 }); // [3, undefined]
	//
	// x和y都无值的情况
	m1({}); // [0, 0];
	m2({}); // [undefined, undefined]

	//通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。
	//如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
	function f1(x, y) {
	    if (x === undefined) x = 1;

	    console.log("3.默认参数应该放在函数尾:" + x, y);
	}

	f1(); // [1, undefined]
	f1(2); // [2, undefined])
	//f(, 1) // 打开注释报错
	f1(undefined, 1); // [1, 1]

	//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
	console.log("4.参数个数:" + (function (a) {}).length); // 1
	console.log("4.参数个数:" + (function () {
	    var a = arguments.length <= 0 || arguments[0] === undefined ? 5 : arguments[0];
	}).length); // 0
	console.log("4.参数个数:" + (function (a, b) {
	    var c = arguments.length <= 2 || arguments[2] === undefined ? 5 : arguments[2];
	}).length); // 2

	var func1 = function func1() {};
	//
	// ES5
	//console.log("函数name",func1.name); // ""
	// ES6
	console.log("5.函数名称", func1.name); // "func1"

	//默认参数变化
	var h = { a: 1 };
	function f3() {
	    var y = arguments.length <= 0 || arguments[0] === undefined ? h : arguments[0];

	    h = { a: 2 };
	    console.log("6.默认参数变化:" + y.a);
	}

	f3(); // 1

	//应用
	//利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

	//可以将参数默认值设为undefined，表明这个参数是可以省略的。
	function foo2() {
	    var optional = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

	    console.log("参数可省略");
	}

	foo2();

	function throwIfMissing() {
	    throw new Error('参数不可省略');
	}

	function foo1() {
	    var mustBeProvided = arguments.length <= 0 || arguments[0] === undefined ? throwIfMissing() : arguments[0];
	}
	//去掉参数运行报错
	foo1();

/***/ })
/******/ ]);