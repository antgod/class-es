//JSON
var json = { a: 1, b: 2 };

var jsonStr = JSON.stringify(json);

var json2 = JSON.parse(jsonStr);

console.log('Json:' + jsonStr, json);

//字符串
var trim = ' a ';
console.log('字符串：[' + trim.trim() + ']');

//时间
console.log('当前时间：' + Date.now());
console.log('当前时间：' + new Date().getTime());
console.log('当前时间：' + new Date().toJSON());

//数组
console.log('数组：' + ['Hello', 'javaScript', 'ECMAScript', 'HTML5'].indexOf('javaScript')); //1
//foreach Array 见 array.html

var arr1 = 'Charles,Mark,Bill,Vincent,William,Joseph'.split(',');
var arr2 = arr1.reduce(
  //叠加处理
  function (item, next, i) {
    //console.log(i);
    return item + '][' + next;
  }
);

console.log('[' + arr2 + ']');

//函数
function call() {
  fn();
}

function fn() {
  console.log('调用方法:', /function\s+(\w+)/.exec(fn.caller.toString())[1]);
}
call();

var fnbindobj = { a: 2 };
var a = 1;
function fnbind() {
  console.log('修改绑定：' + this.a);
}

var bind = fnbind.bind(fnbindobj);
bind();
