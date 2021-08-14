const popups = (popup, show) => {
  if (show) {
    popup.classList.add("show-popup");
  } else {
    popup.classList.remove("show-popup");
  }
};

export default popups;
