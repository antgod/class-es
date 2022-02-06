function countInstance(target) {
    let counter = new Map();

    console.log(target);
    return class extends target {
        constructor(...args) {
            super(...args);
            let count = counter.get(target) || 0;
            counter.set(target, count + 1);
        }

        setCount(count){
            counter.set(target,count);
        }

        getCount(){
            return counter.get(target);
        }

        static getInstanceCount() {
            return counter.get(target) || 0;
        }
    };
}


@countInstance
class Bob {
    // ...
}

new Bob();
new Bob();

console.log(Bob.getInstanceCount()); // 2

var b=new Bob();
b.setCount(15);
console.log(b.getCount());