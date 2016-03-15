//ES6新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
//块级作用域可以随意嵌套，内层可以声明和外层同名变量，但是同层会报错，下面会演示
{
    let abc = 10;
    var b = 1;
}
//console.log("let a:"+typeof abc,"\nvar b:"+typeof b);


//for循环的计数器，就很合适使用let命令,防止命名冲突。
//let arr=[1];
//for(let i = 0; i < arr.length; i++){
//    console.log("数组循环,块级作用域内部："+typeof i);
//}
//console.log("数组循环,块级作用域外部："+i);

//测试一下延迟,把var换成let试试看
//for(var i = 0; i < 3; i++){
//    setTimeout(function(){
//        console.log("var 声明的变量:"+i);
//    },100);
//}

//for(let i = 0; i < 3; i++){
//    setTimeout(function(){
//        console.log("let 声明的变量"+i);
//    },100);
//}
//
//
//window.onload=function(){
//    var doms=document.querySelectorAll(".test");
//    //把下面的var换成let试试
//    for(let i=0;i<doms.length;i++){
//        doms[i].onclick=function(){
//            console.log(i)
//        }
//    }
//};


//
//
//不存在变量提升
//console.log("在不支持let的浏览器里不报错（编译成var）,所以均输出undefined");
//console.log("变量前置var foo:"+foo); // 输出undefined
//console.log("变量前置let foo:"+bar); // 报错ReferenceError

////
//var foo = 2;
//let bar = 2;
//
////暂时性死区
//console.log("在不支持let的浏览器里不报错（编译成var）");
//var tmp = 123;
//if (true) {
//    console.log(tmp1);    // ReferenceError
//    let tmp1=1;
//}
//
////不允许重复声明
// 打开注释，编译报错
//function a() {
//    let a = 10;
////    var a = 1;
//    let a = 1;
//}
