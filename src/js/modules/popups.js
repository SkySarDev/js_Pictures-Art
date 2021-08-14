import { scrollHide, scrollShow } from "./services";

const popups = (popup, show) => {
  if (show) {
    scrollHide();
    popup.classList.add("show-popup");
  } else {
    scrollShow();
    popup.classList.remove("show-popup");
  }
};

export default popups;
