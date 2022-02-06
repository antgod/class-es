const obj = {
  name: 'jimmy',
  age: 18
}

// 转数组
const entries = Object.entries(obj)
console.log(entries)

// 转对象
const fromEntries = Object.fromEntries(entries)
console.log(fromEntries)

// 过滤
const course = {
  math: 80,
  english: 85,
  chinese: 90
}
const res = Object.entries(course).filter(([key, val]) => val > 80)
console.log(res) // [ [ 'english', 85 ], [ 'chinese', 90 ] ]
console.log(Object.fromEntries(res)) // { english: 85, chinese: 90 }

// 扁平化
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());  //  [0, 1, 2, 3, 4]
const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(2));  //  [0, 1, 2, [3, 4]]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// `flat()` 方法会移除数组中的空项:
var arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

// 扁平化操作
const numbers = [1, 2, 3]
numbers.map(x => [x * 2]) // [[2], [4], [6]]
console.log(numbers.flatMap(x => [x * 2])); 

// Symbol description
const name = Symbol('es')
console.log(name.description) // es
name.description = "es2" // 只读属性 并不能修改描述符
console.log(name.description === 'es') // true
// 如果没有描述符 输入undefined
const s2 = Symbol()
console.log(s2.description) // undefined

// trimStart
var str = '   foo  '
console.log(str.length) // 8
str = str.trimStart() // 或str.trimLeft()
console.log(str.length) // 5

// trimEnd
var str = '   foo  '
console.log(str.length) // 8
str = str.trimEnd() // 或str.trimRight()
console.log(str.length) // 6