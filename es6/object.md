### 属性名表达式
JavaScript语言定义对象的属性，有两种方法。

如果使用字面量方式定义对象（使用大括号），在ES5中只能使用方法一（标识符）定义属性。

	var obj = {
	  foo: true,
	  abc: 123
	};

ES6允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

	let propKey = 'foo';
	
	let obj = {
	  [propKey]: true,
	  ['a' + 'bc']: 123
	};
下面是另一个例子。

	var lastWord = 'last word';
	
	var a = {
	  'first word': 'hello',
	  [lastWord]: 'world'
	};
	
	a['first word'] // "hello"
	a[lastWord] // "world"
	a['last word'] // "world"
表达式还可以用于定义方法名。

	let obj = {
	  ['h'+'ello']() {
	    return 'hi';
	  }
	};
	
	obj.hello() // hi
注意，属性名表达式与简洁表示法，不能同时使用，会报错。

	// 报错
	var foo = 'bar';
	var bar = 'abc';
	var baz = { [foo] };
	
	// 正确
	var foo = 'bar';
	var baz = { [foo]: 'abc'};
### 方法的name属性
函数的name属性，返回函数名。对象方法也是函数，因此也有name属性。

	var person = {
	  sayName() {
	    console.log(this.name);
	  },
	  get firstName() {
	    return "Nicholas";
	  }
	};
	
	person.sayName.name   // "sayName"
	person.firstName.name // "get firstName"
上面代码中，方法的name属性返回函数名（即方法名）。如果使用了取值函数，则会在方法名前加上get。如果是存值函数，方法名的前面会加上set。

有两种特殊情况：bind方法创造的函数，name属性返回“bound”加上原函数的名字；Function构造函数创造的函数，name属性返回“anonymous”。

	(new Function()).name // "anonymous"
	
	var doSomething = function() {
	  // ...
	};
	doSomething.bind().name // "bound doSomething"
如果对象的方法是一个Symbol值，那么name属性返回的是这个Symbol值的描述。

	const key1 = Symbol('description');
	const key2 = Symbol();
	let obj = {
	  [key1]() {},
	  [key2]() {},
	};
	obj[key1].name // "[description]"
	obj[key2].name // ""
上面代码中，key1对应的Symbol值有描述，key2没有。

### Object.is()
ES5比较两个值是否相等，只有两个运算符：相等运算符（==）和严格相等运算符（===）。它们都有缺点，前者会自动转换数据类型，后者的NaN不等于自身，以及+0等于-0。JavaScript缺乏一种运算，在所有环境中，只要两个值是一样的，它们就应该相等。

ES6提出“Same-value equality”（同值相等）算法，用来解决这个问题。Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

	Object.is('foo', 'foo')
	// true
	Object.is({}, {})
	// false
不同之处只有两个：一是+0不等于-0，二是NaN等于自身。

	+0 === -0 //true
	NaN === NaN // false
	
	Object.is(+0, -0) // false
	Object.is(NaN, NaN) // true
ES5可以通过下面的代码，部署Object.is。
	
	Object.defineProperty(Object, 'is', {
	  value: function(x, y) {
	    if (x === y) {
	      // 针对+0 不等于 -0的情况
	      return x !== 0 || 1 / x === 1 / y;
	    }
	    // 针对NaN的情况
	    return x !== x && y !== y;
	  },
	  configurable: true,
	  enumerable: false,
	  writable: true
	});
### Object.assign()
基本用法
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

	var target = { a: 1 };
	
	var source1 = { b: 2 };
	var source2 = { c: 3 };
	
	Object.assign(target, source1, source2);
	target // {a:1, b:2, c:3}
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

注意，如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

	var target = { a: 1, b: 1 };
	
	var source1 = { b: 2, c: 2 };
	var source2 = { c: 3 };
	
	Object.assign(target, source1, source2);
	target // {a:1, b:2, c:3}
如果只有一个参数，Object.assign会直接返回该参数。

	var obj = {a: 1};
	Object.assign(obj) === obj // true
如果该参数不是对象，则会先转成对象，然后返回。

	typeof Object.assign(2) // "object"
由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。

	Object.assign(undefined) // 报错
	Object.assign(null) // 报错
如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。

	let obj = {a: 1};
	Object.assign(obj, undefined) === obj // true
	Object.assign(obj, null) === obj // true
