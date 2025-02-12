import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router'
import './index.scss'
import App from './Pages/Home/App'
import Apropos from './Pages/Apropos/Apropos'
import Error from './Pages/Error/Error'
import Fiche from './Pages/Fiche-Logement/Fiche-Logement'
import Logement from './Pages/Logement/Logement'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Fiche" element={<Fiche />} /> // page de test
          <Route path="/logement/:id" element={<Logement/>} />
          <Route path="*" element={<Navigate to="/Error" replace />} />
        </Routes>
    </BrowserRouter>
)