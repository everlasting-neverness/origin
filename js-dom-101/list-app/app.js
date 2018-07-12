let button = document.querySelector('button');
button.addEventListener('click', function (event) {
  event.preventDefault();
  let list = document.querySelector('.list');
  let form = document.querySelector('form');
  let input = form.elements.info;
  let listElement = list.firstElementChild;
  let li = document.createElement('li');
  li.setAttribute('class', 'list-item');
  let text = document.createTextNode(input.value + ' ');
  li.appendChild(text);
  let but = document.createElement('button');
  but.innerHTML = '&times;';
  but.addEventListener('click', removeElement(but));
  li.appendChild(but);
  list.appendChild(li);
  form.reset();
})

let delButton = document.querySelectorAll('ul button');
for (let i = 0; i < delButton.length; i++) {
  delButton[i].addEventListener('click', removeElement (delButton[i]));
}


function removeElement (element) {
  function realremove () {
    element.parentElement.remove();
  }
  return realremove;
}
