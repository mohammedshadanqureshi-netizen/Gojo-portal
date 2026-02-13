// Cursor follow – now always visible
const dot = document.getElementById('dot');
const ring = document.getElementById('ring');

if (dot && ring) {
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
}

// Cursed energy particles
const particlesContainer = document.getElementById('particles');
for (let i = 0; i < 100; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.width = p.style.height = Math.random() * 5 + 1 + 'px';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.setProperty('--tx', (Math.random() - 0.5) * 800 + 'px');
  p.style.setProperty('--ty', (Math.random() - 0.5) * 800 + 'px');
  p.style.animationDelay = Math.random() * 40 + 's';
  p.style.animationDuration = (Math.random() * 20 + 20) + 's';
  particlesContainer.appendChild(p);
}