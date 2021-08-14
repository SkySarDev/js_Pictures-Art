import popups from "./popups";

const handlers = () => {
  document.addEventListener("click", (e) => {
    const target = e.target;

    // Show modals
    if (target.getAttribute("data-show-modal")) {
      const popupSel = `.${target.getAttribute("data-show-modal")}`;
      popups(document.querySelector(popupSel), true);

      if (target.classList.contains("fixed-gift")) {
        target.style.display = "none";
      }
    }

    // Hide modals
    if (
      target.classList.contains("popup-close") ||
      target.classList.contains("popup")
    ) {
      popups(target.closest("[data-modal]"), false);
    }
  });
};

export default handlers;
