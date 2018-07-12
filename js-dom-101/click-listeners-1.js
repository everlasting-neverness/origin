let tagP = document.getElementsByTagName("p");

function whatever() {
  console.log("click!");
}

for (let i = 0; i < tagP.length; i++) {
  tagP[i].onclick = whatever;
}
