import React, { useEffect, useRef } from 'react';
import '@/css/hyperscape.css';

const WARP_COLORS = [
  [197, 239, 247],
  [25, 181, 254],
  [77, 5, 232],
  [165, 55, 253],
  [255, 255, 255],
];
const BASE_SIZE = 1;
const SIZE_INC = 1.01;
const VELOCITY_INC = 1.01;
const VELOCITY_INIT_INC = 1.025;
const JUMP_VELOCITY_INC = 1.25;
const JUMP_SIZE_INC = 1.15;
const RAD = Math.PI / 180;

function randomInRange(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Star {
  STATE: any;
  constructor() {
    this.reset();
  }
  reset = () => {
    const angle = randomInRange(0, 360) * RAD;
    const vX = Math.cos(angle);
    const vY = Math.sin(angle);
    const travelled =
      Math.random() > 0.5
        ? Math.random() * Math.max(window.innerWidth, window.innerHeight) + Math.random() * (window.innerWidth * 0.24)
        : Math.random() * (window.innerWidth * 0.25);
    this.STATE = {
      alpha: Math.random(),
      angle,
      iX: undefined,
      iY: undefined,
      active: travelled ? true : false,
      x: Math.floor(vX * travelled) + window.innerWidth / 2,
      vX,
      y: Math.floor(vY * travelled) + window.innerHeight / 2,
      vY,
      size: BASE_SIZE,
    };
  };
}

function generateStarPool(size: number) {
  return new Array(size).fill(null).map(() => new Star());
}

type Phase = 'normal' | 'initiate' | 'jump' | 'reset';

const Hyperscape: React.FC<{ onFinish?: () => void }> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const stateRef = useRef<any>({
    stars: generateStarPool(300),
    bgAlpha: 0,
    sizeInc: SIZE_INC,
    velocity: VELOCITY_INC,
    jumping: false,
    initiating: false,
    initiateTimestamp: undefined,
    phase: 'normal' as Phase,
    phaseStart: Date.now(),
  });

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      stateRef.current.stars = generateStarPool(300);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Fases automáticas
    const PHASES: { phase: Phase; duration: number }[] = [
      { phase: 'normal', duration: 1000 },     // 1s - aumentado de 700ms
      { phase: 'initiate', duration: 800 },    // 0.8s - aumentado de 600ms
      { phase: 'jump', duration: 3500 },       // 3.5s - aumentado de 2500ms
      { phase: 'reset', duration: 600 },       // 0.6s - aumentado de 400ms
    ];
    let phaseIndex = 0;
    let phaseTimeout: ReturnType<typeof setTimeout>;

    function setPhase(phase: Phase) {
      stateRef.current.phase = phase;
      stateRef.current.phaseStart = Date.now();
      if (phase === 'normal') {
        stateRef.current.bgAlpha = 0;
        stateRef.current.velocity = VELOCITY_INC;
        stateRef.current.sizeInc = SIZE_INC;
        stateRef.current.jumping = false;
        stateRef.current.initiating = false;
      } else if (phase === 'initiate') {
        stateRef.current.bgAlpha = 0.3;
        stateRef.current.velocity = VELOCITY_INIT_INC;
        stateRef.current.sizeInc = SIZE_INC;
        stateRef.current.initiating = true;
      } else if (phase === 'jump') {
        stateRef.current.bgAlpha = 0.75;
        stateRef.current.velocity = JUMP_VELOCITY_INC;
        stateRef.current.sizeInc = JUMP_SIZE_INC;
        stateRef.current.jumping = true;
        stateRef.current.initiating = false;
      } else if (phase === 'reset') {
        stateRef.current.bgAlpha = 0;
        stateRef.current.velocity = VELOCITY_INC;
        stateRef.current.sizeInc = SIZE_INC;
        stateRef.current.jumping = false;
        stateRef.current.initiating = false;
      }
    }

    function nextPhase() {
      phaseIndex++;
      if (phaseIndex < PHASES.length) {
        setPhase(PHASES[phaseIndex].phase);
        phaseTimeout = setTimeout(nextPhase, PHASES[phaseIndex].duration);
      } else {
        // Fim do ciclo
        if (onFinish) onFinish();
      }
    }

    // Inicia ciclo
    setPhase(PHASES[0].phase);
    phaseTimeout = setTimeout(nextPhase, PHASES[0].duration);

    const render = () => {
      const { bgAlpha, velocity, sizeInc, stars, jumping } = stateRef.current;
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      if (bgAlpha > 0) {
        context.fillStyle = `rgba(31, 58, 157, ${bgAlpha})`;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }
      for (const star of stars.filter((s: any) => s.STATE.active)) {
        const { x, y, iX, iY, size, vX, vY, alpha } = star.STATE;
        // Atualiza posição
        const newX = x + vX;
        const newY = y + vY;
        star.STATE.x = newX;
        star.STATE.y = newY;
        star.STATE.vX = vX * velocity;
        star.STATE.vY = vY * velocity;
        star.STATE.size = size * sizeInc;
        // Redefine se sair da tela
        if (
          newX < 0 ||
          newX > window.innerWidth ||
          newY < 0 ||
          newY > window.innerHeight
        ) {
          star.reset();
        }
        // Cor
        let color;
        if (jumping) {
          const [r, g, b] = WARP_COLORS[randomInRange(WARP_COLORS.length - 1, 0)];
          color = `rgba(${r},${g},${b},${alpha})`;
        } else {
          color = `rgba(255,255,255,${alpha})`;
        }
        context.strokeStyle = color;
        context.lineWidth = size;
        context.beginPath();
        context.moveTo(iX || x, iY || y);
        context.lineTo(newX, newY);
        context.stroke();
      }
      animationRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animationRef.current!);
      clearTimeout(phaseTimeout);
    };
  }, [onFinish]);

  return (
    <div className="hyperscape" style={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh', display: 'block' }} />
    </div>
  );
};

export default Hyperscape; 