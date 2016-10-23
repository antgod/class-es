console.log("-------箭头函数---------");

//箭头函数
var f=x=>x;
//等同于
//var f = function(x) {return x;};

var f1 = (num1=0, num2=0) => num1 + num2;
console.log("1.f1",f1(3,5));

//如果想返回{}，在外层套个()
var f2 = id => ({ id: id, name: "Temp" });
console.log("2.f2",f2(1));

//例子
console.log("3.简化回调",[1,2,3].map(x => x * x));
var result = [4,2,3].sort((a, b) => a - b);
console.log("4.箭头实现排序",result);


console.log("-------Rest参数---------");
//rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

console.log("5.rest:",add(2, 5, 3));   //10


function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

var a = [];
push(a, 1, 2, 3);
console.log("6.数组合并:",a);

// 注意，rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。
//函数的length属性，不包括rest参数。
console.log("7.参数长度:"+(function(a) {}).length);  // 1
console.log("7.参数长度:"+(function(...a) {}).length);  // 0
console.log("7.参数长度:"+(function(a, ...b) {}).length);  // 1


console.log("-------扩展运算符---------");
//扩展运算符（spread）是三个点（...）。
//它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。
console.log("8.扩展运算符",...[1, 2, 3]);

var extendFunction =(...rest)=>{
   console.log("8.扩展运算符"+rest);
};
extendFunction(...[1,2,3]);

var args=[1, 2, 3,4,5,6];
var fn5=(...item) => {console.log("9.扩展运算符与rest求和",eval(item.join("+")))};     //将参数列表转成数组
fn5(...args); //将实参转成1,2,3


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log("10.es6数组合并："+arr1);

var arr1 = ['a', 'b'];
var arr2 = ['c',"d"];
var arr3 = ['d', 'e'];
console.log("10.es6数组合并2："+[...arr1, ...arr2, ...arr3]);

var list=[1,3,4,5,6];
var [a, ...rest] = list;
console.log("11.数组切分,es6",a,rest);

//数组转换
var obj = {"0":1, 1: 2,length:2};
let arr = [...obj]; // TypeError: Cannot spread non-iterable object
console.log("12.数组转换",arr);





