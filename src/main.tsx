import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MyHook } from './MyHook.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <MyHook /> */}
    {/* </MyHook> */}
  </StrictMode>,
)
