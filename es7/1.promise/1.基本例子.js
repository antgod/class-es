

var promise = new Promise(function(resolve, reject) {

    setTimeout(e=>{
        /* 异步操作成功 */
        if (Math.floor(Math.random()*2)){
            resolve('操作成功');
        } else {        /*操作失败*/
            reject('操作失败');
        }
    },500);
});

promise.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});