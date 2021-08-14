const worksFilter = (portfolioMenu, filterClass) => {
  const portfolioWrapper = document.querySelector(".portfolio-wrapper");
  const portfolioNo = document.querySelector(".portfolio-no");

  portfolioMenu.querySelectorAll("li").forEach((menuItem) => {
    if (menuItem.classList.contains(filterClass)) {
      menuItem.classList.add("active");
    } else {
      menuItem.classList.remove("active");
    }
  });

  if (portfolioWrapper.querySelectorAll(`.${filterClass}`).length > 0) {
    portfolioNo.classList.remove("show");
  } else {
    portfolioNo.classList.add("show");
  }

  portfolioWrapper
    .querySelectorAll(".portfolio-block")
    .forEach((portfolioItem) => {
      if (!portfolioItem.classList.contains(filterClass)) {
        portfolioItem.classList.remove("show");
        portfolioItem.classList.add("hide");
      } else {
        portfolioItem.classList.add("show", "animated", "fadeIn");
      }
    });
};

export default worksFilter;
