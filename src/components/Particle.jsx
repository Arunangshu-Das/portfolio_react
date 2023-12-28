import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: { start: "#000", end: "#333" }, // Gradient background
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "bubble" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            bubble: { distance: 200, size: 40, duration: 2, opacity: 0.8 },
          },
        },
        particles: {
          shape: {
            type: [
          "circle",
          "triangle",
          "polygon",
          "star",
          "edge", // New shape: edge
          "square", // New shape: square
          "rectangle", // New shape: rectangle
          "heart", // New shape: heart
          "image" // New shape: image
        ], // Additional shapes
          },
          color: {
            value: ["#FF5757", "#A48348", "rgb(255, 87, 87)"], // Multiple colors
          },
          links: {
            color: "#A48348",
            distance: 200, // Reduced distance between linked particles
            enable: true,
            opacity: 0.4,
            blink: true, // Adding a blinking effect to links
            consent: false,
            warp: true, // Enable warp for continuous movement
          },
          move: {
            speed: { min: 1, max: 3 },
            direction: "random",
            random: true,
            enable: true,
            outModes: {
              default: "out",
              bottom: "out",
            },
            rotate: {
              value: 90,
              direction: "clockwise",
              random: true,
            },
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.15,
          },
          size: {
            value: { min: 2, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
export default Particle;