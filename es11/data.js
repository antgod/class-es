// BigInt 是一种内置对象，它提供了一种方法来表示大于 2的53次方 \- 1 的整数。
const bigInt = 9007199254740993n
console.log(bigInt)
console.log(typeof bigInt) // bigint

// `BigInt` 和 [`Number`]不是严格相等的，但是宽松相等的。
console.log(1n == 1) // true
console.log(1n === 1) // false

const bigIntNum = BigInt(9007199254740993n)
console.log(bigIntNum)

// matchAll()  方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];
console.log(array[0]);  // ["test1", "e", "st1", "1"]
console.log(array[1]); // ["test2", "e", "st2", "2"]