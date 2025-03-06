import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from './tamagui.config'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TamaguiProvider config={tamaguiConfig}>
    <App />
    </TamaguiProvider>
  </StrictMode>,
)
