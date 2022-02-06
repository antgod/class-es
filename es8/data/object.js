// 获取值数组
var obj = {
  name: "jimmy",
  age: 18,
  height: 188,
};
console.log(Object.values(obj)); // [ 'jimmy', 18, 188 ]

// Object键值对转数组
var obj = {
  name: "jimmy",
  age: 18,
  height: 188,
};
console.log(Object.entries(obj)); // [ [ 'name', 'jimmy' ], [ 'age', 18 ], [ 'height', 188 ] ]
console.log(Object.entries([1, 2, 3])); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ] ]

// 获取属性描述
var obj = {
  name: "jimmy",
  age: 18,
};
var desc = Object.getOwnPropertyDescriptors(obj);
console.log(desc);  
