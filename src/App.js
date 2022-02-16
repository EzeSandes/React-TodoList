// Hooks
import { useState, useEffect } from 'react';

// Contexts
import { TodosContext } from './contexts/TodosContext';

// Components
import Header from './components/Header';
import AddItem from './components/AddItem';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

function App() {
  const ITEM_KEY_LOCAL = 'todos';
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem(ITEM_KEY_LOCAL)) || []
  );
  const [newTodo, setNewTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
    handleSaveLocalTodos(todos);
  }, [status, todos]);

  const handleSaveLocalTodos = (todos) => {
    localStorage.setItem(ITEM_KEY_LOCAL, JSON.stringify(todos));
  };

  return (
    <div className='container'>
      <div className='App'>
        <Header />
        <TodosContext.Provider value={{ todos, setTodos, filteredTodos }}>
          <AddItem newTodo={newTodo} setNewTodo={setNewTodo} />
          <Filter setStatus={setStatus} />
          <TodoList />
        </TodosContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
