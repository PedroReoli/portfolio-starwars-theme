"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  FaCode,
} from "react-icons/fa"
import { SiTypescript, SiVite } from "react-icons/si"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BB8 from "../components/bb8"
import LightsaberProgress from "../components/lightsaber-progress"

type SkillLevel = "padawan" | "jedi-knight" | "jedi-master" | "sith-lord"

interface Skill {
  name: string
  icon: React.ReactNode
  level: SkillLevel
  category: string
}

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend")
  const [bb8Mode, setBb8Mode] = useState<"light" | "dark">("light")
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const rightCardRef = useRef<HTMLDivElement>(null)
  const leftCardRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    // Frontend
    { name: "React", icon: <FaReact />, level: "jedi-master", category: "frontend" },
    { name: "TypeScript", icon: <SiTypescript />, level: "jedi-knight", category: "frontend" },
    { name: "HTML5", icon: <FaHtml5 />, level: "jedi-master", category: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "jedi-master", category: "frontend" },
    { name: "JavaScript", icon: <FaJs />, level: "jedi-master", category: "frontend" },
    { name: "Vite", icon: <SiVite />, level: "jedi-knight", category: "frontend" },

    // Backend
    { name: "Node.js", icon: <FaNodeJs />, level: "jedi-knight", category: "backend" },
    { name: "Python", icon: <FaPython />, level: "padawan", category: "backend" },
    { name: "REST APIs", icon: <FaCode />, level: "jedi-knight", category: "backend" },
    { name: "Databases", icon: <FaDatabase />, level: "jedi-knight", category: "backend" },

    // Tools
    { name: "Git", icon: <FaGitAlt />, level: "jedi-master", category: "tools" },
    { name: "VS Code", icon: <FaCode />, level: "jedi-master", category: "tools" },
    { name: "Docker", icon: <FaDocker />, level: "padawan", category: "tools" },
    { name: "Agile/Scrum", icon: <FaUsers />, level: "jedi-knight", category: "tools" },

    // Soft Skills
    { name: "Leadership", icon: <FaLightbulb />, level: "jedi-knight", category: "soft-skills" },
    { name: "Communication", icon: <FaUsers />, level: "jedi-master", category: "soft-skills" },
    { name: "Problem Solving", icon: <FaRocket />, level: "jedi-master", category: "soft-skills" },
  ]

  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory)
  const itemsPerPage = isMobile ? 2 : 4
  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage)
  const currentSkills = filteredSkills.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  // Responsividade: detectar mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Sincronizar altura do left card com o right card (desktop)
  useEffect(() => {
    if (!isMobile && leftCardRef.current && rightCardRef.current) {
      leftCardRef.current.style.height = `${rightCardRef.current.offsetHeight}px`
    } else if (leftCardRef.current) {
      leftCardRef.current.style.height = ''
    }
  }, [isMobile, filteredSkills, currentPage])

  // Adicionar classe ao body para esconder BB-8 global no mobile na página Skills
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('hide-global-bb8')
    } else {
      document.body.classList.remove('hide-global-bb8')
    }
    return () => {
      document.body.classList.remove('hide-global-bb8')
    }
  }, [isMobile])

  const handleToggleMode = () => {
    if (selectedCategory === "frontend") {
      setSelectedCategory("backend")
      setBb8Mode("dark")
    } else {
      setSelectedCategory("frontend")
      setBb8Mode("light")
    }
    setCurrentPage(0)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(0)
  }

  const handleSelectTools = () => {
    setSelectedCategory("tools")
    setCurrentPage(0)
  }

  const handleSelectSoftSkills = () => {
    setSelectedCategory("soft-skills")
    setCurrentPage(0)
  }

  const getLevelPercentage = (level: SkillLevel): number => {
    const levels = { padawan: 25, "jedi-knight": 50, "jedi-master": 75, "sith-lord": 100 }
    return levels[level] || 0
  }

  const getCategoryInfo = (category: string) => {
    const info = {
      frontend: {
        title: "Frontend",
        description: "Master of the Light Side - Building beautiful user interfaces",
      },
      backend: {
        title: "Backend",
        description: "Power of the Dark Side - Server-side logic and data management",
      },
      tools: {
        title: "Tools (Equipment)",
        description: "Essential equipment for every developer's journey",
      },
      "soft-skills": {
        title: "Soft Skills (The Force)",
        description: "The Force that guides successful development teams",
      },
    }
    return info[category as keyof typeof info] || { title: "Skills", description: "" }
  }

  const mode = bb8Mode === "dark" ? "sith" : "jedi"
  const themeColor = bb8Mode === "dark" ? "#ff0000" : "#4bd5ee"
  const categoryInfo = getCategoryInfo(selectedCategory)

  return (
    <div className="skills-page">
      <div className="skills-wrapper">
        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="skills-title">Skills</h1>
          <p 
            className="skills-subtitle desktop-only"
            style={{
              textAlign: 'center',
              margin: '0 auto',
              display: 'block'
            }}
          >
            {bb8Mode === "dark" ? "Feel the power of the Dark Side" : "May the Force be with your code"}
          </p>
        </motion.div>

        {/* Mobile Navbar com ícones e BB-8 */}
        {isMobile && (
          <div className="skills-mobile-navbar">
            <button className={`mobile-category-btn ${selectedCategory === "tools" ? "active" : ""}`} onClick={handleSelectTools}>
              <span className="mobile-category-icon">🛠️</span>
              <span className="mobile-category-text">Tools</span>
            </button>
            <button className={`mobile-category-btn ${selectedCategory === "soft-skills" ? "active" : ""}`} onClick={handleSelectSoftSkills}>
              <span className="mobile-category-icon">✨</span>
              <span className="mobile-category-text">Soft Skills</span>
            </button>
            <div className="mobile-bb8-wrapper" onClick={handleToggleMode} style={{ cursor: 'pointer' }}>
              <BB8 mode={bb8Mode} />
            </div>
          </div>
        )}

        {/* Main Layout */}
        <div className="skills-layout">
          {/* Left Panel (desktop only) */}
          {!isMobile && (
            <motion.div
              className="skills-sidebar"
              ref={leftCardRef}
              style={{ borderColor: themeColor }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* BB8 Toggle */}
              <div className="bb8-section">
                <motion.div
                  className="bb8-label"
                  style={{ color: themeColor }}
                  animate={{ color: themeColor }}
                  transition={{ duration: 0.3 }}
                >
                  {bb8Mode === "light" ? "Frontend" : "Backend"}
                </motion.div>
                <motion.div
                  className="bb8-toggle"
                  onClick={handleToggleMode}
                  style={{ borderColor: themeColor }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BB8 mode={bb8Mode} />
                </motion.div>
              </div>

              {/* Category Buttons */}
              <div className="category-buttons">
                <motion.button
                  className={`category-btn ${selectedCategory === "tools" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("tools")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="category-icon">🛠️</span>
                  <span className="category-text">Tools</span>
                </motion.button>

                <motion.button
                  className={`category-btn ${selectedCategory === "soft-skills" ? "active" : ""}`}
                  onClick={() => handleCategoryChange("soft-skills")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="category-icon">✨</span>
                  <span className="category-text">Soft Skills</span>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Right Panel */}
          <motion.div
            className="skills-main"
            ref={rightCardRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Header */}
            <div className="skills-main-header">
              <motion.h2
                className="category-title"
                key={selectedCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                {categoryInfo.title}
              </motion.h2>
              {/* Esconde a descrição em mobile */}
              {!isMobile && (
                <motion.p
                  className="category-description"
                  key={selectedCategory + "desc"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {categoryInfo.description}
                </motion.p>
              )}
            </div>

            {/* Carousel Controls */}
            {totalPages > 1 && (
              <div className="carousel-section">
                <div className="carousel-controls">
                  <motion.button
                    className="carousel-btn"
                    onClick={prevPage}
                    style={{ borderColor: themeColor, color: themeColor }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={18} />
                  </motion.button>

                  <div className="carousel-dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <motion.div
                        key={index}
                        className={`carousel-dot ${index === currentPage ? "active" : ""}`}
                        style={{
                          backgroundColor: index === currentPage ? themeColor : "transparent",
                          borderColor: themeColor,
                        }}
                        onClick={() => setCurrentPage(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    className="carousel-btn"
                    onClick={nextPage}
                    style={{ borderColor: themeColor, color: themeColor }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>
            )}

            {/* Skills Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                className="skills-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon">{skill.icon}</div>
                      <h3 className="skill-name">{skill.name}</h3>
                    </div>

                    <LightsaberProgress
                      percentage={getLevelPercentage(skill.level)}
                      mode={mode}
                      level={skill.level.replace("-", " ")}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
