(function() {

  const initialTemplate = `
    <form>
      <input type="text" name="info" />
      <button>save</button>
    </form>
    <ul class="list">

    </ul>
    <div>
      completed: N
      not completed: N
    </div>
  `;
  let app = document.getElementById('TodosApp');
  app.innerHTML = initialTemplate;

  const todos = [
    // {
    //   checked: true,
    //   content: 'hello world',
    // },
    // {
    //   checked: false,
    //   content: 'second task',
    // }
  ];

  function clearList(list) {
    while (list.children.length != 0) {
	      list.firstChild.remove();
      }
  };

  function renderList(list) {
    for (let item = 0; item < todos.length; item++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        let sp = getToggler();
        let text = document.createTextNode(todos[item].content + ' ');
        li.innerHTML = sp;
        li.firstChild.appendChild(text);
        let but = document.createElement('button');
        but.innerHTML = '&times;';
        but.addEventListener('click', removeElement(but));
        li.appendChild(but);
        list.appendChild(li);
    }
  };


  let listStarter = document.querySelector('.list');
  renderList(listStarter);

  function getToggler() {
    return `<span class="toggler">
            	<label>
            		<input type="checkbox">
            		<span class="visible-checkbox">
            			<span class="tick"></span>
            		</span>
            	</label>
            </span>`;
  };



  let button = document.querySelector('button');
  button.addEventListener('click', function (event) {
    event.preventDefault();
    let list = document.querySelector('.list');
    let form = document.querySelector('form');
    clearList(list);
    let input = form.elements.info;
    let newTodoEntry = {
      checked: false,
      content: input.value,
    }
    todos.unshift(newTodoEntry);
    // let listElement = list.firstElementChild;
    // let li = document.createElement('li');
    // li.setAttribute('class', 'list-item');
    // let sp = getToggler();
    // let text = document.createTextNode(input.value + ' ');
    // li.innerHTML = sp;
    // li.firstChild.appendChild(text);
    // // li.appendChild(inn);
    // // li.appendChild(text);
    // let but = document.createElement('button');
    // but.innerHTML = '&times;';
    // but.addEventListener('click', removeElement(but));
    // li.appendChild(but);
    // list.appendChild(li);
    renderList(list);
    form.reset();
  })

  let delButton = document.querySelectorAll('ul button');
  for (let i = 0; i < delButton.length; i++) {
    delButton[i].addEventListener('click', removeElement (delButton[i]));
  }
})()


// <li class="list-item">
//   <span>
//     ${getToggler()}
//     first...
//   </span>
//   <button>&times;</button>
// </li>
// <li class="list-item">
//   <span>
//     ${getToggler()}
//     second...
//   </span>
//   <button>&times;</button>
// </li>
// <li class="list-item">
//   <span>
//     ${getToggler()}
//     something ele
//   </span>
//   <button>&times;</button>
// </li>
