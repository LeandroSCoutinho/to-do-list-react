import { useState } from 'react';

import './App.css';

import Todo from './components/todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcional tela de Login",
      category: "Trabalho",
      isFinalized: false,
    },
    {
      id: 2,
      text: "Correr",
      category: "Pessoal",
      isFinalized: false,
    },
    {
      id: 3,
      text: "Estudar NodeJs",
      category: "Estudos",
      isFinalized: false,
    },
  ]);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
      const newTodos = [
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          text,
          category,
          isFinalized: false,
        }
      ];
      setTodos(newTodos)
  };

  const deleteTodo = (id) => {
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todo) => 
        todo.id !== id ? todo : null
      
      );
      setTodos(filteredTodos); 
  };

  const finalizeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
      todo.id == id ? (todo.isFinalized = !todo.isFinalized) : todo
    );
    setTodos(newTodos);
  }

  

  return (
    <div className="app"> 
      <div className="content">

        <h1>To Do List</h1>

        <Search search={search} setSearch={setSearch}/>

        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

        <div className="todo-list">
          {todos
          .filter((todo) => ( 
            filter === "All" 
              ? true 
              : filter === "finalized" 
              ? todo.isFinalized 
              : !todo.isFinalized)
            )
          .filter((todo) => (
            todo.text.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())
          ))
          .sort((a,b) => 
          sort === "Asc"
          ? a.text.localeCompare(b.text)
          :b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo 
              key={todo.id} 
              todo={todo} 
              deleteTodo={deleteTodo} 
              finalizeTodo={finalizeTodo} />
          ))
          }
        </div>
        <TodoForm  addTodo={addTodo}/>
      </div>
    </div>
  )
}

export default App;
