// adding part

let addbtn = document.querySelector('#add')
let clearbtn = document.querySelector('#Clear')

let todo_items = document.querySelector('.todo-items')
addbtn.addEventListener('click', function () {
    let todo_input = prompt("Enter the todo items")

    if(todo_input === "") {
        return;
    }

    let todo_ = document.createElement('li')
    todo_.innerText = todo_input;
    todo_.innerHTML += '<button class ="delete">Delete</button>'
    todo_items.append(todo_)

})

// remove part

clearbtn.addEventListener('click', function () {
    todo_items.innerHTML = ""
})


// delete part

todo_items.addEventListener('click', function (event) {
    if (!event.target.classList.contains('delete'))
        return;

    event.target.parentElement.remove();
})



