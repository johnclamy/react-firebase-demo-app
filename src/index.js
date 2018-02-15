import React from 'react'
import { render } from 'react-dom'

import './index.css'
import App from './App/App'
import registerServiceWorker from './utils/registerServiceWorker'

render(<App />, document.getElementById('root-container'))
registerServiceWorker()

if (module.hot) {
  module.hot.accept()
}
