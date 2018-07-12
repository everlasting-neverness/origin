let userForm = document.querySelector("form");
userForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let text = userForm.elements.info.value;
  let list = document.querySelector(".list");
  let insert = document.createElement("li");
  insert.innerText = text;
  list.appendChild(insert);
});
