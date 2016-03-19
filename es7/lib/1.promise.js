var readFile = require('fs-readfile-promise');

var fileA = "../etc/a.json";
var fileB = "../etc/b.json";

readFile(fileA).then(function (data) {
    console.log(data.toString());
}).then(function () {
    return readFile(fileB);
}).then(function (data) {
    console.log(data.toString());
}).catch(function (err) {
    console.log(err);
});