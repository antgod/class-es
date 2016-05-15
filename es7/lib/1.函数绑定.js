"use strict";

var _context;

var log = (_context = console).log.bind(_context);
// equivalent to:
// let log = console.log.bind(console);

function bar(a, b) {
    return this.x * a + this.y * b;
}

var foo = {
    x: 1,
    y: 2
};

bar.call(foo, 2, 3); // => (1*2) + (2*3) = 8

//foo::bar(...arguments);
//// 等同于
//bar.apply(foo, arguments);

//const hasOwnProperty = Object.prototype.hasOwnProperty;
//function hasOwn(obj, key) {
//    return obj::hasOwnProperty(key);
//}