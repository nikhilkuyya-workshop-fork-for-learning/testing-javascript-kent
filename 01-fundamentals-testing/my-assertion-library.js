global.test = async function test(title, callback) {
  try {
    await callback()
    // eslint-disable-next-line no-console
    console.log(`✓ ${title}`)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(`Χ ${title}`)
    // eslint-disable-next-line no-console
    console.error(err.message)
  }
}

global.expect = function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
