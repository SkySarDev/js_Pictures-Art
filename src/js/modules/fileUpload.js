const fileUpload = (input) => {
  const fileNameSource = input.files[0].name;
  const fileNameOut = document.querySelector("." + input.dataset.fileName);

  if (fileNameSource) {
    const fileName = fileNameSource.split(".");
    const gap = fileName[0].length > 5 ? "..." : ".";

    fileNameOut.textContent = fileName[0].substr(0, 6) + gap + fileName[1];
  } else {
    fileNameOut.textContent = "Файл не выбран";
  }
};

export default fileUpload;
