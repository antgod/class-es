console.log("-------Symbol---------");

//ES5的对象属性名都是字符串，这容易造成属性名的冲突。这就是ES6引入Symbol的原因。
//ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型
var mySymbol = Symbol("aaaa");
var yourSymbol = Symbol("aaaa");

console.log("symbol类型",typeof mySymbol);

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
    [mySymbol]:"aaa",
    [yourSymbol]:"bbb"
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
//在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
//注意，不能用.操作符或者方括号加双引，这样都会访问字符串属性
console.log("输出Symbol",a[mySymbol] );// "Hello!"

let s = Symbol();
let obj = {
    [s](arg){}
};

console.log("输出Symbol属性",obj[s]);


//例子：消灭魔法字符串

//上面代码中，字符串“Triangle”就是一个魔术字符串。
// 它多次出现，与代码形成“强耦合”，不利于将来的修改和维护
//function getArea(shape, options) {
//    var area = 0;
//
//    switch (shape) {
//        case 'Triangle': // 魔术字符串
//            area = .5 * options.width * options.height;
//            break;
//        /* ... more code ... */
//    }
//
//    return area;
//}
//
//getArea('Triangle', { width: 100, height: 100 }); // 魔术字符串


//可以发现shapeType.triangle等于哪个值并不重要
//只要确保不会跟其他shapeType属性的值冲突即可。因此，这里就很适合改用Symbol值。
const shapeType = {
    triangle: Symbol()
};

function getArea(shape, options) {
    var area = 0;
    switch (shape) {
        case shapeType.triangle:
            area = .5 * options.width * options.height;
            break;
    }
    console.log("消灭魔法字符串",area);
}

getArea(shapeType.triangle, { width: 100, height: 100 });