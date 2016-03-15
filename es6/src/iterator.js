
//变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。
let arr1 = ['a', 'b', 'c'];
let iter = arr1[Symbol.iterator]();

console.log("迭代器",iter.next()); // { value: 'a', done: false }
console.log("迭代器",iter.next()); // { value: 'b', done: false }
console.log("迭代器",iter.next()); // { value: 'c', done: false }
console.log("迭代器",iter.next()); // { value: undefined, done: true }


var arr2 = ['red', 'green', 'blue'];
let iterator  = arr2[Symbol.iterator]();

for(let v of arr2) {
    console.log("for of遍历数组",v); // red green blue
}

for(let v of iterator) {
    console.log("for of遍历数组迭代器",v); // red green blue
}


var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
for (var e of engines) {
    console.log("遍历set",e);
}

var es6 = new Map();
es6.set("edition", 6);
es6.set("committee", "TC39");
es6.set("standard", "ECMA-262");
for (var [name, value] of es6) {
    console.log("遍历map",name + ": " + value);
}


//对象（Object）必须部署Iterator接口，才能使用，否则报错
//是因为对象的哪个属性先遍历，哪个属性后遍历是不确定的，需要开发者手动指定。
var es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262",
    [Symbol.iterator]() {         //必须部署了iterator接口后才能使用
        const self = this;
        let index = 0;
        return {
            next() {
                if(Object.keys(self)[index]){
                    var ret={ value:Object.keys(self)[index], done: false };
                    index++;
                    return ret;
                }
                return { value: undefined, done: true };
            }
        };
    }
};



for (var e in es6) {
    console.log('for in遍历对象',e);
}

//对于普通的对象，for...of结构不能直接使用。
for (var e of es6) {
    console.log('for of遍历对象',e);
}