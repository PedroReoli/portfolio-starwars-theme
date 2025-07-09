"use client"

import type React from "react"
import { motion } from "framer-motion"

interface LightsaberProgressProps {
  percentage: number
  mode: "jedi" | "sith"
  level: string
}

const LightsaberProgress: React.FC<LightsaberProgressProps> = ({ percentage, mode, level }) => {
  const getBladeColor = () => {
    return mode === "sith" ? "#ff0000" : "#4bd5ee"
  }

  const getGlowColor = () => {
    return mode === "sith" ? "rgba(255, 0, 0, 0.6)" : "rgba(75, 213, 238, 0.6)"
  }

  return (
    <div className="lightsaber-progress">
      <div className="lightsaber-container">
        {/* Cabo Horizontal */}
        <div className="lightsaber-hilt-horizontal">
          <div className="hilt-grip"></div>
          <div className="hilt-emitter"></div>
        </div>

        {/* Container da Lâmina */}
        <div className="blade-track">
          <motion.div
            className="blade-glow"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              backgroundColor: "#ffffff",
              boxShadow: `
                0 0 4px #ffffff,
                0 0 8px ${getBladeColor()},
                0 0 12px ${getBladeColor()},
                0 0 16px ${getBladeColor()}
              `,
            }}
          />
        </div>
      </div>

      <motion.div
        className="skill-level-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: getBladeColor() }}
      >
        {level}
      </motion.div>
    </div>
  )
}

export default LightsaberProgress
