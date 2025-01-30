import React, { useRef, useEffect } from "react";

// Configuration constants that could be moved to a separate config file
const CONFIG = {
  SPEED_MULTIPLIER: 0.25,
  MOUSE_RADIUS: 150,
  CONNECTION_DISTANCE: 100,
  ORANGE_DOT_COLOR: "rgba(254, 87, 34, 1)",
  DEFAULT_DOT_COLOR: "rgba(200, 200, 200, 0.8)",
  DEFAULT_DOT_SIZE: 2,
  LAPTOP_BREAKPOINT: 1024,
  TABLET_BREAKPOINT: 768,
  MAX_DOTS: 250,
  DOT_REDUCTION_TABLET: 0.75,
  DOT_REDUCTION_MOBILE: 0.5,
  MOUSE_ATTRACTION_SPEED: 0.5,
  FADE_DURATION: 200,
  CLOSEST_DOTS_COUNT: 5,
};

/**
 * Hero Canvas Design Component
 * @component
 */

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize canvas context and state
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width, height;
    let dots = [];
    let isMouseInteractionEnabled =
      window.innerWidth >= CONFIG.LAPTOP_BREAKPOINT;
    const mouse = { x: null, y: null, radius: CONFIG.MOUSE_RADIUS };

    /**
     * Calculates the optimal number of dots based on viewport width
     * @function
     */
    const calculateDotCount = () => {
      if (window.innerWidth < CONFIG.TABLET_BREAKPOINT) {
        return Math.floor(CONFIG.MAX_DOTS * CONFIG.DOT_REDUCTION_MOBILE);
      } else if (window.innerWidth < CONFIG.LAPTOP_BREAKPOINT) {
        return Math.floor(CONFIG.MAX_DOTS * CONFIG.DOT_REDUCTION_TABLET);
      }
      return CONFIG.MAX_DOTS;
    };

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isMouseInteractionEnabled = window.innerWidth >= 1024;
      initDots(); // Reinitialize dots on resize
    };

    // Particle class representing each dot in the animation
    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() * 2 - 1) * CONFIG.SPEED_MULTIPLIER;
        this.vy = (Math.random() * 2 - 1) * CONFIG.SPEED_MULTIPLIER;
        this.size = CONFIG.DEFAULT_DOT_SIZE;
        this.color = CONFIG.DEFAULT_DOT_COLOR;
        this.originalColor = this.color;
        this.isFading = false;
        this.halfSize = this.size / 2;
      }

      // Updates dot position and handles boundary collisions
      update() {
        // Boundary collision detection
        const nextX = this.x + this.vx;
        const nextY = this.y + this.vy;

        if (nextX + this.halfSize > width || nextX - this.halfSize < 0) {
          this.vx *= -1;
        }
        if (nextY + this.halfSize > height || nextY - this.halfSize < 0) {
          this.vy *= -1;
        }

        this.x += this.vx;
        this.y += this.vy;

        // Mouse interaction
        if (isMouseInteractionEnabled && mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < mouse.radius * mouse.radius) {
            const distance = Math.sqrt(distanceSquared);
            const force = CONFIG.MOUSE_ATTRACTION_SPEED / distance;
            this.x += dx * force;
            this.y += dy * force;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      fadeToOrange() {
        this.isFading = true;
        this.color = CONFIG.ORANGE_DOT_COLOR;

        setTimeout(() => {
          this.color = this.originalColor;
          this.isFading = false;
        }, 200);
      }
    }

    const initDots = () => {
      const totalDots = calculateDotCount();
      dots = [];
      for (let i = 0; i < totalDots; i++) {
        dots.push(new Dot(Math.random() * width, Math.random() * height));
      }
    };

    const connectDots = () => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(200, 200, 200, 0.1)";
            ctx.lineWidth = 1;
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const findClosestDots = () => {
      dots.forEach((dot) => (dot.isFading = false));
      const distances = dots.map((dot) => ({
        dot,
        distance: Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2),
      }));

      const closest = distances
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      closest.forEach(({ dot }) => {
        if (!dot.isFading) dot.fadeToOrange();
      });
    };

    // Main animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Batch updates and draws for better performance
      const len = dots.length;
      for (let i = 0; i < len; i++) {
        dots[i].update();
        dots[i].draw();
      }

      connectDots();

      if (isMouseInteractionEnabled && mouse.x !== null) {
        findClosestDots();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (isMouseInteractionEnabled) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default HeroCanvas;
