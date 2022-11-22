import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './app'
import './main.scss'

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
