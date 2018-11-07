// @flow

// using flowFixMe : React Hooks are supported by flow.
//$FlowFixMe
import React, { useState } from 'react'
export default App

function userName(initialName: string) {
  const [name, setName] = useState(initialName)
  return (
    <>
      <input
        name="name"
        value={name}
        onChange={evt => setName(evt.target.value)}
      />
      <p>{name}</p>
    </>
  )
}

type AppProps = {
  firstname: string,
  lastname: string
}

function App(props: AppProps) {
  return (
    <>
      <div>{userName(props.firstname)}</div>
      <div>{userName(props.lastname)}</div>
    </>
  )
}
