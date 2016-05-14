//p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作。
//注意，这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是Pending，
//那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是Resolved或者Rejected，那么p2的回调函数将会立刻执行。
var p1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (Math.floor(Math.random()*2)){
            resolve('操作成功');
        } else {        /*操作失败*/
            reject('操作失败');
        }
    }, 2000);
});

var p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
});

p2.then(result =>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});

//上面代码中，p1是一个Promise，2秒之后变为rejected。p2的状态由p1决定，1秒之后，
//p2调用resolve方法，但是此时p1的状态还没有改变，因此p2的状态也不会变。又过了1秒，p1变为变为reject或者resolve，p2也跟着变为相应状态