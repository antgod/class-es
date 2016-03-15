console.log("-------字符串扩展---------");

//var name = 1, time = 2;
//console.log(`Hello ${ if(name)name}, how are you ${time}?`);

var data={supplies:[1,2,3]};
var template = `
<ul>
  <% for(var i=0; i < data.supplies.length; i++) {%>
    <li><%= data.supplies[i] %></li>
  <% } %>
</ul>
`;
//
function compile(template){
    var evalExpr = /<%=(.+?)%>/g;
    var expr = /<%([\s\S]+?)%>/g;

    template = template
        .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
        .replace(expr, '`); \n $1 \n  echo(`');

    template = 'echo(`' + template + '`);';

    var script =
        `(function parse(data){
    var output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

    return script;
}
//
//
var parse = eval(compile(template));
console.log(parse({ supplies: [ "broom", "mop", "cleaner" ] }));
//
//
//console.log("-------数组扩展---------");
//
//var arrayLike = {
//    '0': 'a',
//    '1': 'b',
//    '2': 'c',
//    length: 3
//};
//
//// ES5的写法
//var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
//console.log("es5，json2array",arr1);
//
//// ES6的写法
//var arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
//console.log("es6，json2array",arr2);
//
//
//// NodeList对象
//let ps = document.querySelectorAll('script');
//Array.from(ps).forEach(function (p) {
//    console.log("脚本标签",p);
//});
//
//// arguments对象
//function foo() {
//    var args = Array.from(arguments);
//    console.log("参数列表",args);
//}
//foo(1,2,3);
//
////数组实例的find方法，用于找出第一个符合条件的数组成员。它的参数是一个回调函数
//var num=[1, 4, -5, 10].find((n) => n < 0);
//console.log("find函数，找到第一个匹配元素"+num);