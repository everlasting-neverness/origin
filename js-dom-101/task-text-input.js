document
  .querySelector("input")
  .addEventListener("input", function listenToTheText(event) {
    let targetElement = document.querySelector("#current-result");
    targetElement.innerText = event.target.value;
  });
