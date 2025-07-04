import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import StarWarsOpening from './components/StarWarsOpening'
import Home from './components/AboutMe'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StarWarsOpening />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
