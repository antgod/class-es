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

	var data = { supplies: ["broom", "mop", "cleaner"] };
	var template = "\n        <ul>\n          <% for(var i=0; i < data.supplies.length; i++) {%>\n            <li><%= data.supplies[i] %></li>\n          <% } %>\n        </ul>\n    ";

	var parse = eval(compile(template));
	console.log("1.原始字符串模板" + parse(data));

	var template = "<ul>" + (data.supplies ? data.supplies.map(function (item) {
	    return "<li>" + item + "</li>";
	}).join("") : "") + "<ul>";
	console.log("2.ES6字符串模板" + template);

	//原始字符串模板
	function compile(template) {
	    var evalExpr = /<%=(.+?)%>/g;
	    var expr = /<%([\s\S]+?)%>/g;

	    template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`').replace(expr, '`); \n $1 \n  echo(`');

	    template = 'echo(`' + template + '`);';

	    var script = "(function parse(data){\n    var output = \"\";\n\n    function echo(html){\n      output += html;\n    }\n\n    " + template + "\n\n    return output;\n  })";

	    return script;
	}

/***/ }
/******/ ]);