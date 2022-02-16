import React, { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContext';

import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, setTodos, filteredTodos } = useContext(TodosContext);

  return (
    <section className='section-todo-list'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
