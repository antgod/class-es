'use strict';

var fetch = require('node-fetch');

function* gen() {
    var url1 = 'http://localhost:8080/a';
    var url2 = 'http://localhost:8080/b';
    var result1 = yield fetch(url1);
    console.log(result1);
    var result2 = yield fetch(url2);
    console.log(result2);
}

var g = gen();

g.next().value.then(function (res) {
    return res.text();
}).then(function (data) {
    return g.next(data).value;
}).then(function (res) {
    return res.text();
}).then(function (data) {
    return g.next(data);
});