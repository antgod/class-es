var obj={
    get name(){
        return this._name;
    },

    set name(val){
        this._name=val;
    }
};


obj.name='lhj';

console.log(obj.name);



Object.defineProperty(obj, "age", {
    get : function () {
        return this._age;
    },
    set : function (val) {
        this._age = val;
    }
});


obj.age=20;

console.log(obj.age);
