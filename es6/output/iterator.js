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

	
	//变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。
	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var arr1 = ['a', 'b', 'c'];
	var iter = arr1[Symbol.iterator]();

	console.log("迭代器", iter.next()); // { value: 'a', done: false }
	console.log("迭代器", iter.next()); // { value: 'b', done: false }
	console.log("迭代器", iter.next()); // { value: 'c', done: false }
	console.log("迭代器", iter.next()); // { value: undefined, done: true }

	var arr2 = ['red', 'green', 'blue'];
	var iterator = arr2[Symbol.iterator]();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = arr2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var v = _step.value;

	        console.log("for of遍历数组", v); // red green blue
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator['return']) {
	            _iterator['return']();
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
	    for (var _iterator2 = iterator[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var v = _step2.value;

	        console.log("for of遍历数组迭代器", v); // red green blue
	    }
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
	            _iterator2['return']();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}

	var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = engines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var e = _step3.value;

	        console.log("遍历set", e);
	    }
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3['return']) {
	            _iterator3['return']();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

	var es6 = new Map();
	es6.set("edition", 6);
	es6.set("committee", "TC39");
	es6.set("standard", "ECMA-262");
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
	    for (var _iterator4 = es6[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var _step4$value = _slicedToArray(_step4.value, 2);

	        var name = _step4$value[0];
	        var value = _step4$value[1];

	        console.log("遍历map", name + ": " + value);
	    }

	    //对象（Object）必须部署Iterator接口，才能使用，否则报错
	    //是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
	} catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion4 && _iterator4['return']) {
	            _iterator4['return']();
	        }
	    } finally {
	        if (_didIteratorError4) {
	            throw _iteratorError4;
	        }
	    }
	}

	var es6 = _defineProperty({
	    edition: 6,
	    committee: "TC39",
	    standard: "ECMA-262"
	}, Symbol.iterator, function () {
	    //必须部署了iterator接口后才能使用
	    var self = this;
	    var index = 0;
	    return {
	        next: function next() {
	            if (Object.keys(self)[index]) {
	                var ret = { value: Object.keys(self)[index], done: false };
	                index++;
	                return ret;
	            }
	            return { value: undefined, done: true };
	        }
	    };
	});

	for (var e in es6) {
	    console.log('for in遍历对象', e);
	}

	//对于普通的对象，for...of结构不能直接使用。
	var _iteratorNormalCompletion5 = true;
	var _didIteratorError5 = false;
	var _iteratorError5 = undefined;

	try {
	    for (var _iterator5 = es6[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	        var e = _step5.value;

	        console.log('for of遍历对象', e);
	    }
	} catch (err) {
	    _didIteratorError5 = true;
	    _iteratorError5 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion5 && _iterator5['return']) {
	            _iterator5['return']();
	        }
	    } finally {
	        if (_didIteratorError5) {
	            throw _iteratorError5;
	        }
	    }
	}

/***/ }
/******/ ]);