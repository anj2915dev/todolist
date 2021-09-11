const inputText=document.querySelector(".input-text")
const btn=document.querySelector(".plus")
const todolist=document.querySelector(".todolist")

btn.addEventListener("click",e=>{
    e.preventDefault();
    const todoitem=document.createElement("div")
    todoitem.classList.add("todos")
    const newTodo=`        <li>
    <div class="todo">
        <p>${inputText.value}</p>
        <div class="todo-icon">
            <i class="fa fa-trash" aria-hidden="true"></i>

            <i class="fas fa-check"></i>

        </div>
    </div>
</li>`
todoitem.innerHTML=newTodo;
todolist.appendChild(todoitem)
inputText.value="";
    
})