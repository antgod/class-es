var http=require("http");

var server=http.createServer(waiter);

function waiter(req,rsp){
    rsp.setHeader('Access-Control-Allow-Credentials', "true");
    rsp.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});


    rsp.end("end");
}

server.listen(3000,"localhost");
