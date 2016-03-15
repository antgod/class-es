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

	//数组解构赋值：
	'use strict';

	console.log("-------数组解构赋值---------");
	//一一对应
	//var [a, b, c] = [1, 2, 3];
	//console.log ("[a, b, c] = [1, 2, 3]:",a,b,c);

	////一一对应
	//let [foo, [[bar], baz]] = [1, [[2], 3]];
	//console.log ("[foo, [[bar], baz]] = [1, [[2], 3]]:",foo,bar,baz);

	//
	////一一对应
	//let [ , , third] = [1, 2, 3];
	//console.log ("[ , , third] = [1, 2, 3]:",third);
	//
	////一一对应
	//let [x, , y] = [1, 2, 3];
	//console.log ("[x, , y] = [1, 2, 3]:",x,y);
	//
	////一对多
	//let [head,...tail] = [1, 2, 3, 4];
	//console.log ("[head,...tail] = [1, 2, 3, 4]:"+head,tail);

	//
	////多对一
	//let [l, m,n] = ['a',..."a"];
	//console.log ("[l, m, ...n] = ['a']:",l,m,n);
	//
	////映射不到,undefined
	//var [unhead] = [];
	//var [unhead1, unend] = [1];
	//console.log ("[unhead] = [],[unhead1, unend]:",unhead,unhead1,unend);
	//
	//
	////如果等号的右边不是数组，打开注释，编译报错
	////let [foo] = 1;
	////let [foo] = false;
	////let [foo] = NaN;
	////let [foo] = undefined;
	////let [foo] = null;
	////let [foo] = {};
	//
	//
	////解构赋值不仅适用于var命令，也适用于let和const命令。
	////var [v1, v2, ..., vN ] = array;
	////let [v1, v2, ..., vN ] = array;
	////const [v1, v2, ..., vN ] = array;
	//
	//
	//
	////对于Set结构，也可以使用数组的解构赋值。
	//let [o, p, q] = new Set([1, 2, 3]);
	//console.log ("[o, p, q] = new Set([1, 2, 3]):",o,p,q);
	//
	////解构赋值允许指定默认值。
	//var [defaultFoo = true] = [];
	//console.log ("[defaultFoo = true] = []:",defaultFoo);
	//
	var x = 'a';
	var _ref = null;
	var y = _ref === undefined ? 'b' : _ref;
	// x='a', y='b'
	console.log("[x, y = 'b'] = ['a',undefined]:", x, y);

/***/ }
/******/ ]);