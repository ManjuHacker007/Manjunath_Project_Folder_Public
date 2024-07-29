import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import First from './assets/components/first.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <First/>
  </React.StrictMode>,
)