其他类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝入目标对象，其他值都不会产生效果。

	var v1 = 'abc';
	var v2 = true;
	var v3 = 10;

	var obj = Object.assign({}, v1, v2, v3);
	console.log(obj); // { "0": "a", "1": "b", "2": "c" }
上面代码中，v1、v2、v3分别是字符串、布尔值和数值，结果只有字符串合入目标对象（以字符数组的形式），数值和布尔值都会被忽略。这是因为只有字符串的包装对象，会产生可枚举属性。

	Object(true) // {[[PrimitiveValue]]: true}
	Object(10)  //  {[[PrimitiveValue]]: 10}
	Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}
上面代码中，布尔值、数值、字符串分别转成对应的包装对象，可以看到它们的原始值都在包装对象的内部属性[[PrimitiveValue]]上面，这个属性是不会被Object.assign拷贝的。只有字符串的包装对象，会产生可枚举的实义属性，那些属性则会被拷贝。

Object.assign拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。

	Object.assign({b: 'c'},
	  Object.defineProperty({}, 'invisible', {
	    enumerable: false,
	    value: 'hello'
	  })
	)
	// { b: 'c' }
上面代码中，Object.assign要拷贝的对象只有一个不可枚举属性invisible，这个属性并没有被拷贝进去。

属性名为Symbol值的属性，也会被Object.assign拷贝。

	Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
	// { a: 'b', Symbol(c): 'd' }
注意点
Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。

	var obj1 = {a: {b: 1}};
	var obj2 = Object.assign({}, obj1);
	
	obj1.a.b = 2;
	obj2.a.b // 2
上面代码中，源对象obj1的a属性的值是一个对象，Object.assign拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。

	var target = { a: { b: 'c', d: 'e' } }
	var source = { a: { b: 'hello' } }
	Object.assign(target, source)
	// { a: { b: 'hello' } }
上面代码中，target对象的a属性被source对象的a属性整个替换掉了，而不会得到{ a: { b: 'hello', d: 'e' } }的结果。这通常不是开发者想要的，需要特别小心。

有一些函数库提供Object.assign的定制版本（比如Lodash的_.defaultsDeep方法），可以解决浅拷贝的问题，得到深拷贝的合并。

注意，Object.assign可以用来处理数组，但是会把数组视为对象。

	Object.assign([1, 2, 3], [4, 5])
	// [4, 5, 3]
上面代码中，Object.assign把数组视为属性名为0、1、2的对象，因此目标数组的0号属性4覆盖了原数组的0号属性1。

#### 常见用途
Object.assign方法有很多用处。

（1）为对象添加属性

	class Point {
	  constructor(x, y) {
	    Object.assign(this, {x, y});
	  }
	}
上面方法通过Object.assign方法，将x属性和y属性添加到Point类的对象实例。

（2）为对象添加方法

	Object.assign(SomeClass.prototype, {
	  someMethod(arg1, arg2) {
	    ···
	  },
	  anotherMethod() {
	    ···
	  }
	});

	// 等同于下面的写法
	SomeClass.prototype.someMethod = function (arg1, arg2) {
	  ···
	};
	SomeClass.prototype.anotherMethod = function () {
	  ···
	};
上面代码使用了对象属性的简洁表示法，直接将两个函数放在大括号中，再使用assign方法添加到SomeClass.prototype之中。

（3）克隆对象

	function clone(origin) {
	  return Object.assign({}, origin);
	}
上面代码将原始对象拷贝到一个空对象，就得到了原始对象的克隆。

不过，采用这种方法克隆，只能克隆原始对象自身的值，不能克隆它继承的值。如果想要保持继承链，可以采用下面的代码。

	function clone(origin) {
	  let originProto = Object.getPrototypeOf(origin);
	  return Object.assign(Object.create(originProto), origin);
	}
（4）合并多个对象

将多个对象合并到某个对象。

	const merge =
	  (target, ...sources) => Object.assign(target, ...sources);
如果希望合并后返回一个新对象，可以改写上面函数，对一个空对象合并。

	const merge =
	  (...sources) => Object.assign({}, ...sources);
（5）为属性指定默认值

	const DEFAULTS = {
	  logLevel: 0,
	  outputFormat: 'html'
	};
	
	function processContent(options) {
	  options = Object.assign({}, DEFAULTS, options);
	}
上面代码中，DEFAULTS对象是默认值，options对象是用户提供的参数。Object.assign方法将DEFAULTS和options合并成一个新对象，如果两者有同名属性，则option的属性值会覆盖DEFAULTS的属性值。

