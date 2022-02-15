import React from 'react';
import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

import handleSubmit from '../handleFunctions/handleSubmit';

const AddItem = ({ newTodo, setNewTodo }) => {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <section>
      <form
        onSubmit={(e) => handleSubmit(e, newTodo, setNewTodo, todos, setTodos)}
      >
        <label htmlFor='add-todo' />
        <input
          type='text'
          placeholder='Add Todo'
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
    </section>
  );
};

export default AddItem;
