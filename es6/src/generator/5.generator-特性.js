//每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。
//一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield语句。
//也可以说Generator生成了一系列的值，这也就是它的名称的来历（在英语中，generator这个词是“生成器”的意思）。
//yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。
function* gen() {
    yield  123 + 456;
}
var g=gen();
console.log("惰性求值",g.next());

//需要注意:
//1.yield语句不能用在普通函数中，否则会报错。
//2.yield语句如果用在一个表达式之中，必须放在圆括号里面。
//3.yield语句用作函数参数或赋值表达式的右边，可以不加括号。

//任意一个对象的Symbol.iterator方法，等于该对象的遍历器对象生成函数，调用该函数会返回该对象的一个遍历器对象。
//遍历器对象本身也有Symbol.iterator方法，执行后返回自身。
console.log("遍历器的Symbol.iterator属性",g[Symbol.iterator]()===g);