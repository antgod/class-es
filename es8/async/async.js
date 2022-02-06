'use strict';
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

var asyncReadFile = async function () {
  try {
    //如果try在外面,则捕获不到异步异常,因为 asyncReadFile 是一个异步函数
    var f1 = await readFile('../etc/a.json');
    var f2 = await readFile('../etc/b.json');
    console.log(f1.toString());
    console.log(f2.toString());
  } catch (e) {
    console.log(e.stack); //可以捕获到异步异常
  }
};

asyncReadFile();
