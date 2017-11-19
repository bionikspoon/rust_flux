import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

function init() {
  const wasm = require('./main.rs')
  wasm.initialize({ noExitRuntime: true }).then(Module => {
    console.log('Module', Module)
  })
}

init()
