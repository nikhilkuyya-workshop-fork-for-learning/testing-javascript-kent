import App from './app'
import ReactDOM from 'react-dom'
import React from 'react'

function init() {
  //   userName('mike')
  ReactDOM.render(
    <App firstname="hi" lastname="Hello" />,
    document.getElementById('app')
  )
}

init()
