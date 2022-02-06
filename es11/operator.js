// 空值合并操作符（ ?? ）是一个逻辑操作符，当左侧的操作数为 null或者undefined时，返回其右侧操作数，否则返回左侧操作数。
const foo = undefined ?? "foo"
const bar = null ?? "bar"
console.log(foo) // foo
console.log(bar) // bar

const user = {
  address: {
      street: 'xx街道',
      getNum() {
          return '80号'
      }
  }
}

// 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
// ?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为 null 或者 undefined 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。
const street2 = user?.address?.street
const num2 = user?.address?.getNum?.()
console.log(street2, num2)

// ??与?.联合使用
let customer = {
  name: "jimmy",
  details: { age: 18 }
};
let customerCity = customer?.city ?? "成都";
console.log(customerCity); // "成都"