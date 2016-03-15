'use strict';

var co = require('co');
var fs = require("fs");

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var gen = function* () {
    var f1 = yield readFile('../etc/a.json');
    var f2 = yield readFile('../etc/b.json');
    console.log(f1.toString());
    console.log(f2.toString());
};

co(gen).then(function () {
    console.log('Generator 函数执行完成');
}, function (err) {
    console.log(err);
});