1. Object对象

（1）继承相关方法：create(). getPrototypeOf()

（2）属性相关方法：defineProperty(). defineProperties(). getOwnPropertyDescriptor(). 
getOwnPropertyNames(). keys()

（3）防篡改方法：preventExtensions(). isExtensible(). seal(). isSealed(). freeze(). isFrozen()

2. Function对象

（1）添加了bind()方法。

（2）规范化了一个函数对象的属性caller，用于指向调用当前函数的函数的引用。

3. Array对象

（1）判断方法：添加了静态方法Array.isArray(obj)用于判断obj是否为一个Array对象的实例。

（2）索引方法：添加了两个用于查找指定项索引的方法indexOf()和lastIndexOf()。查找时使用全等（===）进行匹配。

（3）迭代方法：添加了every(). some(). forEach(). map(). filter()方法。

（4）缩小方法：添加了reduce()和reduceRight()方法。

4. String对象

添加了trim()方法。

5. JSON对象

添加了原生JSON内建对象。

6. Date对象

添加了Date.now(). Date.prototype.toJSON()等方法。

7. RegExp对象

在ES3中，使用正则表达式字面量时共享一个RegExp实例，而在ES5中，每次使用正则表达式字面量时都要创建新的RegExp实例，
就像使用RegExp构造函数一样。