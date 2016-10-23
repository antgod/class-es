console.log("-------函数扩展1---------");

//除了简洁，ES6的写法还有两个好处：首先，阅读代码的人，可以立刻意识到哪些参数是可以省略的，
//不用查看函数体或文档；其次，有利于将来的代码优化，即使未来的版本彻底拿掉这个参数，
//也不会导致以前的代码无法运行。
function Point(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

var p = new Point();
console.log("1.默认参数",p);

//参数变量是默认声明的，所以不能用let或const再次声明。打开注释，编译报错
//function foo(x = 5) {
//    let x = 1; // error
//    const x = 2; // error
//}


// 写法一
function m1({x = 0, y = 0} = {}) {
    console.log("2.m1:"+x,y);
}

// 写法二
function m2({x, y} = { x: 0, y: 0 }) {
    console.log("2.m2:"+x,y);
}

//// 函数没有参数的情况
m1(); // [0, 0]
m2(); // [0, 0]
//
// x和y都有值的情况
m1({x: 3, y: 8}); // [3, 8]
m2({x: 3, y: 8}); // [3, 8]
//
//// x有值，y无值的情况
m1({x: 3}); // [3, 0]
m2({x: 3}); // [3, undefined]
//
// x和y都无值的情况
m1({});// [0, 0];
m2({}); // [undefined, undefined]

//通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。
//如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
function f1(x = 1,y) {
    console.log("3.默认参数应该放在函数尾:"+x,y);
}

f1(); // [1, undefined]
f1(2); // [2, undefined])
//f(, 1) // 打开注释报错
f1(undefined, 1); // [1, 1]


//指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
console.log("4.参数个数:"+(function(a){}).length);// 1
console.log("4.参数个数:"+(function(a = 5){}).length); // 0
console.log("4.参数个数:"+(function(a, b, c = 5){}).length);// 2


var func1 = function () {};
//
// ES5
//console.log("函数name",func1.name); // ""
// ES6
console.log("5.函数名称",func1.name); // "func1"

//默认参数变化
let h = {a:1};
function f3(y = h) {
    h={a:2};
    console.log("6.默认参数变化:"+y.a);
}

f3(); // 1

//应用
//利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

//可以将参数默认值设为undefined，表明这个参数是可以省略的。
function foo2(optional = undefined) {
    console.log("参数可省略");
}

foo2();

function throwIfMissing() {
    throw new Error('参数不可省略');
}

function foo1(mustBeProvided = throwIfMissing()) {

}
//去掉参数运行报错
foo1();



