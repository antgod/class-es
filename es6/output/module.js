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
/***/ (function(module, exports, __webpack_require__) {

	//使用export命令定义了模块的对外接口以后，
	//其他JS文件就可以通过import命令加载这个模块（文件）。

	//逐一加载
	'use strict';

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exportExport = __webpack_require__(2);

	var _exportExport2 = _interopRequireDefault(_exportExport);

	//整体加载
	//除了指定加载某个输出值，还可以使用整体加载
	//即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

	var person = _interopRequireWildcard(_exportExport);

	//默认加载
	//用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法,这时候我们需要默认加载。

	var _exportExport3 = _interopRequireDefault(_exportExport);

	// 'foo'

	//模块继承

	var _exportCircleplus = __webpack_require__(3);

	var math = _interopRequireWildcard(_exportCircleplus);

	console.log("姓名测试：", _exportExport.firstName, _exportExport.lastName, _exportExport.year);
	console.log("姓名测试：", person.firstName, person.lastName, person.year);
	(0, _exportExport3['default'])();
	console.log("继承测试", math.area(2));

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	//就必须使用export关键字输出该变量。下面是一个JS文件，里面使用export命令输出变量。
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var firstName = 'Michael';
	exports.firstName = firstName;
	var lastName = 'Jackson';
	exports.lastName = lastName;
	var year = 1958;

	exports.year = year;
	//export default function () {
	//    console.log('默认导出测试');
	//}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	//export * from 'circle';       //全部继承
	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _circle = __webpack_require__(4);

	Object.defineProperty(exports, 'area', {
	    enumerable: true,
	    get: function get() {
	        return _circle.circleArea;
	    }
	});
	//改名

	exports['default'] = function (x) {
	    return Math.exp(x);
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/**
	 * Created by lihongji on 2016/1/24.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var circleArea = function circleArea() {
	  var r = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	  return Math.PI * r * r;
	};
	exports.circleArea = circleArea;

/***/ })
/******/ ]);