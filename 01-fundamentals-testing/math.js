const sum = (a, b) => a + b
const sub = (a, b) => a - b
const modsub = (a, b) => (a - b > 0 ? a - b : b - a)

const sumAsync = (a, b) => {
  let fn = sum.bind(null, a, b)
  return new Promise(function(resolve) {
    setTimeout(resolve(fn()), 1000)
  })
}

const subAsync = (a, b) => {
  const fn = sub.bind(null, a, b)
  const gen = function*() {
    yield fn()
  }
  return new Promise(function(resolve) {
    setTimeout(resolve(gen().next().value), 1000)
  })
}
const modsubAsync = (a, b) => {
  const fn = modsub.bind(null, a, b)
  return new Promise(function(resolve) {
    setTimeout(resolve(fn()), 1000)
  })
}

module.exports = {
  sum,
  sub,
  modsub,
  sumAsync,
  subAsync,
  modsubAsync
}
