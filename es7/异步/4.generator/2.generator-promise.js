function getDataByUrl() {
    var promise = new Promise((reslove, reject)=> {
        var randomNum = Math.floor(Math.random() * 10);
        setTimeout(()=> {
            if (randomNum > 5) {
                reject('访问时间过长');
            } else {
                reslove('后端返回数据:xxx');
            }
        }, randomNum)
    });
    return promise;
}

function* helloWorldGenerator() {
    var ret = yield getDataByUrl('num');
    ret.then((data)=> {
        console.log(data);
    }, (error)=> {
        console.log(error);
    });
}

var hw = helloWorldGenerator();
var process1 = hw.next();
hw.next(process1.value);


