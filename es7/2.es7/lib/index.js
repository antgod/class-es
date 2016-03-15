"use strict";

let foo = (() => {
  var ref = _asyncToGenerator(function* () {
    var s = yield bar();
    console.log(s);
  });

  return function foo() {
    return ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function bar() {
  setTimeout(function () {}, 5000);
  return "bar";
}

foo();