注意，由于存在深拷贝的问题，DEFAULTS对象和options对象的所有属性的值，都只能是简单类型，而不能指向另一个对象。否则，将导致DEFAULTS对象的该属性不起作用。

属性的可枚举性
	对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
	
	let obj = { foo: 123 };
	Object.getOwnPropertyDescriptor(obj, 'foo')
	//  {
	//    value: 123,
	//    writable: true,
	//    enumerable: true,
	//    configurable: true
	//  }
描述对象的enumerable属性，称为”可枚举性“，如果该属性为false，就表示某些操作会忽略当前属性。

ES5有三个操作会忽略enumerable为false的属性。

- for...in循环：只遍历对象自身的和继承的可枚举的属性
- Object.keys()：返回对象自身的所有可枚举的属性的键名
- JSON.stringify()：只串行化对象自身的可枚举的属性
ES6新增了一个操作Object.assign()，会忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。

这四个操作之中，只有for...in会返回继承的属性。实际上，引入enumerable的最初目的，就是让某些属性可以规避掉for...in操作。比如，对象原型的toString方法，以及数组的length属性，就通过这种手段，不会被for...in遍历到。
	
	Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
	// false
	
	Object.getOwnPropertyDescriptor([], 'length').enumerable
	// false
上面代码中，toString和length属性的enumerable都是false，因此for...in不会遍历到这两个继承自原型的属性。

另外，ES6规定，所有Class的原型的方法都是不可枚举的。

	Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
	// false
总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用for...in循环，而用Object.keys()代替。

### 属性的遍历
ES6一共有5种方法可以遍历对象的属性。

- for...in

	for...in循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）。

- Object.keys(obj)

	Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）。

- Object.getOwnPropertyNames(obj)

	Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。

- Object.getOwnPropertySymbols(obj)

	Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有Symbol属性。

- Reflect.ownKeys(obj)

	Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举。

以上的5种方法遍历对象的属性，都遵守同样的属性遍历的次序规则。

1. 首先遍历所有属性名为数值的属性，按照数字排序。
2. 其次遍历所有属性名为字符串的属性，按照生成时间排序。
3. 最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
```
	Reflect.ownKeys({ [Symbol()]:0, b:0, 10:0, 2:0, a:0 })
	// ['2', '10', 'b', 'a', Symbol()]
```	
上面代码中，Reflect.ownKeys方法返回一个数组，包含了参数对象的所有属性。这个数组的属性次序是这样的，首先是数值属性2和10，其次是字符串属性b和a，最后是Symbol属性。

### __proto__属性，Object.setPrototypeOf()，Object.getPrototypeOf()
- __proto__属性

__proto__属性（前后各两个下划线），用来读取或设置当前对象的prototype对象。目前，所有浏览器（包括IE11）都部署了这个属性。

	// es6的写法
	var obj = {
	  method: function() { ... }
	};
	obj.__proto__ = someOtherObj;
	
	// es5的写法
	var obj = Object.create(someOtherObj);
	obj.method = function() { ... };
该属性没有写入ES6的正文，而是写入了附录，原因是__proto__前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的API，只是由于浏览器广泛支持，才被加入了ES6。标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

在实现上，__proto__调用的是Object.prototype.__proto__，具体实现如下。

	Object.defineProperty(Object.prototype, '__proto__', {
	  get() {
	    let _thisObj = Object(this);
	    return Object.getPrototypeOf(_thisObj);
	  },
	  set(proto) {
	    if (this === undefined || this === null) {
	      throw new TypeError();
	    }
	    if (!isObject(this)) {
	      return undefined;
	    }
	    if (!isObject(proto)) {
	      return undefined;
	    }
	    let status = Reflect.setPrototypeOf(this, proto);
	    if (!status) {
	      throw new TypeError();
	    }
	  },
	});
	function isObject(value) {
	  return Object(value) === value;
	}
如果一个对象本身部署了__proto__属性，则该属性的值就是对象的原型。

	Object.getPrototypeOf({ __proto__: null })
	// null
- Object.setPrototypeOf()

Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的prototype对象。它是ES6正式推荐的设置原型对象的方法。

	// 格式
	Object.setPrototypeOf(object, prototype)
	
	// 用法
	var o = Object.setPrototypeOf({}, null);
