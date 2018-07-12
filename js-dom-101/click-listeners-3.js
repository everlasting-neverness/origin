function replacement(event) {
  curResult.innerText = event.target.innerText;
}

let curResult = document.getElementById("current-result");
let pElements = document.getElementsByTagName("p");
for (let i = 0; i < pElements.length; i++) {
  pElements[i].addEventListener("click", replacement);
}
