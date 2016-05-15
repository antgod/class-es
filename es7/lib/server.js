'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lihongji on 16/3/13.
 */

var koa = require('koa');
var app = koa();
var koaBody = require('koa-body');
app.use(koaBody({ formidable: { uploadDir: __dirname } }));

// response
app.use(_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:

                    this.req.on("data", function (data) {
                        console.log(data.toString());
                    });

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

                case 1:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

app.listen(8080);