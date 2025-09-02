const counters = document.querySelectorAll('.number');
    const duration = 2000;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const format = counter.getAttribute('data-format');

      function animateCounter() {
        const startTime = performance.now();

        function update(timestamp) {
          const progress = timestamp - startTime;
          let current = Math.min(target, Math.floor((progress / duration) * target));

          let display;
          if (format === 'k') {
            display = (current / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
          } else if (format === 'lakh') {
            display = (current / 100000).toFixed(1).replace(/\.0$/, '') + ' Lakh+';
          } else if (format === 'plus') {
            display = current + '+';
          } else {
            display = current;
          }

          counter.innerText = display;

          if (current < target) {
            requestAnimationFrame(update);
          } else {
            setTimeout(() => animateCounter(), 3000);
          }
        }

        requestAnimationFrame(update);
      }

      animateCounter();
    });