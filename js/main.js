document.addEventListener("DOMContentLoaded", () => {
  // --- 1. TYPEWRITER EFFECT ---
  const textElement = document.querySelector(".typewriter-text");
  
  if (textElement) {
    const phrases = [
      "Web Applications",
      "Assamese Designs",
      "AI Tools",
      "Interactive Games",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500; // Pause before new phrase
      }

      setTimeout(typeWriter, typeSpeed);
    }

    typeWriter();
  }

  // --- 2. SCROLL REVEAL ANIMATION ---
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    ".project-card, .about-grid, .contact-wrapper, .hero-text, .hero-visual"
  );

  animateElements.forEach((el) => {
    el.classList.add("hidden-scroll");
    observer.observe(el);
  });
});