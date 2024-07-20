let addButton = document.getElementById("add");
let input = document.querySelector("input[type='text']");
let taskList = document.getElementById("task-list");
let delbutton = document.getElementById("del");

addButton.addEventListener("click", function() {
    let newTask = document.createElement("p");
    newTask.textContent = input.value;
    taskList.appendChild(newTask);
    input.value = "";   
});

delbutton.addEventListener("click",function(){
      document.querySelector("p").remove()
});