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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _exportMaxinJs = __webpack_require__(1);

	var _exportMaxinJs2 = _interopRequireDefault(_exportMaxinJs);

	//定义类

	var Point = (function () {
	    //构造函数

	    function Point(x, y) {
	        _classCallCheck(this, Point);

	        this.x = x;
	        this.y = y;
	    }

	    //合并

	    //普通函数

	    _createClass(Point, [{
	        key: 'toString',
	        value: function toString() {
	            return '(' + this.x + ', ' + this.y + ')';
	        }

	        //构造方法
	    }, {
	        key: 'prop',
	        get: function get() {
	            return 'getter测试';
	        },
	        set: function set(value) {
	            console.log('setter测试 ', value);
	        }

	        //静态方法
	    }], [{
	        key: 'classMethod',
	        value: function classMethod() {
	            return 'hello';
	        }
	    }]);

	    return Point;
	})();

	Object.assign(Point.prototype, { //子类获取不到
	    a: function a() {
	        return "x";
	    }
	});

	var point = new Point(1, 2);

	console.log("类函数测试", point.toString());
	console.log("类合并函数测试", point.a());
	console.log("类构造器", Point.prototype.constructor === Point);

	//另外，类的内部所有定义的方法，都是不可枚举的（enumerable）。
	console.log("可枚举属性", Object.keys(Point.prototype)); //只能获取到可枚举的属性
	console.log("所有属性", Object.getOwnPropertyNames(Point.prototype)); //可以获取到自身所有属性

	//与ES5一样，在Class内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
	point.prop = 123;
	console.log(point.prop);

	//Class之间可以通过extends关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多

	var ColorPoint = (function (_Point) {
	    _inherits(ColorPoint, _Point);

	    function ColorPoint() {
	        _classCallCheck(this, ColorPoint);

	        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	            rest[_key] = arguments[_key];
	        }

	        //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，
	        //而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
	        _get(Object.getPrototypeOf(ColorPoint.prototype), 'constructor', this).apply(this, rest); // 调用父类的constructor(x, y) ,如果子类没有定义constructor方法，这个方法会被默认添加
	        this.color = [].pop.call(rest);
	    }

	    _createClass(ColorPoint, [{
	        key: 'toString',
	        value: function toString() {
	            return this.color + ' ' + _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this); // 调用父类的toString()
	        }
	    }]);

	    return ColorPoint;
	})(Point);

	var cp = new ColorPoint(25, 8, 'green');

	console.log("子类测试", cp.x, cp.y, cp.toString());

	console.log("子类类型测试", cp instanceof ColorPoint); // true
	console.log("子类类型测试", cp instanceof Point); // true

	console.log("子类类型测试", ColorPoint.__proto__ === Point); // true
	console.log("子类类型测试", ColorPoint.prototype.__proto__ === Point.prototype); // true

	//类混入

	var MixPoint = (function () {
	    function MixPoint() {
	        _classCallCheck(this, MixPoint);
	    }

	    _createClass(MixPoint, [{
	        key: 'test',
	        value: function test() {
	            return "MixPoint";
	        }
	    }]);

	    return MixPoint;
	})();

	var NewPoint = (function (_mix) {
	    _inherits(NewPoint, _mix);

	    function NewPoint() {
	        _classCallCheck(this, NewPoint);

	        _get(Object.getPrototypeOf(NewPoint.prototype), 'constructor', this).apply(this, arguments);
	    }

	    return NewPoint;
	})((0, _exportMaxinJs2['default'])(Point, MixPoint));

	var newPoint = new NewPoint();
	console.log("混入类测试", newPoint.test());

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Created by lihongji on 2016/1/17.
	 */

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function mix() {
	    var Mix = function Mix() {
	        _classCallCheck(this, Mix);
	    };

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	            mixins[_key] = arguments[_key];
	        }

	        for (var _iterator = mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var mixin = _step.value;

	            copyProperties(Mix, mixin);
	            copyProperties(Mix.prototype, mixin.prototype);
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

	    return Mix;
	}

	function copyProperties(target, source) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = Object.getOwnPropertyNames(source)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var key = _step2.value;

	            if (key !== "constructor" && key !== "prototype" && key !== "name") {
	                var desc = Object.getOwnPropertyDescriptor(source, key);
	                Object.defineProperty(target, key, desc);
	            }
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
	}

	exports["default"] = mix;
	module.exports = exports["default"];

/***/ }
/******/ ]);