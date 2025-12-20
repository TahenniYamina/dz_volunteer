import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import LoginApp from './pages/login/App.jsx'
import SignUpApp from './pages/sign up vlntr/App.jsx'
import SignUpOrgApp from './pages/sign up org/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/signup" element={<SignUpApp />} />
        <Route path="/signup-org" element={<SignUpOrgApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)