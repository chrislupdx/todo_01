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

    let removeBtn = document.createElement('button')
    removeBtn.innerText = 'x'
    todo.appendChild(removeBtn)
    removeBtn.addEventListener('click', function(event){
      parentDiv.removeChild(todo);
    })

    let checkmark = document.createElement('button')
    checkmark.innerText = '✓'
    todo.appendChild(checkmark)

    checkmark.addEventListener('click', function(event){
      let toggle = event.target.parentElement; //80%surethetargetisTodo
      console.log(toggle)
      toggle.classList.toggle("strikethrough");
    })
  }
})
//right now the check markes forcefully toggle all of the items, we neeed to individute each entry
//can we dynamically generate IDs with javascript for our list entries?
