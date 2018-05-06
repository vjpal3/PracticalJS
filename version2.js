var todos = ['item1', 'item2', 'item3'];

function displayTodos() {
  console.log(todos);
}

function addTodo(item) {
  todos.push(item);
  displayTodos();
}

function changeTodo(position, value) {
  todos[position] = value;
  displayTodos();
}

function deleteTodo(position) {
  todos.splice(position, 1)
  displayTodos();
}
