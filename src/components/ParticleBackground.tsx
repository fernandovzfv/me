
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useTheme } from './ThemeProvider';

const ParticleBackground = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Define color variables based on theme
  const particleColor = theme === 'dark' ? "#e4eef8" : "#0071e3";
  const linkColor = theme === 'dark' ? "#e4eef8" : "#0071e3";
  const particleOpacity = theme === 'dark' ? 0.3 : 0.5;
  const linkOpacity = theme === 'dark' ? 0.2 : 0.5;

  return (
    <div 
      className="particle-container fixed inset-0 -z-10"
      data-dark-mode-compatible="true"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: particleColor,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: particleOpacity,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 2, max: 6 },
            },
            links: {
              color: linkColor,
              distance: 150,
              enable: true,
              opacity: linkOpacity,
              width: 1,
            },
            collisions: {
              enable: false,
            },
          },
          detectRetina: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
