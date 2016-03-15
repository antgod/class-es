'use strict';

function* gen(x) {
    var y = yield 2 * x;

    console.log("y作为参数传入:" + y);
    return 2 * y;
}

var g = gen(1);
console.log('x计算结果:' + g.next().value); // { value: 3, done: false }
console.log('y计算结果:' + g.next(5).value); // { value: undefined, done: true }