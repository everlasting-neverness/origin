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

  function generateId(todos) {
  let out = [];
  for (let x = 0; x < todos.length; x++) {
    let n = {};
    n.id = x; // or + 1 for normal DB
    n.content = todos[x].content;
    n.checked = todos[x].checked;
    out.push(n);
    }
  todos = out;
  return todos;
  }

  var todos = [
    // {
    //   checked: true,
    //   content: 'hello world',
    // },
    // {
    //   checked: false,
    //   content: 'second task',
    // }
  ];

  window.todos = todos;

  function clearList(list) {
    while (list.children.length != 0) {
	      list.firstChild.remove();
      }
  };

  function renderList(list) {
    clearList(list);
    todos = generateId(todos);
    for (let item = 0; item < todos.length; item++) {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        li.setAttribute('id', String(item));
        let sp = getToggler();
        let text = document.createTextNode(todos[item].content + ' ');
        li.innerHTML = sp;
        li.firstChild.appendChild(text);
        let but = document.createElement('button');
        but.innerHTML = '&times;';
        but.addEventListener('click', function() {
          let todos_id = but.parentElement.id;
          deleteId(todos, todos_id);
          // removeElement(delButton[i]);
          renderList(list);
        });
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


  function deleteId(arr, id) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x].id == id)
      arr.splice(x, 1);
    }
  return arr;
  }

  // let delButton = document.querySelectorAll('ul button');
  // for (let i = 0; i < delButton.length; i++) {
  //   delButton[i].addEventListener('click', function() {
  //     let list = document.querySelector('.list');
  //     let todos_id = delButton[i].parentElement.id;
  //     deleteId(todos, todos_id);
  //     // removeElement(delButton[i]);
  //     renderList(list);
  //
  //   });
  // }
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
