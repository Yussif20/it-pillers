document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.clients-slider-wrapper', {
    loop: true, // Enables infinite looping
    slidesPerView: 'auto', // Automatically adjusts number of slides based on width
    spaceBetween: 40, // Gap between slides (matches your original design)
    speed: 3000, // Transition speed in milliseconds (smooth scrolling)
    autoplay: {
      delay: 0, // No delay for continuous scrolling
      disableOnInteraction: false, // Keeps autoplay even after interaction
    },
    grabCursor: true, // Shows grab cursor on desktop
    breakpoints: {
      // Responsive adjustments
      768: {
        spaceBetween: 30,
      },
      480: {
        spaceBetween: 20,
      },
    },
  });
});document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.clients-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
    speed: 3000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    grabCursor: true,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
      480: {
        spaceBetween: 20,
      },
    },
  });
});