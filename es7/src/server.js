/**
 * Created by lihongji on 16/3/13.
 */

var koa = require('koa');
var app = koa();
var koaBody = require('koa-body');
app.use(koaBody({formidable:{uploadDir: __dirname}}));

// response
app.use(function *(){

    this.req.on("data",function(data){
        console.log(data.toString());
    })

    //console.log(this.request.body);
    //
    //var request=this.request;
    //if(request.url=="/a"){
    //    this.body = `{
    //      a:'aaaaa'
    //    }`;
    //    return ;
    //}else if(request.url=="/b"){
    //    this.body = `{
    //      b:'bbbbb'
    //    }`;
    //    return ;
    //}
    //this.body = 'other';
});


app.listen(8080);