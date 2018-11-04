const { sum, sub, modsub, sumAsync, subAsync, modsubAsync } = require('./math')

test('modsub validation', function checkmodsub() {
  const result = modsub(3, 4)
  const expected = 1
  expect(result).toBe(expected)
})

test('sub validation', async function checksub() {
  const result = await sub(4, 3)
  const expected = 1
  expect(result).toBe(expected)
})

test('sum validation', async function checkSum() {
  const result = await sum(3, 4)
  const expected = 7
  expect(result).toBe(expected)
})

test('async sum validation', async function checkAsyncSum() {
  const result = await sumAsync(3, 4)
  const expected = 7
  expect(result).toBe(expected)
})

test('async sub validation', async function checkAsyncSub() {
  const result = await subAsync(3, 4)
  const expected = -1
  expect(result).toBe(expected)
})

test('async modsub validation', async function checkAsyncModSub() {
  const result = await modsubAsync(3, 4)
  const expected = 1
  expect(result).toBe(expected)
})
