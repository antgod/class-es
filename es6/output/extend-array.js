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

	'use strict';

	console.log("-------数组扩展---------");

	var arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	console.log("1.es5，json2array", arr1);

	// ES6的写法
	var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	console.log("1.es6，json2array", arr2);

	// NodeList对象
	var ps = document.querySelectorAll('script');
	Array.from(ps).forEach(function (p) {
	    console.log("2.NodeList转数组", p);
	});

	// arguments对象
	function foo() {
	    var args = Array.from(arguments);
	    console.log("2.参数列表转数组", args);
	}
	foo(1, 2, 3);

	//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数
	var num = [1, 4, -5, 10].find(function (n) {
	    return n < 0;
	});
	console.log("3.find函数，找到第一个匹配元素" + num);

/***/ }
/******/ ]);