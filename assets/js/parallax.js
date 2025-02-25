// parallax.js

function applyParallaxEffect(elementSelector, range = 5, offset = 2.5) {
    const element = document.querySelector(elementSelector);
    if (!element) return;
  
    document.addEventListener('mousemove', (event) => {
      const x = (event.clientX / window.innerWidth) * range;
      const y = (event.clientY / window.innerHeight) * range;
      element.style.transform = `translate(${x - offset}%, ${y - offset}%)`;
    });
  }
  