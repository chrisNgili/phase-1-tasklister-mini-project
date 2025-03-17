document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form'); 
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let input = document.querySelector('#new-task-description'); 
    buildToDo(input.value);

    document.getElementById('date').innerHTML = new Date().toDateString();
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.className = 'botton';
  btn.textContent = 'x';
  li.textContent = `${todo}  `;
  li.appendChild(btn);
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
