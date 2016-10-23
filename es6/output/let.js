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

	//ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

	//块级作用域可以随意嵌套，内层可以声明和外层同名变量，但是同层会报错，下面会演示
	{
	    let abc = 10;
	    var b = 1;
	}
	console.log("1.let a:" + typeof abc, "\nvar b:" + typeof b);

	//for循环的计数器，就很合适使用let命令,防止命名冲突。
	let arr = [1];
	for (let i = 0; i < arr.length; i++) {
	    console.log("2.数组循环,块级作用域内部：" + typeof i);
	}
	console.log("3.数组循环,块级作用域外部：" + i);

	//测试一下延迟,把var换成let试试看
	for (var i = 0; i < 3; i++) {
	    setTimeout(function () {
	        console.log("4.var 声明的变量:" + i);
	    }, 100);
	}

	for (let i = 0; i < 3; i++) {
	    setTimeout(function () {
	        console.log("5.let 声明的变量:" + i);
	    }, 100);
	}

	window.onload = function () {
	    var doms = document.querySelectorAll(".test");
	    //把下面的var换成let试试
	    for (let i = 0; i < doms.length; i++) {
	        doms[i].onclick = function () {
	            console.log('defer.let 变量声明:' + i);
	        };
	    }
	};

	//不存在变量提升
	console.log("6.在不支持let的浏览器里不报错（编译成var）,所以均输出undefined");
	console.log("6.变量前置var foo:" + foo); // 输出undefined
	console.log("6.变量前置let foo:" + bar); // 报错ReferenceError

	//声明变量
	var foo = 2;
	let bar = 2;

	//暂时性死区
	console.log("7.在不支持let的浏览器里不报错（编译成var）");
	var tmp = 123;
	if (true) {
	    console.log("7.不存在提升:" + tmp1); // ReferenceError
	    let tmp1 = 1;
	}

	//不允许重复声明
	//打开注释，编译报错
	function a() {
	    let a = 10;
	    //var a = 1;
	    //let a = 1;
	}

/***/ }
/******/ ]);