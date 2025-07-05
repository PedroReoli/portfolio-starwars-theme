import React, { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import '@/css/SharedComponents.css';

const Background: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log('Particles loaded:', container);
  }, []);

  return (
    <div className="background-stars">
      <div className="black-sky" />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: false,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 400,
            },
            opacity: {
              value: 0.8,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
            twinkle: {
              particles: {
                enable: true,
                color: "#ffffff",
                frequency: 0.05,
                opacity: 1,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background; 