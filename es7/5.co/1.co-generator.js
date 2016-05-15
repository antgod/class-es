var co=require('co');

function getA () {
    return new Promise(function (resolve, reject){
        setTimeout(()=>resolve('A'),1000);
    });
}

function getB () {
    return new Promise(function (resolve, reject){
        setTimeout(()=>resolve('B'),1000);
    });
}

var gen=function * () {
    var a = yield getA();
    var b = yield getB();
    return a+b;
};

co(gen).then(function (value) {
    console.log(value);
}, function (err) {
    console.error(err.stack);
});

//Convert a generator into a regular function that returns a Promise.
var fn = co.wrap(function* () {           //此时getA,getB函数都不会执行
    var a = yield getA();
    return yield getB();
});

fn(true).then(function (val) {
    console.log(val)
});