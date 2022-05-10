var person = {
  name: 'John',
  _salary: 200,
};

Object.setPrototypeOf(person, {
  age: 'lhj',
})

console.log('person :>> ', Reflect.get(person, 'name'));
console.log('person :>> ', Reflect.get(person, 'age'));