import App from '../app'
import { render } from 'react-testing-library'
import React from 'react'

test('render', () => {
  const { container } = render(<App firstname="nikhil" lastname="kuyya" />)
  expect(container.firstChild).toMatchSnapshot()
})
