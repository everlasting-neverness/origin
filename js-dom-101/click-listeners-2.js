let tagP = document.getElementsByTagName("p");

function whatever(event) {
  console.log(event.target.textContent);
}

for (let i = 0; i < tagP.length; i++) {
  // tagP[i].onclick = whatever;
  tagP[i].addEventListener('click', whatever);
}
