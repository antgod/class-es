var input = {
  a: 1,
  b: 2,
  c: 3,
}

var output = {
  ...input,
  c: 4
}

console.log(output) // {a: 1, b: 2, c: 4}

var input = {
  a: 1,
  b: 2,
  c: 3
}

var { a, ...rest } = input

console.log(a, rest) // 1 {b: 2, c: 3}