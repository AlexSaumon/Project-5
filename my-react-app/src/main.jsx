import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './Pages/Home/App'
import HelloWorld from './Pages/else/helloWorld'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/hello-world" element={<HelloWorld />} />
        </Routes>
    </BrowserRouter>
)