import React, { useState } from "react"
import "../css/about-me.css"
import BB8 from "../components/bb8"

type AboutMeProps = {}

const AboutMe: React.FC<AboutMeProps> = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')

  const handleToggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="about-content">
        {/* Photo Card */}
        <div className="photo-card">
          <div className="photo-container">
            <img src="/placeholder.svg?height=400&width=300" alt="Pedro Lucas" className="profile-photo" />
          </div>
        </div>

        {/* Text Card */}
        <div className="text-card">
          <div className="text-content">
            <h1 className="title">About Me</h1>
            <div className="text-body">
              <p>
                I'm <span className="highlight">Pedro Lucas Reis</span>, a Junior Full Stack Developer on a mission to
                build powerful and efficient web applications across the galaxy.
              </p>
              <p>
                Currently, I work at <span className="highlight">Autocom3</span>, where I've contributed to both
                frontend and backend development — from building the company's institutional website to creating
                internal tools like a digital time tracking system and a web app for accounting.
              </p>
              <p>
                I'm passionate about clean code, automation, and solving real-world problems through technology. I've
                also led workshops focused on digital inclusion and coordinated development events using agile
                methodologies.
              </p>
              <p>Whether in a team or flying solo, I bring dedication and clarity to every mission.</p>
            </div>
          </div>
        </div>
      </div>

      {/* BB8 Component - apenas em desktop */}
      <div className="bb8-placeholder desktop-only" onClick={handleToggleMode}>
        <BB8 mode={mode} />
      </div>
    </div>
  )
}

export default AboutMe 