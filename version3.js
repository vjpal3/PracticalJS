var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log(this.todos);
  },
  addTodo: function(item) {
    this.todos.push(item);
    this.displayTodos();
  },
  changeTodo: function(position, value) {
    this.todos[position] = value;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1)
    this.displayTodos();
  }
}
