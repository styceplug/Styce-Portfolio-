import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

const rootElement = document.getElementById('root')
const url = `${window.location.pathname}${window.location.hash}`

const app = (
  <StrictMode>
    <App url={url} />
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
