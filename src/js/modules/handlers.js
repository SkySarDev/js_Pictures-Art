import popups from "./popups";
import worksFilter from "./worksFilter";
import showMoreStyles from "./showMoreStyles";

const handlers = () => {
  let showPopupGift = true;

  window.addEventListener("scroll", () => {
    if (
      showPopupGift &&
      window.pageYOffset + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
    ) {
      showPopupGift = false;
      popups(document.querySelector(".popup-gift"), true);
      document.querySelector(".fixed-gift").style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    const target = e.target;

    // Show modals
    if (target.getAttribute("data-show-modal")) {
      const popupSel = `.${target.getAttribute("data-show-modal")}`;

      showPopupGift = false;
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
      showPopupGift = false;
      popups(target.closest("[data-modal]"), false);
    }

    // Filter portfolio works
    if (target.parentNode.classList.contains("portfolio-menu")) {
      worksFilter(target.parentNode, target.className);
    }

    // Show more styles
    if (target.classList.contains("button-transparent")) {
      target.classList.add("hide");
      showMoreStyles();
    }
  });
};

export default handlers;
