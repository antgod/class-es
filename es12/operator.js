// &&=
// &&=  等价于 x && (x = y); 仅在x为true赋值
// 浏览器环境

let a = 1;
let b = 0;

a &&= 2;
console.log(a); // 2

b &&= 2;
console.log(b);  // 0

// ||=
// x ||= y 仅在x为false赋值
// 浏览器环境

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration); // 50

a.title ||= 'title is empty.';
console.log(a.title); // "title is empty"

// ??=
// x ??=y 逻辑空赋值运算符 (x ??= y) 仅在 x 是 nullish[3] (null 或 undefined) 时对其赋值。
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration); // 50

a.speed ??= 25;
console.log(a.speed); // 25