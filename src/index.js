document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault() 
    buildToDo(e.target.new_todo.value)
    form.reset()
    document.getElementById('date').innerHTML = new Date().toDateString()
  })

});
function buildToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.className = 'botton'
  btn.textContent = 'x'
  li.textContent = `${todo}  `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  
}
function handleDelete(e){
  e.target.parentNode.remove()
}