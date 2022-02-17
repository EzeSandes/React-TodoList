import React from 'react';

import handleComplete from '../handleFunctions/handleComplete';
import handleDelete from '../handleFunctions/handleDelete';

const TodoItem = ({ todo, setTodos, todos }) => {
  return (
    <li className={`todo ${todo.completed ? 'completed' : ''}`}>
      <div className='todo-body'>
        <p>{todo.todo}</p>
      </div>
      {/* BUTTONS */}
      <div className='todo-buttons-container'>
        <button
          className={`btn complete-btn ${
            todo.completed ? 'completed-btn' : ''
          }`}
          onClick={() => handleComplete(todos, todo, setTodos)}
        >
          <ion-icon
            class='md hydrated icon-todo'
            name={`${todo.completed ? 'checkbox-outline' : 'square-outline'}`}
          ></ion-icon>
        </button>
        <button
          className='btn trash-btn'
          onClick={() => handleDelete(todos, todo, setTodos)}
        >
          <ion-icon
            class='md hydrated icon-todo'
            name='close-circle-outline'
          ></ion-icon>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
