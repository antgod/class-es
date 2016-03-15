//对象解构赋值：

console.log("-------对象解构赋值---------");
var { bar, foo } = { foo: "aaa", bar: "bbb" };
console.log ('{ bar, foo } = { foo: "aaa", bar: "bbb" }',bar,foo);

//如果变量名与属性名不一致，必须写成下面这样。
var obj = { first: 'hello', last: 'world' };
var { first: f, last: l } = obj;
console.log ("{ first: 'hello', last: 'world' }",f,l);


//或者写成一行
var { aaa: a, bar: b } = { aaa: "aaa", bar: "bbb" };
console.log ('{ aaa: a, bar: b } = { aaa: "aaa", bar: "bbb" }',a,b);


//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
let { log, sin, cos } = Math;
console.log ('{ log, sin, cos } = Math',log,sin,cos);


//字符串解构赋值：
console.log("-------字符串解构赋值---------");
//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象
var [a, b, c, d, e] = 'hello';
console.log("[a, b, c, d, e] = 'hello'",a,b,c,d,e);
//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
var {length : len} = 'hello';
console.log("{length : len} = 'hello'",len);

//其他解构赋值：
console.log("-------其他解构赋值---------");
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
var {toString: s} = 123;
console.log("s === Number.prototype.toString",s === Number.prototype.toString);
var {toString: s} = true;
console.log("s === Boolean.prototype.toString",s === Number.prototype.toString);

//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
//let { prop: x } = undefined; // TypeError
//let { prop: y } = null; // TypeError


//函数参数解构赋值：
console.log("-------函数参数解构赋值---------");
function add([x, y]){
    return x + y;
}

console.log("add([1, 2])",add([1, 2]));

//试试以下两种写法的区别
function move({x = 0, y = 0} = {}) {
    console.log("{x = 0, y = 0} = {}",x,y);
}

move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

function move({x, y} = { x: 0, y: 0 }) {
    console.log("{x = 0, y = 0} = {}",x,y);
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]


//undefined就会触发函数参数的默认值。
var arr=[1, undefined, 3].map((x = 'yes') => x);
console.log(arr);