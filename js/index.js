const inputText = document.querySelector(".input-text")
const btn = document.querySelector(".plus")
const todolist = document.querySelector(".todolist")
const select = document.querySelector("#lst")
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
    console.log(e.target.classList)

    const item = e.target
    if (classlist[1] === "fa-trash") {
        const todo = item.parentElement.parentElement
        todo.remove();
        removeTodosLocalstoreg(todo)

    }
    if (classlist[1] === "fa-check") {
        const todo = item.parentElement.parentElement.parentElement.parentElement
        const todo2 = item.parentElement.parentElement
        todo.classList.toggle("cumplited");
        todo2.classList.toggle("cumplited");
       
    }





})
select.addEventListener("click", cumplidUncumplid);
function cumplidUncumplid(a) {
const itemtodo=[...todolist.childNodes]
itemtodo.forEach(item=>{
    switch(a.target.value){
        case("all"):
      
        item.style.display = "flex"
        break;
        case("cumplid"):
        if(item.classList.contains("cumplited")){
        item.style.display = "flex"

        }
        else{
        item.style.display = "none"

        }
        break;
        case("uncumplid"):
        if(!item.classList.contains("cumplited")){
        item.style.display = "flex"

        }
        else{
        item.style.display = "none"

        }
    }
})



    

}
// saved todo
function savedLocalstrage(todo) {
    const saved = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    saved.push(todo)
    return localStorage.setItem("todos", JSON.stringify(saved))
}
document.addEventListener("DOMContentLoaded", getlocalstrage)
function getlocalstrage(e) {
    const savedlocal = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
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
// remove in localstorage
function removeTodosLocalstoreg(t) {
    const todo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
    const filterTodo = todo.filter(item => item !== t.children[0].innerText)
    localStorage.setItem("todos", JSON.stringify(filterTodo))
}

