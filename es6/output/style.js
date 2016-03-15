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

	//立即执行函数
	"use strict";

	(function () {
	    console.log("立即执行函数风格");
	})();

	//(x)代表函数声明，()可以省略，{}代表函数体
	var map = [1, 2, 3].map(function (x) {
	    return x * x;
	});

	console.log(map);
	//{}可以省略，直接使用以下写法
	console.log([1, 2, 3].map(function (x, y) {
	    return x * y;
	}));

	//函数定义
	var method = function method(a, b, c) {
	    console.log(this, a, b, c);
	};

	//箭头函数取代Function.prototype.bind，不应再用self/_this/that绑定 this。
	var testMethod = function testMethod() {
	    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
	        params[_key] = arguments[_key];
	    }

	    return method.apply({}, params);
	};
	testMethod(1, 2, 3);

/***/ }
/******/ ]);