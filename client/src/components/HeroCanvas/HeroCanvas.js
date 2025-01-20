import React, { useRef, useEffect } from "react";

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const speedMultiplier = 0.25; // Dot movement speed around the screen
    let animationFrameId;
    let width, height;
    let dots = [];
    let isMouseInteractionEnabled = window.innerWidth >= 1024;
    const mouse = { x: null, y: null, radius: 150 };

    const orangeDot = "rgba(254, 87, 34, 1)";

    const calculateDotCount = () => {
      if (window.innerWidth < 768) {
        return Math.floor(150 * 0.5); // 50% fewer dots
      } else if (window.innerWidth < 1024) {
        return Math.floor(150 * 0.75); // 25% fewer dots
      } else {
        return 250; // Full dot count
      }
    };

    const resizeCanvas = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      isMouseInteractionEnabled = window.innerWidth >= 1024;
      initDots(); // Reinitialize dots on resize
    };

    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() * 2 - 1) * speedMultiplier; // Apply speed multiplier
        this.vy = (Math.random() * 2 - 1) * speedMultiplier; // Apply speed multiplier
        this.size = 2;
        this.color = "rgba(200, 200, 200, 0.8)";
        this.originalColor = this.color;
        this.isFading = false;
      }

      update() {
        if (this.x + this.size > width || this.x - this.size < 0) this.vx *= -1;
        if (this.y + this.size > height || this.y - this.size < 0)
          this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;

        if (isMouseInteractionEnabled) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            this.x += (dx / distance) * 0.5; // how fast the dots move towards the mouse
            this.y += (dy / distance) * 0.5; // how fast the dots move towards the mouse
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
        this.color = orangeDot;

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

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      dots.forEach((dot) => {
        dot.update();
        dot.draw();
      });
      connectDots();
      if (isMouseInteractionEnabled && mouse.x !== null && mouse.y !== null) {
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
