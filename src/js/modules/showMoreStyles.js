const showMoreStyles = () => {
  const pictureStyles = document.querySelectorAll(".styles-field div");

  pictureStyles.forEach((element) => {
    if (element.classList.contains("hidden-lg")) {
      element.className =
        "animated fadeIn col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1";
    }
  });
};

export default showMoreStyles;
