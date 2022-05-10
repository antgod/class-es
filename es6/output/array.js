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

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	console.log("-------数组扩展---------");

	var arrayLike = {
	    '0': 'a',
	    '1': 'b',
	    '2': 'c',
	    length: 3
	};

	// ES5的写法
	var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
	console.log("1.es5，json2array", arr1);

	// ES6的写法
	var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	console.log("1.es6，json2array", arr2);

	// NodeList对象
	var ps = document.querySelectorAll('script');
	Array.from(ps).forEach(function (p) {
	    console.log("2.NodeList转数组", p);
	});

	// arguments对象
	function foo() {
	    var args = Array.from(arguments);
	    console.log("2.参数列表转数组", args);
	}
	foo(1, 2, 3);

	//数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数
	var num = [1, 4, -5, 10].find(function (n) {
	    return n < 0;
	});
	console.log("3.find函数，找到第一个匹配元素" + num);

	//返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
	var findIndex = [1, 5, 10, 15].findIndex(function (value, index, arr) {
	    return value > 9;
	}); // 2

	console.log("4.findIndex函数，找到第一个匹配元素索引" + findIndex);

	//数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员）
	//，然后返回当前数组。也就是说，使用这个方法，会修改当前数组。
	//Array.prototype.copyWithin(target, start = 0, end = this.length)
	console.log("4.copyWithin函数，匹配end索引后的元素拷贝到start元素覆盖相应长度的元素", [1, 2, 3, 4, 5].copyWithin(0, 3));
	// [4, 5, 3, 4, 5]
	//上面代码表示将从3号位直到数组结束的成员（4和5），复制到从0号位开始的位置，结果覆盖了原来的1和2。

	//fill方法使用给定值，填充一个数组。
	console.log("4.fill函数填充：", ['a', 'b', 'c'].fill(7));
	console.log("4.fill函数填充：", new Array(3).fill(7));
	//fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
	console.log("4.fill函数填充：", ['a', 'b', 'c'].fill(7, 1, 2));
	//上面代码表示，fill方法从1号位开始，向原数组填充7，到2号位之前结束。

	//数组实例的entries()，keys()和values()
	//ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象，
	//可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

	console.log('------- entries,key --------');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = ['a', 'b'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var index = _step.value;

	        console.log(index);
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
	    for (var _iterator2 = ['a', 'b'].entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var _step2$value = _slicedToArray(_step2.value, 2);

	        var index = _step2$value[0];
	        var elem = _step2$value[1];

	        console.log(index, elem);
	    }

	    //如果不使用for...of循环，可以手动调用遍历器对象的next方法，进行遍历。
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

	var letter = ['a', 'b', 'c'];
	var entries = letter.entries();
	console.log(entries.next().value); // [0, 'a']
	console.log(entries.next().value); // [1, 'b']
	console.log(entries.next().value); // [2, 'c']

	console.log('------- entries,key end--------');

	console.log('------- 数组实例的includes --------');

	//数组实例的includes()
	//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。

	console.log([1, 2, 3].includes(2), [1, 2, 3].includes(4), [1, 2, NaN].includes(NaN));
	//该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。

	//[1, 2, 3].includes(3, 3);  // false
	//[1, 2, 3].includes(3, -1); // true

	//includes使用的是不一样的判断算法，就没有这个问题。
	console.log([NaN].includes(NaN));

	console.log('------- 数组实例的includes end--------');

	console.log('------- 空位 --------');
	//数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。

	console.log(Array(3));
	//上面代码中，Array(3)返回一个具有3个空位的数组。

	//注意，空位不是undefined，一个位置的值等于undefined，依然是有值的。空位是没有任何值，in运算符可以说明这一点。
	console.log(0 in [undefined, undefined, undefined]);
	console.log(0 in [,,,]);
	//上面代码说明，第一个数组的0号位置是有值的，第二个数组的0号位置没有值。
	//ES5对空位的处理，已经很不一致了，大多数情况下会忽略空位。
	console.log('------- 空位 end--------');

/***/ })
/******/ ]);