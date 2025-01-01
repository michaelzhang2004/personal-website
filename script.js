// Fade-in animation using Intersection Observer
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // triggers when 10% of the element is visible
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


