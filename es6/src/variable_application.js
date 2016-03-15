//解构赋值应用：

//上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。
var [x,y]=[1,2];
[x, y] = [y, x];

console.log("[x, y] = [y, x]",x,y);

// 返回一个数组
var f=function() {
    return {a:function(){},b:2};
};
var {a,b} = f();
console.log("函数返回值解构-数组：",a,b);
//
////返回一个对象
//f=function() {
//    return {
//        foo: 1,
//        bar: 2
//    };
//};
//var { foo, bar } = f();
//console.log("函数返回值解构-json：",foo,bar);
//
//
// 参数是一组有次序的值
f=function([x, y, z]) {
    console.log("函数参数解构-有序：",x, y, z);
};
f([1, 2, 3])
//
//// 参数是一组无次序的值
f=function({x, y, z}) {
    console.log("函数参数解构-无序：",x, y, z);
};
f({z: 3, y: 2, x: 1})
//
//var jsonData = {
//    id: 42,
//    status: "OK",
//    data: [867, 5309]
//};
//
//let { id, status, data: number } = jsonData;
//
//console.log("JSON解构："+id, status, number)
//// 42, OK, [867, 5309]
//
//
////默认值
jQuery.ajax = function (url, {
    async = true,
    beforeSend = function () {},
    cache = true,
    complete = function () {},
    crossDomain = false,
    global = true,
    // ... more config
    }) {
    // ... do stuff
};
//
//
//var map = new Map();
//map.set('first', 'hello');
//map.set('second', 'world');
//
//for (let [key, value] of map) {
//    console.log("map键值对遍历",key,value);
//}
//
//// 获取键名
//for (let [key] of map) {
//    console.log("map键遍历"+key);
//}
//
//// 获取键值
//for (let [,value] of map) {
//    console.log("map值遍历"+value);
//}
//
////加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
////const { SourceMapConsumer, SourceNode } = require("source-map");