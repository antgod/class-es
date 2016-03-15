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

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	console.log("-------对象解构赋值---------");
	var _foo$bar = { foo: "aaa", bar: "bbb" };
	var bar = _foo$bar.bar;
	var foo = _foo$bar.foo;

	console.log('{ bar, foo } = { foo: "aaa", bar: "bbb" }', bar, foo);

	//如果变量名与属性名不一致，必须写成下面这样。
	var obj = { first: 'hello', last: 'world' };
	var f = obj.first;
	var l = obj.last;

	console.log("{ first: 'hello', last: 'world' }", f, l);

	//或者写成一行
	var _aaa$bar = { aaa: "aaa", bar: "bbb" };
	var a = _aaa$bar.aaa;
	var b = _aaa$bar.bar;

	console.log('{ aaa: a, bar: b } = { aaa: "aaa", bar: "bbb" }', a, b);

	//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
	var log = Math.log;
	var sin = Math.sin;
	var cos = Math.cos;

	console.log('{ log, sin, cos } = Math', log, sin, cos);

	//字符串解构赋值：
	console.log("-------字符串解构赋值---------");
	//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
	var _hello = 'hello';

	var _hello2 = _slicedToArray(_hello, 5);

	var a = _hello2[0];
	var b = _hello2[1];
	var c = _hello2[2];
	var d = _hello2[3];
	var e = _hello2[4];

	console.log("[a, b, c, d, e] = 'hello'", a, b, c, d, e);
	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
	var _hello3 = 'hello';
	var len = _hello3.length;

	console.log("{length : len} = 'hello'", len);

	//其他解构赋值：
	console.log("-------其他解构赋值---------");
	//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
	var _ = 123;
	var s = _.toString;

	console.log("s === Number.prototype.toString", s === Number.prototype.toString);
	var _true = true;
	var s = _true.toString;

	console.log("s === Boolean.prototype.toString", s === Number.prototype.toString);

	//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
	//let { prop: x } = undefined; // TypeError
	//let { prop: y } = null; // TypeError

	//函数参数解构赋值：
	console.log("-------函数参数解构赋值---------");
	function add(_ref) {
	    var _ref2 = _slicedToArray(_ref, 2);

	    var x = _ref2[0];
	    var y = _ref2[1];

	    return x + y;
	}

	console.log("add([1, 2])", add([1, 2]));

	//试试以下两种写法的区别
	function move() {
	    var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var _ref3$x = _ref3.x;
	    var x = _ref3$x === undefined ? 0 : _ref3$x;
	    var _ref3$y = _ref3.y;
	    var y = _ref3$y === undefined ? 0 : _ref3$y;

	    console.log("{x = 0, y = 0} = {}", x, y);
	}

	move({ x: 3, y: 8 }); // [3, 8]
	move({ x: 3 }); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]

	function move() {
	    var _ref4 = arguments.length <= 0 || arguments[0] === undefined ? { x: 0, y: 0 } : arguments[0];

	    var x = _ref4.x;
	    var y = _ref4.y;

	    console.log("{x = 0, y = 0} = {}", x, y);
	}
	move({ x: 3, y: 8 }); // [3, 8]
	move({ x: 3 }); // [3, 0]
	move({}); // [0, 0]
	move(); // [0, 0]

	//undefined就会触发函数参数的默认值。
	var arr = [1, undefined, 3].map(function () {
	    var x = arguments.length <= 0 || arguments[0] === undefined ? 'yes' : arguments[0];
	    return x;
	});
	console.log(arr);

/***/ }
/******/ ]);