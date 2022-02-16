const handleComplete = (todos, todo, setTodos) => {
  setTodos(
    todos.map((item) => {
      if (item.id === todo.id)
        return {
          ...item,
          completed: !item.completed,
        };

      return item;
    })
  );
};

export default handleComplete;
