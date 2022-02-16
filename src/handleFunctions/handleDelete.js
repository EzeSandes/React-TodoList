const handleDelete = (todos, todo, setTodos) => {
  setTodos(todos.filter((item) => item.id !== todo.id));
};

export default handleDelete;
