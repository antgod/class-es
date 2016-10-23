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

	//使用export命令定义了模块的对外接口以后，
	//其他JS文件就可以通过import命令加载这个模块（文件）。

	//逐一加载
	import { firstName, lastName, year } from '../export/export';
	import a from '../export/export';

	console.log("姓名测试：", firstName, lastName, year);

	//整体加载
	//除了指定加载某个输出值，还可以使用整体加载
	//即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
	import * as person from '../export/export';
	console.log("姓名测试：", person.firstName, person.lastName, person.year);

	//默认加载
	//用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法,这时候我们需要默认加载。
	import customName from '../export/export';
	customName(); // 'foo'


	//模块继承
	import * as math from "../export/circleplus";
	console.log("继承测试", math.area(2));

/***/ }
/******/ ]);