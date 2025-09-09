import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ComponentRouter } from './Components/ComponentRouter'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentRouter/>
  </StrictMode>,
)
