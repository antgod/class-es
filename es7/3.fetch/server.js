/**
 * Created by lihongji on 16/3/13.
 */
var fs=require('fs');
var koa = require('koa');
var app = koa();
//var koaBody = require('koa-body');
//app.use(koaBody({formidable:{uploadDir: __dirname}}));

app.use(function *(){
    var request=this.request;
    if(request.url=="/get"){
        this.body = {
          get:'aaaaa'
        };
        return ;
    }else if(request.url=="/post"){
        //console.log(this.request.body);
        this.req.on("data",function(data){  //koa body包装前
            console.log(data.toString());
        });
        this.body = {
          post:'bbbbb'
        };
        return ;
    }
    this.type = 'text/html; charset=utf-8';

    this.body = fs.readFileSync(`../3.fetch/${this.url}`);
});


app.listen(8080);