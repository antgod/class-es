// 头部添加: padStart
console.log(
  'abc'.padStart(10), // "          abc"
  'abc'.padStart(10, 'foo'), // "foofoofabc"
  'abc'.padStart(6, '123465'), // "123abc"
  'abc'.padStart(8, '0'), // "00000abc"
  'abc'.padStart(1) // "abc"
);

// 尾部添加: padEnd，用法同padStart