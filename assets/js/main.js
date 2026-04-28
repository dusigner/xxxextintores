document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav) nav.classList.remove('is-open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });

  const revealEls = document.querySelectorAll('.section, .card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  const canvas = document.getElementById('hero-fire-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.floor(width * window.devicePixelRatio);
    canvas.height = Math.floor(height * window.devicePixelRatio);
    ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

    particles = Array.from({ length: Math.max(18, Math.floor(width / 70)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 140 + 80,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.45 + 0.15),
      alpha: Math.random() * 0.28 + 0.08,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      grad.addColorStop(0, `rgba(255, 123, 31, ${p.alpha})`);
      grad.addColorStop(0.45, `rgba(196, 30, 58, ${p.alpha * 0.85})`);
      grad.addColorStop(1, 'rgba(5, 10, 15, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx;
      p.y += p.vy;

      if (p.y + p.r < 0) {
        p.y = height + p.r;
        p.x = Math.random() * width;
      }

      if (p.x < -p.r) p.x = width + p.r;
      if (p.x > width + p.r) p.x = -p.r;
    });

    requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener('resize', resize);
});
