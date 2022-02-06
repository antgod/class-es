/*
    https://msdn.microsoft.com/zh-cn/library/dn656907.aspx
    Object.getPrototypeOf:最后如果想要得到对象原型，可以用
    Object.getOwnPropertyDescriptor(object, propertyname):返回属性的定义
    Object.getOwnPropertyNames(object):返回所有属性的名称，哪怕说是不能枚举的属性
    Object.create(prototype, descriptors):以指定的原型创建对象，并且可以（可选）的设置对象的属性
    Object.defineProperty(object, propertyname, descriptor):对指定的对象的一个属性设置丰富的值控制
    Object.defineProperties(object, descriptors):对指定的对象的一组属性提供丰富的值控制
    Object.seal(object):不能添加和删除属性
    Object.freeze(object):防止现有属性和属性值的修改，并防止新特性的添加。
    Object.preventExtensions(object):防止新的属性添加到对象
    Object.isSealed(object):是否不能添加也不能删除属性
    Object.isFrozen(object):是否冻结对象
    Object.isExtensible(object):是否可添加属性到对象
    Object.keys:对象的键数组
*/

function Person() {
  Object.defineProperty(this, 'Name', {
    // 定义一个属性
    enumerable: true, //默认：不能迭代
    // configurable:false,   //不能删除
    // writable:false,		//不能重写
    // value:'lhj',       //属性值，不能与get,set同时使用
    set: function (name) {
      this.name = name;
    },
    get: function () {
      return 'My name is:' + this.name;
    },
  });
}
var lhj = new Person();
lhj.Name = 'lhj';

console.log(lhj.Name);

for (var i in lhj) {
  console.log(lhj[i]);
}
