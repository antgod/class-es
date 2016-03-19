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

	console.log("1.[x, y] = [y, x]", x, y);

	// 返回一个数组
	var f = function f() {
	    return { a: function a() {}, b: 2 };
	};

	var _f = f();

	var a = _f.a;
	var b = _f.b;

	console.log("2.函数返回值解构-数组：", a, b);

	//返回一个对象
	f = function () {
	    return {
	        foo: 1,
	        bar: 2
	    };
	};

	var _f2 = f();

	var foo = _f2.foo;
	var bar = _f2.bar;

	console.log("2.函数返回值解构-json：", foo, bar);

	// 参数是一组有次序的值
	f = function (_ref2) {
	    var _ref22 = _slicedToArray(_ref2, 3);

	    var x = _ref22[0];
	    var y = _ref22[1];
	    var z = _ref22[2];

	    console.log("3.函数参数解构-有序：", x, y, z);
	};
	f([1, 2, 3]);

	// 参数是一组无次序的值
	f = function (_ref3) {
	    var x = _ref3.x;
	    var y = _ref3.y;
	    var z = _ref3.z;

	    console.log("3.函数参数解构-无序：", x, y, z);
	};
	f({ z: 3, y: 2, x: 1 });

	var jsonData = {
	    id: 42,
	    status: "OK",
	    data: [867, 5309]
	};

	var id = jsonData.id;
	var status = jsonData.status;
	var number = jsonData.data;

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

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _step$value = _slicedToArray(_step.value, 2);

	        var key = _step$value[0];
	        var value = _step$value[1];

	        console.log("5.map键值对遍历", key, value);
	    }

	    // 获取键名
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

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	    for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _step2$value = _slicedToArray(_step2.value, 1);

	        var key = _step2$value[0];

	        console.log("6.map键遍历" + key);
	    }

	    // 获取键值
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	            _iterator2["return"]();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}

	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _step3$value = _slicedToArray(_step3.value, 1);

	        var value = _step3$value[0];

	        console.log("7.map值遍历" + value);
	    }

	    //加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
	    //const { SourceMapConsumer, SourceNode } = require("source-map");
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	            _iterator3["return"]();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

	//交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。

/***/ }
/******/ ]);