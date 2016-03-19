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
	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	console.log("-------数组解构赋值---------");
	//一一对应
	var a = 1;
	var b = 2;
	var c = 3;

	console.log("1.[a, b, c] = [1, 2, 3]:", a, b, c);

	//一一对应
	var foo = 1;
	var bar = 2;
	var baz = 3;

	console.log("2.[foo, [[bar], baz]] = [1, [[2], 3]]:", foo, bar, baz);

	//一一对应
	var _ref = [1, 2, 3];
	var third = _ref[2];

	console.log("3.[ , , third] = [1, 2, 3]:", third);

	//一一对应
	var _ref2 = [1, 2, 3];
	var x = _ref2[0];
	var y = _ref2[2];

	console.log("4.[x, , y] = [1, 2, 3]:", x, y);

	//一对多
	var head = 1;
	var tail = [2, 3, 4];

	console.log("5.[head,...tail] = [1, 2, 3, 4]:" + head, tail);

	//映射不到,undefined
	var _ref3 = [];
	var unhead = _ref3[0];
	var _ref4 = [1];
	var unhead1 = _ref4[0];
	var unend = _ref4[1];

	console.log("6.[unhead] = [],[unhead1, unend]:", unhead, unhead1, unend);

	//如果等号的右边不是数组，打开注释，编译报错
	//let [foo] = 1;
	//let [foo] = false;
	//let [foo] = NaN;
	//let [foo] = undefined;
	//let [foo] = null;
	//let [foo] = {};

	//解构赋值不仅适用于var命令，也适用于let和const命令。
	//var [v1, v2, ..., vN ] = array;
	//let [v1, v2, ..., vN ] = array;
	//const [v1, v2, ..., vN ] = array;

	//对于Set结构，也可以使用数组的解构赋值。

	var _ref5 = new Set([1, 2, 3]);

	var _ref52 = _slicedToArray(_ref5, 3);

	var o = _ref52[0];
	var p = _ref52[1];
	var q = _ref52[2];

	console.log("7.[o, p, q] = new Set([1, 2, 3]):", o, p, q);

	//解构赋值允许指定默认值。
	var _ref6 = [];
	var _ref6$0 = _ref6[0];
	var defaultFoo = _ref6$0 === undefined ? true : _ref6$0;

	console.log("8.[defaultFoo = true] = []:", defaultFoo);

	//var [x, y = 'b'] = ['a',null]; // x='a', y='b'
	//console.log ("[x, y = 'b'] = ['a',undefined]:",x,y);

/***/ }
/******/ ]);