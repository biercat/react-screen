import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(    //ReactDOM.reder自React 18.0.0以来已弃用，请改用createRoot
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
