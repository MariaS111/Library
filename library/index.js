document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      const target = document.querySelector(event.target.getAttribute('href'));
      if (target) { 
        event.preventDefault(); 
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1500; 
        let start = null;

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          window.scrollTo(0, easeInOut(progress, startPosition, distance, duration));
          if (progress < duration) {
            window.requestAnimationFrame(step);
          }
        }

        function easeInOut(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t * t + b;
          t -= 2;
          return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(step);
      }
    }
  });