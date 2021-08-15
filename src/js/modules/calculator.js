const calculator = () => {
  const size = document.getElementById("size");
  const material = document.getElementById("material");
  const options = document.getElementById("options");
  const calcUpload = document.getElementById("calc-upload");
  const promocode = document.querySelector(".promocode");
  const calcPrice = document.querySelector(".calc-price");
  const calcForm = document.querySelector(".calc_form");
  const calcButton = calcForm.querySelector(".button-order");
  const fileNotSelected = calcForm.querySelector(".file-not-selected");
  const startPrice = 1000;

  let currentPrice;

  const calc = () => {
    if (calcUpload.value !== "") {
      fileNotSelected.classList.add("hide");
    }

    if (size.value !== "" && material.value !== "") {
      const optionsValue = options.value || 1;
      currentPrice = startPrice * size.value * material.value * optionsValue;

      if (promocode.value === "IWANTPOPART") {
        currentPrice = currentPrice * 0.7;
      }

      calcPrice.textContent = `${Math.ceil(currentPrice)} руб`;

      if (calcUpload.value !== "") {
        calcButton.disabled = false;
      }
    } else {
      calcPrice.textContent = calcPrice.dataset.origMsg;
      calcButton.disabled = true;
    }
  };

  calcForm.addEventListener("change", calc);
};

export default calculator;
