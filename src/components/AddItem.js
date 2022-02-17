import React from 'react';
import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

import handleSubmit from '../handleFunctions/handleSubmit';

const AddItem = ({ newTodo, setNewTodo }) => {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <section className='section-add-todo'>
      <form
        className='form-add-todo'
        onSubmit={(e) => handleSubmit(e, newTodo, setNewTodo, todos, setTodos)}
      >
        <label htmlFor='add-todo' />
        <input
          className='input-todo'
          id='add-todo'
          type='text'
          placeholder='New Todo'
          required
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='btn btn-full btn-full--add-todo' type='submit'>
          Add Todo
        </button>
      </form>
    </section>
  );
};

export default AddItem;
