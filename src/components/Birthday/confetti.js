// Lightweight canvas confetti. The canvas is created on the first burst and the
// animation loop only runs while there are particles on screen.
export const PARTY_COLORS = ['#E6D5B8', '#2DD4BF', '#A7F3D0', '#F9A8D4', '#FDE68A', '#C4B5FD', '#FFFFFF'];
export const GOLD_COLORS = ['#FACC15', '#FDE68A', '#F59E0B', '#FFFFFF'];

const MAX_PARTICLES = 700;
const GRAVITY = 0.2;
const DRAG = 0.955;

let canvas = null;
let context = null;
let particles = [];
let frame = null;
let lastTime = 0;

const prefersReducedMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

// Drawn at CSS-pixel size, not device pixels: fast-moving confetti doesn't need
// retina sharpness, and it keeps the full-screen canvas cheap on 4K screens.
const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const ensureCanvas = () => {
  if (canvas) return;
  canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  Object.assign(canvas.style, {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: '90',
  });
  document.body.appendChild(canvas);
  context = canvas.getContext('2d');
  resize();
  window.addEventListener('resize', resize);
};

const drawParticle = (particle) => {
  context.save();
  context.globalAlpha = Math.min(1, particle.life * 3);
  context.translate(particle.x, particle.y);
  context.rotate(particle.rotation);
  context.scale(1, Math.cos(particle.wobble));
  context.fillStyle = particle.color;
  if (particle.round) {
    context.beginPath();
    context.arc(0, 0, particle.size / 2.5, 0, Math.PI * 2);
    context.fill();
  } else {
    context.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
  }
  context.restore();
};

const step = (time) => {
  const delta = Math.min((time - lastTime) / 16.67, 3);
  lastTime = time;
  const drag = DRAG ** delta;

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles = particles.filter((particle) => {
    particle.vx *= drag;
    particle.vy = particle.vy * drag + GRAVITY * delta;
    particle.x += particle.vx * delta;
    particle.y += particle.vy * delta;
    particle.rotation += particle.spin * delta;
    particle.wobble += particle.wobbleSpeed * delta;
    particle.life -= particle.decay * delta;

    if (particle.life <= 0 || particle.y > window.innerHeight + 40) return false;
    drawParticle(particle);
    return true;
  });

  if (particles.length) {
    frame = requestAnimationFrame(step);
  } else {
    // Hide the idle canvas so the browser stops compositing a full-screen layer.
    frame = null;
    canvas.style.display = 'none';
  }
};

// angle is in degrees (-90 is straight up); spread is the cone width around it.
export const burst = (x, y, { count = 60, angle = -90, spread = 360, speed = 9, colors = PARTY_COLORS } = {}) => {
  ensureCanvas();
  const total = Math.round(count * (prefersReducedMotion() ? 0.3 : 1));

  for (let i = 0; i < total && particles.length < MAX_PARTICLES; i += 1) {
    const direction = ((angle + (Math.random() - 0.5) * spread) * Math.PI) / 180;
    const velocity = speed * (0.45 + Math.random() * 0.75);
    particles.push({
      x,
      y,
      vx: Math.cos(direction) * velocity,
      vy: Math.sin(direction) * velocity,
      size: 7 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      round: Math.random() < 0.3,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.3,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.05 + Math.random() * 0.1,
      life: 1,
      decay: 0.004 + Math.random() * 0.003,
    });
  }

  if (!frame) {
    canvas.style.display = 'block';
    lastTime = performance.now();
    frame = requestAnimationFrame(step);
  }
};

// Confetti cannons from both bottom corners, then a pop in the middle.
export const celebrate = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const speed = height / 26;
  burst(0, height, { count: 100, angle: -60, spread: 45, speed });
  burst(width, height, { count: 100, angle: -120, spread: 45, speed });
  setTimeout(() => burst(width / 2, height * 0.35, { count: 70, speed: 12 }), 250);
};

export const destroyConfetti = () => {
  if (frame) cancelAnimationFrame(frame);
  frame = null;
  particles = [];
  if (!canvas) return;
  window.removeEventListener('resize', resize);
  canvas.remove();
  canvas = null;
  context = null;
};
