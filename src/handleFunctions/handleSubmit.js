import handleAddItem from './handleAddItem';

const handleSubmit = (e, newTodo, setNewTodo, todos, setTodos) => {
  e.preventDefault();

  handleAddItem(newTodo, todos, setTodos);
  console.log('Submit');
  setNewTodo('');
};

export default handleSubmit;
