// 欧美语言中，较长的数值允许每三位添加一个分隔符（通常是一个逗号），增加数值的可读性。比如，1000可以写作1,000。
let budget = 1_000;
console.log('budget === 10 ** 12', budget === 10 ** 3); 


// replaceAll: 浏览器环境下
// console.log('aabbcc'.replaceAll('b', 'x'));