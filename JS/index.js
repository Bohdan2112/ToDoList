const newTodo = document.querySelector('#new-todo');
const addTodoBtn = document.querySelector('#add-todo');
const todoList = document.querySelector('#todo-list');

addTodoBtn.addEventListener('click', addNewTodo);

todoList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('todo-item-remove-btn')) {
        target.parentElement.remove();
    }
});
newTodo.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addNewTodo();
    }
});
function addNewTodo() {
    if (newTodo.value) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = '<input type="checkbox" id = "todo-item-checkbox-0" class="todo-item-checkbox"> <label for="todo-item-checkbox-0" class = "todo-item-label"> <span></span> new todo item </label> <button class="todo-item-remove-btn"></button>';
        todoList.appendChild(todoItem);
        newTodo.value = '';
    }
}
