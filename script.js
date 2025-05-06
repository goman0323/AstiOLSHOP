    function updateClock() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('id-ID');
      document.getElementById('clock').textContent = `Jam sekarang: ${timeString}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });

    // Sakura Effect Script
    function createSakura() {
      const sakura = document.createElement('div');
      sakura.classList.add('sakura');
      sakura.style.left = Math.random() * window.innerWidth + 'px';
      sakura.style.animationDuration = 5 + Math.random() * 5 + 's';
      sakura.style.opacity = Math.random();
      sakura.style.transform = `scale(${0.5 + Math.random()})`;
      document.querySelector('.sakura-container').appendChild(sakura);

      setTimeout(() => sakura.remove(), 10000);
    }
    setInterval(createSakura, 300);