import { nanoid } from 'nanoid';

const handleAddItem = (newTodo, todos, setTodos) => {
  const newItem = {
    id: nanoid(10),
    todo: newTodo,
    completed: false,
  };

  setTodos([...todos, newItem]);
  console.log(todos);
};

export default handleAddItem;
