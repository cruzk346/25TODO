//form submission
let toDoForm = document.querySelector('#submit');
//to-do item itself
const input = document.querySelector('input[type="text"]');

const list = document.getElementById("list");

const submitFunction = (event) => {
  event.preventDefault()
//confirming entry
  alert('Added!');
//generating list item
  const taskList = document.createElement("li");
//assigning value to input from html
  taskList.textContent = input.value;
//adding done button
  const crossoutButton = document.createElement("button");
  crossoutButton.textContent = "Done"
  crossoutButton.id = 'crossout'
  taskList.appendChild(crossoutButton);
//adding input to list
  list.appendChild(taskList);
//adding remove button
  const deleteButton =document.createElement("button");
  deleteButton.id = 'delete'
  taskList.appendChild(deleteButton)
  deleteButton.addEventListener("click", () =>{
    list.removeChild(taskList);
  });
//listening to when task complete, crossing out item
  crossoutButton.addEventListener("click", () =>{
  taskList.style.textDecoration = "line-through";
  crossoutButton.disabled = true
});
input.value = ""
}

toDoForm.addEventListener("click", submitFunction);