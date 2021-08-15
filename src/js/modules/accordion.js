const accordion = (activeEl) => {
  document.querySelectorAll(".accordion-heading").forEach((item) => {
    if (item === activeEl) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

export default accordion;
