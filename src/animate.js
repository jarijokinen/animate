export const animate = (options) => {
  const opts = {
    elements: document.querySelectorAll('.animate'),
    class: 'fade-in-up',
    ...options
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(opts.class);
        observer.unobserve(entry.target);
      }
    });
  };

  opts.elements.forEach((el) => {
    const observer = new IntersectionObserver(callback);
    observer.observe(el);
  });
};
