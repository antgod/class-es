/**
 * Created by lihongji on 16/3/15.
 */
var fs=require('fs');

var readFile=function(fileName){
    return new Promise(function (resolve, reject){
        fs.readFile(fileName, function(error, data){
            if (error) reject(error);
            resolve(data);
        });
    });
};

var asyncReadFile = async function (){
    var f1 = await readFile('../etc/a.json');
    var f2 = await readFile('../etc/b.json');
    console.log(f1.toString());
    console.log(f2.toString());
};


var result = asyncReadFile();