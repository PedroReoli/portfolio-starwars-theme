import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Importando estilos da coleção Star Wars
import '../Snippets/tipography.css'
import '../Snippets/opening/opening.scss'
import '../Snippets/lightsaber/lightsaber.css'
import '../Snippets/walker/walker.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
