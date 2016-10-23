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

	console.log("-------对象扩展---------");

	//ES6允许在对象之中，只写属性名
	function f(x, y) {
	    return { x, y };
	}

	// 等同于
	//function f(x, y) {
	//    return {x: x, y: y};
	//}

	console.log("1.属性简写", f(1, 2)); // Object {x: 1, y: 2}


	//除了属性简写，方法也可以简写。
	var birth = '2000/01/01';
	var Person = {

	    name: '张三',

	    //等同于birth: birth
	    birth,

	    // 等同于hello: function ()...
	    hello() {
	        console.log('2.参数简写', this.birth);
	    }
	};
	Person.hello();

	//尤其在commonjs中
	//module.exports = {
	//    getItem,
	//    setItem,
	//    clear
	//};

	//get,set方法
	var cart = {
	    _wheels: 4,

	    get wheels() {
	        console.log('3.调用了get函数');
	        return this._wheels;
	    },

	    set wheels(value) {
	        if (value < this._wheels) {
	            console.log('3.调用了set函数,数值不在范围内');
	        }
	        this._wheels = value;
	    }
	};

	cart.wheels = 1;
	cart.wheels;

	var target = { a: 1 };
	var source1 = { b: 2 };
	var source2 = { c: 3 };

	Object.assign(target, source1, source2);

	console.log("对象合并", target);

/***/ }
/******/ ]);