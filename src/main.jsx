import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"



ReactDOM.render(    //ReactDOM.reder自React 18.0.0以来已弃用所以有提示，但是因为jiaminghi/data-view-react不支持react18，所以本项目使用react16.8
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
// ReactDOM.createRoot(document.getElementById('root')).render( <React.StrictMode>
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
// </React.StrictMode>);

