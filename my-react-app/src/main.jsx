import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.scss'
import App from './Pages/Home/App'
import Apropos from './Pages/Apropos/Apropos'
import Error from './Pages/Error/Error'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Error" element={<Error />} />
        </Routes>
    </BrowserRouter>
)