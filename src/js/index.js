"use strict";

import sliders from "./modules/sliders";

if (process.env.NODE_ENV === "development") import("../index.html");
import "../assets/css/bootstrap.css";
import "../assets/css/animate.css";
import "../assets/css/main.css";
import "../assets/img/sizes-1-1.png";
import "../assets/img/sizes-2-1.png";
import "../assets/img/sizes-3-1.png";
import "../assets/img/sizes-4-1.png";

import handlers from "./modules/handlers";
import popups from "./modules/popups";
import pictureSizes from "./modules/pictureSizes";

const startConsultInterval = () => {
  const isModalShow = Array.from(
    document.querySelectorAll("[data-modal]")
  ).filter((item) => item.dataset.modal === "show");

  if (isModalShow.length) {
    setTimeout(startConsultInterval, 5000);
  } else {
    popups(document.querySelector(".popup-consultation"), true);
  }
};
setTimeout(startConsultInterval, 60000);

handlers();
pictureSizes();

sliders(".main-slider-item", {
  autoSwipe: 4000,
  animationClass: "slideInDown",
});

sliders(".feedback-slider-item", {
  autoSwipe: 5000,
  animationClass: "slideInLeft",
  buttons: { next: ".main-next-btn", prev: ".main-prev-btn" },
});
