//查找
var j = { a: 1 };
var a = [j];

//判断
console.log(Array.isArray(a));

//查找
console.log(a.indexOf(j));
console.log(a.lastIndexOf(j));

var b = [1, 2, 3, 4];

//迭代
var res = b.every(function (item, index, array) {
  console.log('item:' + item);
  console.log('index:' + index);
  console.log('array:' + array);
  //如果返回false,循环结束,如果有任意一项返回false,函数返回false,否则函数返回true
  return item < 3;
});
console.log(res);

var res = b.some(function (item, index, array) {
  console.log('item:' + item);
  console.log('index:' + index);
  console.log('array:' + array);
  //如果有任意一项返回true,函数返回true,否则函数返回false
  return item < 3;
});
console.log(res);

var res = b.filter(function (item, index, array) {
  //返回过滤结果
  return item > 2;
});

console.log(res);

var res = b.map(function (item, index, array) {
  //返回运算结果
  return item * 2;
});

console.log(res);

var res = b.reduce(function (last, next) {
  last[next] = Math.random();
  return last;
}, {});

console.log(res);

var res = b.reduceRight(function (last, next) {
  last.push(next);
  return last;
}, []);

console.log(res);

b.forEach(function (item, index, array) {
  console.log('item:' + item);
  console.log('index:' + index);
  console.log('array:' + array);
  //无返回
});
