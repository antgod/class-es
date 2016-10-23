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

	import mix from "../export/maxin.js";

	//定义类
	class Point {
	    //构造函数
	    constructor(x, y) {
	        this.x = x;
	        this.y = y;
	    }

	    //普通函数
	    toString() {
	        return '(' + this.x + ', ' + this.y + ')';
	    }
	    //构造方法
	    get prop() {
	        return 'getter测试';
	    }
	    set prop(value) {
	        console.log('setter测试 ', value);
	    }
	    //静态方法
	    static classMethod() {
	        return 'hello';
	    }
	}

	//合并
	Object.assign(Point.prototype, { //子类获取不到
	    a() {
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
	class ColorPoint extends Point {
	    constructor(...rest) {
	        //子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，
	        //而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
	        super(...rest); // 调用父类的constructor(x, y) ,如果子类没有定义constructor方法，这个方法会被默认添加
	        this.color = [].pop.call(rest);
	    }
	    toString() {
	        return this.color + ' ' + super.toString(); // 调用父类的toString()
	    }
	}

	let cp = new ColorPoint(25, 8, 'green');

	console.log("子类测试", cp.x, cp.y, cp.toString());

	console.log("子类类型测试", cp instanceof ColorPoint); // true
	console.log("子类类型测试", cp instanceof Point); // true

	console.log("子类类型测试", ColorPoint.__proto__ === Point); // true
	console.log("子类类型测试", ColorPoint.prototype.__proto__ === Point.prototype); // true


	//类混入
	class MixPoint {
	    test() {
	        return "MixPoint";
	    }
	}

	class NewPoint extends mix(Point, MixPoint) {}
	var newPoint = new NewPoint();
	console.log("混入类测试", newPoint.test());

/***/ }
/******/ ]);