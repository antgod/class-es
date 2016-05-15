// 既然装饰器是函数，我当然可以用函数工厂了
function log(message) {
    return function() {
        console.log(message);
    }
}


@log('class Bar')
class Bar {
    @log('class method bar')
    bar() {}

    @log('class getter alice')
    get alice() {}

    @log('class property bob')
    bob = 1;
}


let bar = {
    @log('object method bar')
    bar() {}
};
