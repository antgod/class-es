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
/***/ (function(module, exports) {

	"use strict";

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	console.log('----------???????????????----------');
	var makeIterator = function makeIterator(arr) {
	    var i = 0;

	    return {
	        next: function next() {
	            var num = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	            num ? i = num : void 0;
	            return i >= arr.length ? { done: true, value: arr[i++] } : { done: false, value: arr[i++] };
	        }
	    };
	};

	var it = makeIterator([1, 2, 3]);

	console.log("1.????????????:", it.next());
	console.log("1.????????????:", it.next(2));
	console.log("1.????????????:", it.next());

	//??????arr????????????????????????????????????????????????????????????arr???Symbol.iterator????????????????????????????????????????????????????????????????????????
	var arr1 = ['a', 'b', 'c'];
	var iterator = arr1[Symbol.iterator]();
	console.log("2.?????????", iterator.next()); // { value: 'a', done: false }
	console.log("2.?????????", iterator.next()); // { value: 'b', done: false }
	console.log("2.?????????", iterator.next()); // { value: 'c', done: false }
	console.log("2.?????????", iterator.next()); // { value: undefined, done: true }

	console.log('----------for of----------');
	var array = ['red', 'green', 'blue'];

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var v = _step.value;

	        console.log("3.for of????????????", v); // red green blue
	    }
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

	var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	    for (var _iterator2 = engines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var e = _step2.value;

	        console.log("4.??????set", e);
	    }
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

	var es6 = new Map();
	es6.set("edition", 6);
	es6.set("committee", "TC39");
	es6.set("standard", "ECMA-262");
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = es6[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _step3$value = _slicedToArray(_step3.value, 2);

	        var name = _step3$value[0];
	        var value = _step3$value[1];

	        console.log("5.??????map", name + ": " + value);
	    }

	    //?????????Object???????????????Iterator????????????????????????????????????
	    //???????????????????????????????????????????????????????????????????????????????????????????????????????????????
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

	var es6 = _defineProperty({
	    edition: 6,
	    committee: "TC39",
	    standard: "ECMA-262"
	}, Symbol.iterator, function () {
	    //???????????????iterator?????????????????????
	    var self = this;
	    var index = 0;
	    return {
	        next: function next() {
	            if (Object.keys(self)[index]) {
	                var ret = { value: es6[Object.keys(self)[index]], done: false };
	                index++;
	                return ret;
	            }
	            return { value: undefined, done: true };
	        }
	    };
	});

	//????????????????????????for...of???????????????????????????
	var _iteratorNormalCompletion4 = true;
	var _didIteratorError4 = false;
	var _iteratorError4 = undefined;

	try {
	    for (var _iterator4 = es6[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	        var e = _step4.value;

	        console.log('6.????????????', e);
	    }
	} catch (err) {
	    _didIteratorError4 = true;
	    _iteratorError4 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	            _iterator4["return"]();
	        }
	    } finally {
	        if (_didIteratorError4) {
	            throw _iteratorError4;
	        }
	    }
	}

/***/ })
/******/ ]);