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

	"use strict";

	console.log("-------函数扩展2---------");

	//函数定义

	//var f1=x=>x;
	//等同于
	//var f = function(x) {return x;};

	//var f2 = () => 5;
	//// 等同于
	////var f = function (){ return 5 };
	//console.log("f2",f2());
	//
	//var f3 = (num1=0, num2=0) => num1 + num2;
	//// 等同于
	////var f3 = function(num1, num2) {
	////    return num1 + num2;
	////};
	//console.log("f3",f3(3,5));
	//
	////如果想返回{}，在外层套个()
	//var f4 = id => ({ id: id, name: "Temp" });
	//console.log("f4",f4(1));
	//
	//const full = ({ first, last }) => first + ' ' + last;
	//
	//// 等同于
	////function full( person ){
	////    return person.first + ' ' + person.last;
	////}
	//
	//
	////例子
	//
	//// 正常函数写法
	//[1,2,3].map(function (x) {
	//    return x * x;
	//});
	//
	//// 箭头函数写法
	//console.log("简化回调",[1,2,3].map(x => x * x));
	//
	//
	//var values=[4,2,3];
	//// 正常函数写法
	//var result = values.sort(function(a, b) {
	//    return a - b;
	//});
	//
	//// 箭头函数写法
	//var result = values.sort((a, b) => a - b);
	//console.log("箭头实现排序",result);
	//
	//
	////rest
	////rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
	//function add(...values) {
	//    let sum = 0;
	//
	//    for (var val of values) {
	//        sum += val;
	//    }
	//
	//    return sum;
	//}
	//
	//console.log("rest",add(2, 5, 3));   //10
	//
	//
	//function push(array, ...items) {
	//    items.forEach(function(item) {
	//        array.push(item);
	//        console.log(item);
	//    });
	//
	//}
	//
	//var a = [];
	//push(a, 1, 2, 3);
	//console.log("数组合并",a);
	//
	//// 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
	//// 打开注释
	////function f(a, ...b, c) {
	////}
	//
	////函数的length属性，不包括rest参数。
	////(function(a) {}).length  // 1
	////(function(...a) {}).length  // 0
	////(function(a, ...b) {}).length  // 1
	//
	//
	////扩展运算符（spread）是三个点（...）。
	//// 它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
	console.log.apply(console, ["扩展运算符"].concat([1, 2, 3]));
	//
	//var args=[1, 2, 3,4,5,6];
	//var fn5=(...item) => {console.log("扩展运算符与rest求和",eval(item.join("+")))};     //将参数列表转成数组
	//fn5(...args); //将实参转成1,2,3
	//
	//var arr1 = [0, 1, 2];
	//var arr2 = [3, 4, 5];
	//Array.prototype.push.apply(arr1, arr2);
	//console.log("es5数组合并："+arr1);
	//
	//var arr1 = [0, 1, 2];
	//var arr2 = [3, 4, 5];
	//arr1.push(...arr2);
	//console.log("es6数组合并："+arr1);
	//
	//var arr1 = ['a', 'b'];
	//var arr2 = ['c',"d"];
	//var arr3 = ['d', 'e'];
	//console.log("es6数组合并2："+[...arr1, ...arr2, ...arr3]);
	//
	//var list=[1,3,4,5,6];
	//// ES5
	//var a = list[0], rest = list.slice(1);
	//console.log("数组切分,es5",a,rest);
	//// ES6
	//[a, ...rest] = list;
	//console.log("数组切分,es6",a,rest);
	//
	//
	////数组转换
	//var obj = {"0":1, 1: 2,length:2};
	//let arr = [...obj]; // TypeError: Cannot spread non-iterable object
	//console.log("obj2arr",arr);

	var a = function a() {
	   for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
	      rest[_key] = arguments[_key];
	   }

	   console.log(rest);
	};

	var b = [1, 2, 3];

	a.apply(undefined, b);

/***/ }
/******/ ]);