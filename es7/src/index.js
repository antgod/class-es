async function foo() {
  var s = await bar();
  console.log(s);
}

function bar() {
  setTimeout(function(){

  },5000)
  return "bar";
}

foo();