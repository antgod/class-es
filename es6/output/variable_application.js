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

	//交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。
	var [x, y] = [1, 2];
	[x, y] = [y, x];

	console.log("1.[x, y] = [y, x]", x, y);

	// 返回一个数组
	var f = function () {
	    return { a: function () {}, b: 2 };
	};
	var { a, b } = f();
	console.log("2.函数返回值解构-数组：", a, b);

	//返回一个对象
	f = function () {
	    return {
	        foo: 1,
	        bar: 2
	    };
	};
	var { foo, bar } = f();
	console.log("2.函数返回值解构-json：", foo, bar);

	// 参数是一组有次序的值
	f = function ([x, y, z]) {
	    console.log("3.函数参数解构-有序：", x, y, z);
	};
	f([1, 2, 3]);

	// 参数是一组无次序的值
	f = function ({ x, y, z }) {
	    console.log("3.函数参数解构-无序：", x, y, z);
	};
	f({ z: 3, y: 2, x: 1 });

	var jsonData = {
	    id: 42,
	    status: "OK",
	    data: [867, 5309]
	};

	let { id, status, data: number } = jsonData;

	console.log("4.JSON解构：" + id, status, number);
	// 42, OK, [867, 5309]


	//默认值
	//jQuery.ajax = function (url, {
	//    async = true,
	//    beforeSend = function () {},
	//    cache = true,
	//    complete = function () {},
	//    crossDomain = false,
	//    global = true,
	//    // ... more config
	//    }) {
	//    // ... do stuff
	//};

	var map = new Map();
	map.set('first', 'hello');
	map.set('second', 'world');

	for (let [key, value] of map) {
	    console.log("5.map键值对遍历", key, value);
	}

	// 获取键名
	for (let [key] of map) {
	    console.log("6.map键遍历" + key);
	}

	// 获取键值
	for (let [value] of map) {
	    console.log("7.map值遍历" + value);
	}

	//加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
	//const { SourceMapConsumer, SourceNode } = require("source-map");

/***/ }
/******/ ]);