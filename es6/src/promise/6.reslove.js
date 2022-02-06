//有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。
var p=Promise.resolve('foo')
// 等价于
//var p=new Promise(resolve => resolve('foo'));

p.then(data=>console.log(data));