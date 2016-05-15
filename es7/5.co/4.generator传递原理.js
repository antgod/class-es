var co = require('co');
var A= function * (next) {
    console.log('函数1执行');
    yield next;
    console.log('函数1执行完毕');
};
var B = function * (next) {
    console.log('函数2执行');
    yield next;  //next是函数1的构造器
    console.log('函数2执行完毕');
};

var C=function * (){
    var next = function * () {};

    next = A(next);
    next = B(next);        //函数2执行,然后执行函数1的构造器,最后执行函数2

    yield * next;
};

co(C);


