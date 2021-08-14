import { scrollHide, scrollShow } from "./services";

const popups = (popup, show) => {
  if (show) {
    scrollHide();
    popup.classList.add("show-popup");
    popup.dataset.modal = "show";
  } else {
    scrollShow();
    popup.classList.remove("show-popup");
    popup.dataset.modal = "";
  }
};

export default popups;
