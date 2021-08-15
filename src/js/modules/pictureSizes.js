const pictureSizes = () => {
  const sizesWrapper = document.querySelector(".sizes-wrapper");

  const heandlers = (elem, event, show) =>
    elem.addEventListener(event, (e) => {
      const target = e.target;

      if (target.tagName === "IMG") {
        if (show) {
          target.parentNode.querySelectorAll("p").forEach((item) => {
            item.classList.remove("hide");
          });
        } else {
          target.parentNode.querySelectorAll("p").forEach((item) => {
            if (!item.classList.contains("sizes-hit")) {
              item.classList.add("hide");
            }
          });
        }

        [target.src, target.dataset.img] = [target.dataset.img, target.src];
      }
    });

  heandlers(sizesWrapper, "mouseover", false);
  heandlers(sizesWrapper, "mouseout", true);
};

export default pictureSizes;
