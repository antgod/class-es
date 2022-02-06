function TimeOut(time) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          resolve(time)
      }, time)
  })
}

async function test() {
  let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)]
  for await (let item of arr) {
      console.log(Date.now(), item)
  }
}
test()

new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve('success')
      // reject('fail')
  }, 1000)
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
}).finally(() => {
  console.log('finally')
})