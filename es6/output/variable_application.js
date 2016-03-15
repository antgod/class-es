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

	//解构赋值应用：

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	var x = 1;
	var y = 2;
	var _ref = [y, x];
	x = _ref[0];
	y = _ref[1];

	console.log("[x, y] = [y, x]", x, y);

	// 返回一个数组
	var f = function f() {
	    return { a: function a() {}, b: 2 };
	};

	var _f = f();

	var a = _f.a;
	var b = _f.b;

	console.log("函数返回值解构-数组：", a, b);
	//
	////返回一个对象
	//f=function() {
	//    return {
	//        foo: 1,
	//        bar: 2
	//    };
	//};
	//var { foo, bar } = f();
	//console.log("函数返回值解构-json：",foo,bar);
	//
	//
	// 参数是一组有次序的值
	f = function (_ref2) {
	    var _ref22 = _slicedToArray(_ref2, 3);

	    var x = _ref22[0];
	    var y = _ref22[1];
	    var z = _ref22[2];

	    console.log("函数参数解构-有序：", x, y, z);
	};
	f([1, 2, 3]);
	//
	//// 参数是一组无次序的值
	f = function (_ref3) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var z = _ref3.z;

	    console.log("函数参数解构-无序：", x, y, z);
	};
	f({ z: 3, y: 2, x: 1 });
	//
	//var jsonData = {
	//    id: 42,
	//    status: "OK",
	//    data: [867, 5309]
	//};
	//
	//let { id, status, data: number } = jsonData;
	//
	//console.log("JSON解构："+id, status, number)
	//// 42, OK, [867, 5309]
	//
	//
	////默认值
	jQuery.ajax = function (url, _ref4)
	// ... more config
	{
	    var _ref4$async = _ref4.async;
	    var async = _ref4$async === undefined ? true : _ref4$async;
	    var _ref4$beforeSend = _ref4.beforeSend;
	    var beforeSend = _ref4$beforeSend === undefined ? function () {} : _ref4$beforeSend;
	    var _ref4$cache = _ref4.cache;
	    var cache = _ref4$cache === undefined ? true : _ref4$cache;
	    var _ref4$complete = _ref4.complete;
	    var complete = _ref4$complete === undefined ? function () {} : _ref4$complete;
	    var _ref4$crossDomain = _ref4.crossDomain;
	    var crossDomain = _ref4$crossDomain === undefined ? false : _ref4$crossDomain;
	    var _ref4$global = _ref4.global;
	    var global = _ref4$global === undefined ? true : _ref4$global;
	};
	//
	//
	//var map = new Map();
	//map.set('first', 'hello');
	//map.set('second', 'world');
	//
	//for (let [key, value] of map) {
	//    console.log("map键值对遍历",key,value);
	//}
	//
	//// 获取键名
	//for (let [key] of map) {
	//    console.log("map键遍历"+key);
	//}
	//
	//// 获取键值
	//for (let [,value] of map) {
	//    console.log("map值遍历"+value);
	//}
	//
	////加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
	////const { SourceMapConsumer, SourceNode } = require("source-map");
	//上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

	// ... do stuff

/***/ }
/******/ ]);