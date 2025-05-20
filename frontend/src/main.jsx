import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutSection from './AboutSection.jsx'
import FidelityExperience from './FidelityExperience.jsx';
import AchievementKhwaab from './AchievementKhwaab.jsx';
import AchievementMUN from './AchievementMUN.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/fidelity-experience" element={<FidelityExperience />} />
        <Route path="/achievement-khwaab" element={<AchievementKhwaab />} />
        <Route path="/achievement-mun" element={<AchievementMUN />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
