import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function applyCircularFavicon() {
  const img = new Image()
  img.src = `${import.meta.env.BASE_URL}aic.jpg`

  img.onload = () => {
    const size = 256
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const side = Math.min(img.naturalWidth, img.naturalHeight)
    const sx = (img.naturalWidth - side) / 2
    const sy = (img.naturalHeight - side) / 2

    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(img, sx, sy, side, side, 0, 0, size, size)

    const faviconHref = canvas.toDataURL('image/png')
    let favicon = document.querySelector("link[rel='icon']")
    if (!favicon) {
      favicon = document.createElement('link')
      favicon.setAttribute('rel', 'icon')
      document.head.appendChild(favicon)
    }

    favicon.setAttribute('type', 'image/png')
    favicon.setAttribute('href', faviconHref)
  }
}

applyCircularFavicon()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