该方法等同于下面的函数。

	function (obj, proto) {
	  obj.__proto__ = proto;
	  return obj;
	}
下面是一个例子。

	let proto = {};
	let obj = { x: 10 };
	Object.setPrototypeOf(obj, proto);
	
	proto.y = 20;
	proto.z = 40;
	
	obj.x // 10
	obj.y // 20
	obj.z // 40
上面代码将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性。

- Object.getPrototypeOf()

该方法与setPrototypeOf方法配套，用于读取一个对象的prototype对象。

	Object.getPrototypeOf(obj);
下面是一个例子。

	function Rectangle() {
	}
	
	var rec = new Rectangle();
	
	Object.getPrototypeOf(rec) === Rectangle.prototype
	// true
	
	Object.setPrototypeOf(rec, Object.prototype);
	Object.getPrototypeOf(rec) === Rectangle.prototype
	// false
### Object.values()，Object.entries()
#### Object.keys()
ES5引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

	var obj = { foo: "bar", baz: 42 };
	Object.keys(obj)
	// ["foo", "baz"]
目前，ES7有一个提案，引入了跟Object.keys配套的Object.values和Object.entries。

	let {keys, values, entries} = Object;
	let obj = { a: 1, b: 2, c: 3 };
	
	for (let key of keys(obj)) {
	  console.log(key); // 'a', 'b', 'c'
	}
	
	for (let value of values(obj)) {
	  console.log(value); // 1, 2, 3
	}
	
	for (let [key, value] of entries(obj)) {
	  console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
	}
#### Object.values()
Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

	var obj = { foo: "bar", baz: 42 };
	Object.values(obj)
	// ["bar", 42]
返回数组的成员顺序，与本章的《属性的遍历》部分介绍的排列规则一致。

	var obj = { 100: 'a', 2: 'b', 7: 'c' };
	Object.values(obj)
	// ["b", "c", "a"]
上面代码中，属性名为数值的属性，是按照数值大小，从小到大遍历的，因此返回的顺序是b、c、a。

Object.values只返回对象自身的可遍历属性。

	var obj = Object.create({}, {p: {value: 42}});
	Object.values(obj) // []
上面代码中，Object.create方法的第二个参数添加的对象属性（属性p），如果不显式声明，默认是不可遍历的。Object.values不会返回这个属性。

Object.values会过滤属性名为Symbol值的属性。

	Object.values({ [Symbol()]: 123, foo: 'abc' });
	// ['abc']
如果Object.values方法的参数是一个字符串，会返回各个字符组成的一个数组。

	Object.values('foo')
	// ['f', 'o', 'o']
上面代码中，字符串会先转成一个类似数组的对象。字符串的每个字符，就是该对象的一个属性。因此，Object.values返回每个属性的键值，就是各个字符组成的一个数组。

如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组。

	Object.values(42) // []
	Object.values(true) // []
#### Object.entries
Object.entries方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

	var obj = { foo: 'bar', baz: 42 };
	Object.entries(obj)
	// [ ["foo", "bar"], ["baz", 42] ]
除了返回值不一样，该方法的行为与Object.values基本一致。

如果原对象的属性名是一个Symbol值，该属性会被省略。

	Object.entries({ [Symbol()]: 123, foo: 'abc' });
	// [ [ 'foo', 'abc' ] ]
上面代码中，原对象有两个属性，Object.entries只输出属性名非Symbol值的属性。将来可能会有Reflect.ownEntries()方法，返回对象自身的所有属性。

Object.entries的基本用途是遍历对象的属性。

	let obj = { one: 1, two: 2 };
	for (let [k, v] of Object.entries(obj)) {
	  console.log(`${JSON.stringify(k)}: ${JSON.stringify(v)}`);
	}
	// "one": 1
	// "two": 2
Object.entries方法的一个用处是，将对象转为真正的Map结构。

	var obj = { foo: 'bar', baz: 42 };
	var map = new Map(Object.entries(obj));
	map // Map { foo: "bar", baz: 42 }
自己实现Object.entries方法，非常简单。

	// Generator函数的版本
	function* entries(obj) {
	  for (let key of Object.keys(obj)) {
	    yield [key, obj[key]];
	  }
	}
	
	// 非Generator函数的版本
	function entries(obj) {
	  let arr = [];
	  for (let key of Object.keys(obj)) {
	    arr.push([key, obj[key]]);
	  }
	  return arr;
	}
