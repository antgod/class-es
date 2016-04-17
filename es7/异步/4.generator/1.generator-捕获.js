function* helloWorldGenerator() {
    console.log('代码块1');

    setTimeout(function(){
        throw new Error('报错了');
    },1000);

    var a=yield 'hello';
    console.log('代码块2');
    //console.log(a);       //yield句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。
    var b=yield 'world';
    console.log('代码块3');
    console.log(b);
    return 'ending';
}

var hw = helloWorldGenerator();

//（1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
//（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
//（3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
//（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

try{
    console.log("1.generator返回",hw.next());             //执行代码块1,yield 'hello'
    console.log("2.generator返回",hw.next("代码块2参数"));  //执行代码块2,yield 'world'
    console.log("3.generator返回",hw.next("代码块3参数"));  //执行代码块3,return 'ending'
    console.log("4.generator返回",hw.next());             //空指针
}catch (e){
    console.log(e.stack);               //只能捕获同步异常
}

process.on('uncaughtException',function(){
    console.log(arguments); //可以捕获所有异常,但不建议使用,采用轮询机制,消耗内存过大
});






