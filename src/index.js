async function init() {
  const wasm = require('./main.rs')
  const module = await wasm.initialize({ noExitRuntime: true })
}

init()
