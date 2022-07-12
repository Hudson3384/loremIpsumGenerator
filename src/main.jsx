import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home'
import './styles/Generic/reset.css'
import './styles/Elements/base.css'
import './styles/Settings/fonts.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
