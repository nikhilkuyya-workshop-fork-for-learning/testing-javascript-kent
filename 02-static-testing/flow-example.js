// @flow

function add(a: number, b: number): number {
  return a + b
}

add(1, 2)
add(+'2', 3)
add(3, Number('3'))
