import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Footer } from './components/footer/footer'
import './index.css'
import 'semantic-ui-css/semantic.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Footer/> 
  </React.StrictMode>,
)
