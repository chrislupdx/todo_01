// document.body.onload = addElement;
// function addElement () {
//   let newDiv = document.createElement("blank01");
//   let newContent = document.createTextNode("//needs an entry");
//   newDiv.appendChild(newContent);
//   let currentDiv = document.getElementById("blank");
//     document.body.appendChild(newDiv, currentDiv);
// }
// let element = document.createElement('div1');

let todoList = []
let todoInput = document.querySelector('#goes_into_list')
todoInput.addEventListener('keypress', function(event){
  if (event.key == 'Enter'){
    let todo = document.createElement("li");
    let todoText = document.createTextNode(todoInput.value);
    todo.appendChild(todoText);
    let parentDiv = document.querySelector('#stored')
    parentDiv.appendChild(todo)
  }
})
