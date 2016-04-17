function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by lihongji on 16/3/15.
 */
var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        //throw new Error('aaa');
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = function () {
    var ref = _asyncToGenerator(function* () {
        try {
            //如果try在外面,则捕获不到异步异常,因为 asyncReadFile 是一个异步函数
            var f1 = yield readFile('../etc/a.json');
            var f2 = yield readFile('../etc/b.json');
            console.log(f1.toString());
            console.log(f2.toString());
        } catch (e) {
            console.log(e.stack); //可以捕获到异步异常
        }
    });

    return function asyncReadFile() {
        return ref.apply(this, arguments);
    };
}();
asyncReadFile();