import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './rct/LandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <LandingPage/>
  </StrictMode>,
)
