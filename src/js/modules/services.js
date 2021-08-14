const scrollHide = () => {
  const documentWidth = parseInt(document.documentElement.clientWidth);
  const windowWidth = parseInt(window.innerWidth);
  const scrollWidth = windowWidth - documentWidth;

  document.body.style.paddingRight = `${scrollWidth}px`;
  document.body.style.overflow = "hidden";
  document.querySelector(".fixed-gift").style.marginRight = `${scrollWidth}px`;
};

const scrollShow = () => {
  document.body.style.paddingRight = "0px";
  document.body.style.overflow = "";
  document.querySelector(".fixed-gift").style.marginRight = "0px";
};

export { scrollHide, scrollShow };
