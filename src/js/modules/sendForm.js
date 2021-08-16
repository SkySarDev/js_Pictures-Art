const sendForm = (form) => {
  const statusImg = document.createElement("img");
  const statusText = document.createElement("p");
  const formData = new FormData(form);

  form.reset();

  const showStatus = (status) => {
    const statusMessages = {
      sending: {
        img: "spinner.gif",
        text: "Идёт отправка...",
      },
      success: {
        img: "ok.png",
        text: "Спасибо, скоро мы с Вами свяжемся.",
      },
      error: {
        img: "fail.png",
        text: "Что-то пошло не так...",
      },
    };

    form.textContent = "";
    form.style.textAlign = "center";

    statusImg.src = `img/${statusMessages[status].img}`;
    statusText.textContent = statusMessages[status].text;

    form.appendChild(statusImg);
    form.appendChild(statusText);
  };
  showStatus("sending");

  fetch(
    "https://script.google.com/macros/s/AKfycbzd8d2kzNWOKq5y3l6o9WA_Q1qnVRq-y_RcYSapW8NWpjxy7gOoXfxDNEorr7BCFLQUrQ/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status === 200) {
        showStatus("success");
      } else {
        throw new Error(response.statusText);
      }
    })
    .catch((error) => {
      showStatus("error");
    });
};

export default sendForm;
