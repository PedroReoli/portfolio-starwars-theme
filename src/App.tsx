import React, { useState, useEffect } from 'react'

const App: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadHTML = async () => {
      try {
        const response = await fetch('/Snippets/opening/opening.html')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const content = await response.text()
        setHtmlContent(content)
      } catch (err) {
        console.error('Erro ao carregar opening.html:', err)
      } finally {
        setLoading(false)
      }
    }

    loadHTML()
  }, [])

  if (loading) {
    return null
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}

export default App
