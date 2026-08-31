import { useEffect, useRef } from 'react';
import './ParticleField.css';

const PARTICLE_COUNT = 46;
const MAX_SPEED = 0.12;
const LINK_DISTANCE = 130;

function createParticles(width, height) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * MAX_SPEED,
    vy: (Math.random() - 0.5) * MAX_SPEED,
    r: Math.random() * 1.4 + 0.6,
    twinkleOffset: Math.random() * Math.PI * 2,
  }));
}

/**
 * Fundo decorativo com partículas quase imperceptíveis, para dar um pouco
 * de dinamismo às páginas sem competir com o conteúdo. Puramente estético:
 * ignorado por leitores de tela e desativado quando o usuário prefere
 * menos movimento.
 */
export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles = createParticles(width, height);
    let frameId = null;
    let time = 0;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const twinkle = 0.35 + 0.35 * Math.sin(time * 0.015 + p.twinkleOffset);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 150, 255, ${twinkle.toFixed(3)})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124, 31, 224, ${0.08 * (1 - dist / LINK_DISTANCE)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    }

    function step() {
      time += 1;
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      drawFrame();
      frameId = window.requestAnimationFrame(step);
    }

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion) {
      // Desenha um único quadro estático e não anima.
      drawFrame();
    } else {
      frameId = window.requestAnimationFrame(step);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
