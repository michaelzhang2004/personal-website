// Select all elements with the 'fade-in' class
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // Add class 'appear' once visible
    entry.target.classList.add('appear');
    // Unobserve after it appears
    observer.unobserve(entry.target);
  });
}, appearOptions);

// Observe each fade-in section
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

