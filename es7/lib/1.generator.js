function* helloWorldGenerator() {
    console.log('代码块1');
    var a = yield 'hello';
    console.log('代码块2');
    console.log(a);
    var b = yield 'world';
    console.log('代码块3');
    console.log(b);
    return 'ending';
}

var hw = helloWorldGenerator();

//（1）遇到yield语句，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
//（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield语句。
//（3）如果没有再遇到新的yield语句，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
//（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。
console.log("1.1.generator返回", hw.next()); //执行代码块1,yield 'hello'
//yield句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值。
console.log("1.2.generator返回", hw.next("代码块2参数")); //执行代码块2,yield 'world'
console.log("1.3.generator返回", hw.next("代码块3参数")); //执行代码块3,return 'ending'
console.log("1.4.generator返回", hw.next()); //空指针

//每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。
//一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield语句。
//也可以说Generator生成了一系列的值，这也就是它的名称的来历（在英语中，generator这个词是“生成器”的意思）。
//yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。
function* gen() {
    yield 123 + 456;
}
var g = gen();
console.log("2.惰性求值", g.next());

//需要注意:
//1.yield语句不能用在普通函数中，否则会报错。
//2.yield语句如果用在一个表达式之中，必须放在圆括号里面。
//3.yield语句用作函数参数或赋值表达式的右边，可以不加括号。

//任意一个对象的Symbol.iterator方法，等于该对象的遍历器对象生成函数，调用该函数会返回该对象的一个遍历器对象。
//遍历器对象本身也有Symbol.iterator方法，执行后返回自身。
console.log("3.遍历器的Symbol.iterator属性", g[Symbol.iterator]() === g);

function* dataConsumer() {
    console.log('4.传递参数到函数内', (yield));
    console.log('4.传递参数到函数内', (yield));
    return 'result';
}

var genObj = dataConsumer();
genObj.next();
genObj.next('arg1');
genObj.next('arg2');

function* foo() {
    console.log(1);
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log('5.for of',v);
}