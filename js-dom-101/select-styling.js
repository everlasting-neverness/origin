const selectTemplate = `
    <div class="select">
      <select name="selector" id="">
        <option value="1">none</option>
        <option value="2">two</option>
        <option value="3">three</option>
      </select>
      <span></span>
    </div>
`

const selectArea = document.body.querySelector('.select-area');

let isVisible = true;
document.querySelector('.select-toggler').addEventListener('click', () => {
  if (isVisible) {
    document.querySelector('.select').remove();
  } else {
    selectArea.innerHTML = selectTemplate;
  }
  isVisible = !isVisible;
});

let select = document.querySelector('select');
select.addEventListener('focus', function (event) {
  let parentDiv = select.parentElement;
  parentDiv.classList.add('select--focused');
});
select.addEventListener('blur', function (event) {
  let parentDiv = select.parentElement;
  parentDiv.classList.remove('select--focused');
})
