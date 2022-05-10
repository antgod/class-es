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

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	console.log("-------箭头函数---------");

	//箭头函数
	var f = function f(x) {
	    return x;
	};
	//等同于
	//var f = function(x) {return x;};

	var f1 = function f1() {
	    var num1 = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	    var num2 = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	    return num1 + num2;
	};
	console.log("1.f1", f1(3, 5));

	//如果想返回{}，在外层套个()
	var f2 = function f2(id) {
	    return { id: id, name: "Temp" };
	};
	console.log("2.f2", f2(1));

	//例子
	console.log("3.简化回调", [1, 2, 3].map(function (x) {
	    return x * x;
	}));
	var result = [4, 2, 3].sort(function (a, b) {
	    return a - b;
	});
	console.log("4.箭头实现排序", result);

	console.log("-------Rest参数---------");
	//rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
	function add() {
	    var sum = 0;

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
	            values[_key] = arguments[_key];
	        }

	        for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var val = _step.value;

	            sum += val;
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator["return"]) {
	                _iterator["return"]();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return sum;
	}

	console.log("5.rest:", add(2, 5, 3)); //10

	function push(array) {
	    for (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        items[_key2 - 1] = arguments[_key2];
	    }

	    items.forEach(function (item) {
	        array.push(item);
	    });
	}

	var a = [];
	push(a, 1, 2, 3);
	console.log("6.数组合并:", a);

	// 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
	//函数的length属性，不包括rest参数。
	console.log("7.参数长度:" + (function (a) {}).length); // 1
	console.log("7.参数长度:" + (function () {}).length); // 0
	console.log("7.参数长度:" + (function (a) {}).length); // 1

	console.log("-------扩展运算符---------");
	//扩展运算符（spread）是三个点（...）。
	//它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
	console.log.apply(console, ["8.扩展运算符"].concat([1, 2, 3]));

	var extendFunction = function extendFunction() {
	    for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        rest[_key3] = arguments[_key3];
	    }

	    console.log("8.扩展运算符" + rest);
	};
	extendFunction.apply(undefined, [1, 2, 3]);

	var args = [1, 2, 3, 4, 5, 6];
	var fn5 = function fn5() {
	    for (var _len4 = arguments.length, item = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	        item[_key4] = arguments[_key4];
	    }

	    console.log("9.扩展运算符与rest求和", eval(item.join("+")));
	}; //将参数列表转成数组
	fn5.apply(undefined, args); //将实参转成1,2,3

	var arr1 = [0, 1, 2];
	var arr2 = [3, 4, 5];
	arr1.push.apply(arr1, arr2);
	console.log("10.es6数组合并：" + arr1);

	var arr1 = ['a', 'b'];
	var arr2 = ['c', "d"];
	var arr3 = ['d', 'e'];
	console.log("10.es6数组合并2：" + [].concat(arr1, arr2, arr3));

	var list = [1, 3, 4, 5, 6];
	var a = list[0];
	var rest = list.slice(1);

	console.log("11.数组切分,es6", a, rest);

	//数组转换
	var obj = { "0": 1, 1: 2, length: 2 };
	var arr = [].concat(_toConsumableArray(obj)); // TypeError: Cannot spread non-iterable object
	console.log("12.数组转换", arr);

/***/ })
/******/ ]);