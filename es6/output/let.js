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

	//ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

	//块级作用域可以随意嵌套，内层可以声明和外层同名变量，但是同层会报错，下面会演示
	"use strict";

	{
	    var _abc = 10;
	    var b = 1;
	}
	console.log("1.let a:" + typeof abc, "\nvar b:" + typeof b);

	//for循环的计数器，就很合适使用let命令,防止命名冲突。
	var arr = [1];
	for (var _i = 0; _i < arr.length; _i++) {
	    console.log("2.数组循环,块级作用域内部：" + typeof _i);
	}
	console.log("3.数组循环,块级作用域外部：" + i);

	//测试一下延迟,把var换成let试试看
	for (var i = 0; i < 3; i++) {
	    setTimeout(function () {
	        console.log("4.var 声明的变量:" + i);
	    }, 100);
	}

	var _loop = function (_i2) {
	    setTimeout(function () {
	        console.log("5.let 声明的变量:" + _i2);
	    }, 100);
	};

	for (var _i2 = 0; _i2 < 3; _i2++) {
	    _loop(_i2);
	}

	window.onload = function () {
	    var doms = document.querySelectorAll(".test");
	    //把下面的var换成let试试

	    var _loop2 = function (_i3) {
	        doms[_i3].onclick = function () {
	            console.log('defer.let 变量声明:' + _i3);
	        };
	    };

	    for (var _i3 = 0; _i3 < doms.length; _i3++) {
	        _loop2(_i3);
	    }
	};

	//不存在变量提升
	console.log("6.在不支持let的浏览器里不报错（编译成var）,所以均输出undefined");
	console.log("6.变量前置var foo:" + foo); // 输出undefined
	console.log("6.变量前置let foo:" + bar); // 报错ReferenceError

	//声明变量
	var foo = 2;
	var bar = 2;

	//暂时性死区
	console.log("7.在不支持let的浏览器里不报错（编译成var）");
	var tmp = 123;
	if (true) {
	    console.log("7.不存在提升:" + tmp1); // ReferenceError
	    var tmp1 = 1;
	}

	//不允许重复声明
	//打开注释，编译报错
	function a() {
	    var a = 10;
	    //var a = 1;
	    //let a = 1;
	}

/***/ })
/******/ ]);