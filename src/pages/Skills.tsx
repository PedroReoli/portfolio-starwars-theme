import React, { useState } from "react"
import "../css/skills.css"
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaPython, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCode
} from "react-icons/fa"
import { SiTypescript, SiVite } from "react-icons/si"
import BB8 from "../components/bb8"

type SkillLevel = "padawan" | "jedi-knight" | "jedi-master" | "sith-lord"

interface Skill {
  name: string
  icon: React.ReactNode
  level: SkillLevel
  category: string
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend")
  const [bb8Mode, setBb8Mode] = useState<'light' | 'dark'>('light')

  const handleToggleMode = () => {
    setBb8Mode(bb8Mode === 'light' ? 'dark' : 'light')
  }

  const skills: Skill[] = [
    // Frontend (Lado Claro)
    { name: "React", icon: <FaReact />, level: "jedi-master", category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, level: "jedi-knight", category: "frontend" },
    { name: "HTML5", icon: <FaHtml5 />, level: "jedi-master", category: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "jedi-master", category: "frontend" },
    { name: "JavaScript", icon: <FaJs />, level: "jedi-master", category: "frontend" },
    { name: "Vite", icon: <SiVite />, level: "jedi-knight", category: "frontend" },
    
    // Backend (Lado Sombrio)
    { name: "Node.js", icon: <FaNodeJs />, level: "jedi-knight", category: "backend" },
    { name: "Python", icon: <FaPython />, level: "padawan", category: "backend" },
    { name: "REST APIs", icon: <FaCode />, level: "jedi-knight", category: "backend" },
    { name: "Databases", icon: <FaDatabase />, level: "jedi-knight", category: "backend" },
    
    // Tools (Equipamentos)
    { name: "Git", icon: <FaGitAlt />, level: "jedi-master", category: "tools" },
    { name: "VS Code", icon: <FaCode />, level: "jedi-master", category: "tools" },
    { name: "Docker", icon: <FaDocker />, level: "padawan", category: "tools" },
    { name: "Agile/Scrum", icon: <FaUsers />, level: "jedi-knight", category: "tools" },
    
    // Soft Skills (Força)
    { name: "Leadership", icon: <FaLightbulb />, level: "jedi-knight", category: "soft-skills" },
    { name: "Communication", icon: <FaUsers />, level: "jedi-master", category: "soft-skills" },
    { name: "Problem Solving", icon: <FaRocket />, level: "jedi-master", category: "soft-skills" }
  ]

  const getLevelPercentage = (level: SkillLevel): number => {
    switch (level) {
      case "padawan": return 25
      case "jedi-knight": return 50
      case "jedi-master": return 75
      case "sith-lord": return 100
      default: return 0
    }
  }

  const getLevelColor = (level: SkillLevel): string => {
    switch (level) {
      case "padawan": return "#fed34f"
      case "jedi-knight": return "#4bd5ee"
      case "jedi-master": return "#ffffff"
      case "sith-lord": return "#8b0000"
      default: return "#fed34f"
    }
  }

  const getCategoryTitle = (category: string): string => {
    switch (category) {
      case "frontend": return "Frontend (Light Side)"
      case "backend": return "Backend (Dark Side)"
      case "tools": return "Tools (Equipment)"
      case "soft-skills": return "Soft Skills (The Force)"
      default: return "Skills"
    }
  }

  const filteredSkills = skills.filter(skill => skill.category === selectedCategory)

  return (
    <div className="skills-container">
      <div className="skills-content">
        {/* Header */}
        <div className="header-card">
          <div className="header-content">
            <h1 className="title">Skills</h1>
            <p className="subtitle">May the Force be with your code</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Left Card - Filters and BB-8 */}
          <div className="left-card">
            {/* Category Filters */}
            <div className="filters-section">
              <h3 className="filters-title">Categories</h3>
              <div className="filters-grid">
                <button 
                  className={`filter-btn ${selectedCategory === "frontend" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("frontend")}
                >
                  <span className="filter-icon">⚡</span>
                  <span className="filter-text">Frontend</span>
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === "backend" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("backend")}
                >
                  <span className="filter-icon">🌑</span>
                  <span className="filter-text">Backend</span>
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === "tools" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("tools")}
                >
                  <span className="filter-icon">🛠️</span>
                  <span className="filter-text">Tools</span>
                </button>
                <button 
                  className={`filter-btn ${selectedCategory === "soft-skills" ? "active" : ""}`}
                  onClick={() => setSelectedCategory("soft-skills")}
                >
                  <span className="filter-icon">✨</span>
                  <span className="filter-text">Soft Skills</span>
                </button>
              </div>
            </div>

            {/* BB-8 Component */}
            <div className="bb8-section">
              <div className="bb8-card">
                <h4 className="bb8-title">
                  {bb8Mode === "light" ? "Light Side" : "Dark Side"}
                </h4>
                <div className="bb8-placeholder desktop-only" onClick={handleToggleMode}>
                  <BB8 mode={bb8Mode} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Skills Content */}
          <div className="right-card">
            <div className="content-header">
              <h2 className="category-title">{getCategoryTitle(selectedCategory)}</h2>
              <p className="category-description">
                {selectedCategory === "frontend" && "Master of the Light Side - Building beautiful user interfaces"}
                {selectedCategory === "backend" && "Power of the Dark Side - Server-side logic and data management"}
                {selectedCategory === "tools" && "Essential equipment for every developer's journey"}
                {selectedCategory === "soft-skills" && "The Force that guides successful development teams"}
              </p>
            </div>

            <div className="skills-grid">
              {filteredSkills.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3 className="skill-name">{skill.name}</h3>
                  </div>
                  <div className="skill-progress">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          width: `${getLevelPercentage(skill.level)}%`,
                          backgroundColor: getLevelColor(skill.level)
                        }}
                      />
                    </div>
                    <span className="skill-level">{skill.level.replace("-", " ")}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills 