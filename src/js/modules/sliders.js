const sliders = (slidesSel, options) => {
  const slides = document.querySelectorAll(slidesSel);

  let slideIndex = 0;
  let interval;

  const swipe = (animationClass = options.animationClass) => {
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
      slide.classList.add("animated", "hidden");
      slide.classList.remove("slideInLeft", "slideInRight");
    });

    slides[slideIndex].classList.remove("hidden");
    slides[slideIndex].classList.add(animationClass);
  };
  swipe();

  const autoSwipe = () => {
    interval = setInterval(() => {
      slideIndex++;
      swipe();
    }, options.autoSwipe);
  };

  if (options.autoSwipe) autoSwipe();

  if (options.buttons) {
    document
      .querySelector(options.buttons.next)
      .addEventListener("click", () => {
        slideIndex++;
        swipe("slideInLeft");
      });

    document
      .querySelector(options.buttons.prev)
      .addEventListener("click", () => {
        slideIndex--;
        swipe("slideInRight");
      });
  }

  slides[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(interval);
  });

  slides[0].parentNode.addEventListener("mouseleave", autoSwipe);
};

export default sliders;
