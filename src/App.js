// Hooks
import { useState } from 'react';

// Contexts
import { TodosContext } from './contexts/TodosContext';

// Components
import Header from './components/Header';
import AddItem from './components/AddItem';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState([]);

  return (
    <div className='container'>
      <div className='App'>
        <Header />
        <TodosContext.Provider value={{ todos, setTodos }}>
          <AddItem newTodo={newTodo} setNewTodo={setNewTodo} />
        </TodosContext.Provider>
      </div>
    </div>
  );
}

export default App;
