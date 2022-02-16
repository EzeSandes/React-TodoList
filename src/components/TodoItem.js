import React from 'react';

import handleComplete from '../handleFunctions/handleComplete';
import handleDelete from '../handleFunctions/handleDelete';

const TodoItem = ({ todo, setTodos, todos }) => {
  return (
    <li className='todo'>
      <div className='todo-body'>
        <p className={todo.completed ? 'completed' : ''}>{todo.todo}</p>
      </div>
      {/* BUTTONS */}
      <div className='todo-buttons'>
        <button
          className={`complete-btn ${todo.completed ? 'btn-completed' : ''}`}
          onClick={() => handleComplete(todos, todo, setTodos)}
        >
          <ion-icon
            name={`${todo.completed ? 'checkbox-outline' : 'square-outline'}`}
          ></ion-icon>
        </button>
        <button
          className='trash-btn'
          onClick={() => handleDelete(todos, todo, setTodos)}
        >
          <ion-icon name='close-circle-outline'></ion-icon>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
