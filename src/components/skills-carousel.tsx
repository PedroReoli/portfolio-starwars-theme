"use client"

import type React from "react"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import LightsaberProgress from "./lightsaber-progress" // Import LightsaberProgress component

interface Skill {
  name: string
  icon: React.ReactNode
  level: string
  category: string
}

interface SkillsCarouselProps {
  skills: Skill[]
  mode: "jedi" | "sith"
  itemsPerPage?: number
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ skills, mode, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(skills.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentSkills = () => {
    const start = currentPage * itemsPerPage
    return skills.slice(start, start + itemsPerPage)
  }

  const getLevelPercentage = (level: string): number => {
    switch (level) {
      case "padawan":
        return 25
      case "jedi-knight":
        return 50
      case "jedi-master":
        return 75
      case "sith-lord":
        return 100
      default:
        return 0
    }
  }

  const getThemeColor = () => {
    return mode === "sith" ? "#ff0000" : "#4bd5ee"
  }

  return (
    <div className="skills-carousel">
      {totalPages > 1 && (
        <div className="carousel-controls">
          <button
            onClick={prevPage}
            className="carousel-btn"
            style={{ borderColor: getThemeColor(), color: getThemeColor() }}
          >
            <ChevronLeft size={20} />
          </button>

          <div className="carousel-indicators">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={`indicator ${index === currentPage ? "active" : ""}`}
                style={{
                  backgroundColor: index === currentPage ? getThemeColor() : "transparent",
                  borderColor: getThemeColor(),
                }}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="carousel-btn"
            style={{ borderColor: getThemeColor(), color: getThemeColor() }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      <div className="skills-grid-carousel">
        {getCurrentSkills().map((skill, index) => (
          <div
            key={index}
            className="skill-card-carousel"
            style={{ borderColor: mode === "sith" ? "#ff0000" : "#fed34f" }}
          >
            <div className="skill-header">
              <div
                className="skill-icon"
                style={{
                  color: mode === "sith" ? "#ff0000" : "#fed34f",
                  backgroundColor: mode === "sith" ? "rgba(255, 0, 0, 0.1)" : "rgba(254, 211, 79, 0.1)",
                }}
              >
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>

            <div className="skill-progress">
              <LightsaberProgress
                percentage={getLevelPercentage(skill.level)}
                mode={mode}
                level={skill.level.replace("-", " ")}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsCarousel
