var p = Promise.reject('出错了');
// 等同于
//var p = new Promise((resolve, reject) => reject('出错了'))

p.catch( function (s){
    console.log(s)
});
// 出错了