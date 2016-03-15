'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Created by lihongji on 16/3/15.
 */
var fs = require('fs');

var readFile = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (error, data) {
            if (error) reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = (() => {
    var ref = _asyncToGenerator(function* () {
        var f1 = yield readFile('../etc/a.json');
        var f2 = yield readFile('../etc/b.json');
        console.log(f1.toString());
        console.log(f2.toString());
    });

    return function asyncReadFile() {
        return ref.apply(this, arguments);
    };
})();

var result = asyncReadFile();