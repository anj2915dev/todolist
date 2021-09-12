const inputText = document.querySelector(".input-text")
const btn = document.querySelector(".plus")
const todolist = document.querySelector(".todolist")
// add todo
btn.addEventListener("click", e => {
    e.preventDefault();
    const todoitem = document.createElement("div")
    todoitem.classList.add("todos")
    const newTodo = `        <li>
    <div class="todo">
        <p>${inputText.value}</p>
        <div class="todo-icon">
            <i class="fa fa-trash" aria-hidden="true"></i>

            <i class="fas fa-check"></i>

        </div>
    </div>
</li>`
    todoitem.innerHTML = newTodo;
    todolist.appendChild(todoitem)
    savedLocalstrage(inputText.value)
    inputText.value = "";

})
// dlete and cumplid todo
todolist.addEventListener("click", e => {
    const classlist = [...e.target.classList]
    const item = e.target
    if (classlist[1] === "fa-trash") {
        const todo = item.parentElement.parentElement
        todo.remove();
        removeTodosLocalstoreg(todo)

    }
    if (classlist[1] === "fa-check") {
        const todo = item.parentElement.parentElement
        todo.classList.toggle("cumplid")
    }





})
// saved todo
function savedLocalstrage(todo) {
    const saved = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    saved.push(todo)
    return localStorage.setItem("todos", JSON.stringify(saved))
}
document.addEventListener("DOMContentLoaded",getlocalstrage)
function getlocalstrage(e){
    const savedlocal=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]
    savedlocal.forEach(todo => {
        const todoitem = document.createElement("div")
        todoitem.classList.add("todos")
        const newTodo = `        <li>
        <div class="todo">
            <p>${todo}</p>
            <div class="todo-icon">
                <i class="fa fa-trash" aria-hidden="true"></i>
    
                <i class="fas fa-check"></i>
    
            </div>
        </div>
    </li>`
        todoitem.innerHTML = newTodo;
        todolist.appendChild(todoitem)
    });
  
}
function removeTodosLocalstoreg(t){
    const todo=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]
    const filterTodo=todo.filter(item=>item!==t.children[0].innerText)
    localStorage.setItem("todos",JSON.stringify(filterTodo))
}