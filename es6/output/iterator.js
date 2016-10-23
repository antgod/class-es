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

	
	console.log('----------遍历器对象----------');
	var makeIterator = function (arr) {
	    let i = 0;

	    return {
	        next: function (num = 0) {
	            num ? i = num : void 0;
	            return i >= arr.length ? { done: true, value: arr[i++] } : { done: false, value: arr[i++] };
	        }
	    };
	};

	var it = makeIterator([1, 2, 3]);

	console.log("1.原生模拟:", it.next());
	console.log("1.原生模拟:", it.next(2));
	console.log("1.原生模拟:", it.next());

	//变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。
	let arr1 = ['a', 'b', 'c'];
	let iterator = arr1[Symbol.iterator]();
	console.log("2.迭代器", iterator.next()); // { value: 'a', done: false }
	console.log("2.迭代器", iterator.next()); // { value: 'b', done: false }
	console.log("2.迭代器", iterator.next()); // { value: 'c', done: false }
	console.log("2.迭代器", iterator.next()); // { value: undefined, done: true }


	console.log('----------for of----------');
	var array = ['red', 'green', 'blue'];

	for (let v of array) {
	    console.log("3.for of遍历数组", v); // red green blue
	}

	var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
	for (var e of engines) {
	    console.log("4.遍历set", e);
	}

	var es6 = new Map();
	es6.set("edition", 6);
	es6.set("committee", "TC39");
	es6.set("standard", "ECMA-262");
	for (var [name, value] of es6) {
	    console.log("5.遍历map", name + ": " + value);
	}

	//对象（Object）必须部署Iterator接口，才能使用，否则报错
	//是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
	var es6 = {
	    edition: 6,
	    committee: "TC39",
	    standard: "ECMA-262",
	    [Symbol.iterator]() {
	        //必须部署了iterator接口后才能使用
	        const self = this;
	        let index = 0;
	        return {
	            next() {
	                if (Object.keys(self)[index]) {
	                    var ret = { value: es6[Object.keys(self)[index]], done: false };
	                    index++;
	                    return ret;
	                }
	                return { value: undefined, done: true };
	            }
	        };
	    }
	};

	//对于普通的对象，for...of结构不能直接使用。
	for (var e of es6) {
	    console.log('6.遍历对象', e);
	}

/***/ }
/******/ ]);