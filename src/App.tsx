import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarWarsOpening from './components/StarWarsOpening'
import RootLayout from './components/RootLayout'
import AboutMe from './pages/AboutMe'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarWarsOpening />} />
        <Route element={<RootLayout />}>
          <Route path="/home" element={<AboutMe />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
