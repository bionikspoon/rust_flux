import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

// async function init() {
//   const wasm = require('./main.rs')
//   const module = await wasm.initialize({ noExitRuntime: true })
// }
//
// init()
