import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from '../src/public/LandingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <LandingPage/>
  </StrictMode>,
)
