// We'll use Intersection Observer for a fade-in effect when sections appear

// 1. Select all elements with the 'fade-in' class
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // triggers when 10% of the element is visible
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    // Add the 'appear' class once in view
    entry.target.classList.add('appear');
    // Unobserve after it appears
    observer.unobserve(entry.target);
  });
}, appearOptions);

// 2. Attach the observer to each .fade-in element
faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

