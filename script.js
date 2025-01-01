// Intersection Observer for fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    // Add 'appear' class once in view
    entry.target.classList.add('appear');
    // Stop observing after it appears
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

