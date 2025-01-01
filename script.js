// Smoothly fade in sections when they appear in the viewport
// We'll use an Intersection Observer for modern browsers.

// 1. Select all elements that have the 'fade-in' class
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1, // The percentage of the element's visibility before callback
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    // Add the 'appear' class once in view
    entry.target.classList.add('appear');
    // Unobserve the element after it has appeared
    observer.unobserve(entry.target);
  });
}, appearOptions);

// 2. Attach the observer to each .fade-in element
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

