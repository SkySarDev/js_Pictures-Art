"use strict";

import sliders from "./modules/sliders";

if (process.env.NODE_ENV === "development") import("../index.html");
import "../assets/css/bootstrap.css";
import "../assets/css/animate.css";
import "../assets/css/main.css";
import handlers from "./modules/handlers";

handlers();

sliders(".main-slider-item", {
  autoSwipe: 4000,
  animationClass: "slideInDown",
});

sliders(".feedback-slider-item", {
  autoSwipe: 5000,
  animationClass: "slideInLeft",
  buttons: { next: ".main-next-btn", prev: ".main-prev-btn" },
});
