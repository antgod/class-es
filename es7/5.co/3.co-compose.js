var co = require('co');
var middleware = [              //定义中间件数组
    function * (next) {
        console.log('函数1执行');
        yield next;
        console.log('函数1执行完毕');
    },
    function * (next) {
        console.log('函数2执行');
        yield next;
        console.log('函数2执行完毕');
    }
];

function compose(middleware) {        //合并中间件数组
    return function *(next) {
        if (!next){
            next = function * () {};
        }

        //此方式会依次执行中间件代码,不推荐
        //for (var item of middleware) {
        //    yield item.call(this, next);                //依次执行中间件代码
        //}

        var i = middleware.length;
        while (i--) {
            //返回generator构造器,并不执行generator函数
            next = middleware[i].call(this, next);        //把当前构造器传入下个中间件,构造器累加
        }

        return yield * next;                              //返回最后一个构造器
    }
}

var fn = co.wrap(compose(middleware));    //co.wrap,返回一个异步函数function *(next),函数不会执行
fn.call(this);                            //执行函数,一次执行中间件,并且返回最后一个中间件
