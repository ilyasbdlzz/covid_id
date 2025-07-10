import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CovidProvider } from './context/CovidContext.jsx'
import GlobalStyle from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CovidProvider>
      <BrowserRouter>
        {/* Inject global styling here */}
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </CovidProvider>
  </React.StrictMode>
)
