/**
 * Created by lihongji on 16/3/13.
 */

var koa = require('koa');
var app = koa();


// response
app.use(function *(){
    var request=this.request;
    if(request.url=="/a"){
        this.body = `{
          a:'aaaaa'
        }`;
        return ;
    }else if(request.url=="/b"){
        this.body = `{
          b:'bbbbb'
        }`;
        return ;
    }
    this.body = 'other';
});


app.listen(8080);