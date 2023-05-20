import { useState } from 'react';

import './App.css';

import Todo from './components/todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcional tela de Login",
      category: "Trabalho",
      isComplete: false,
    },
    {
      id: 2,
      text: "Correr",
      category: "Pessoal",
      isComplete: false,
    },
    {
      id: 3,
      text: "Estudar NodeJs",
      category: "Estudos",
      isComplete: false,
    },
  ]);

  const addTodo = (text, category) => {
      const newTodos = [
        ...todos,
        {
          id: Math.floor(Math.random() * 10000),
          text,
          category,
          isComplete: false,
        }
      ];
      setTodos(newTodos)
  };

  const deleteTodo = (id) => {
    console.log("Chamada de função");
      const newTodos = [...todos];
      const filteredTodos = newTodos.filter((todo) => 
        todo.id !== id ? todo : null
      
      );
      setTodos(filteredTodos);
      
  };

  return (
    <div className="app"> 

      <h1>To Do List</h1>

      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
      <TodoForm  addTodo={addTodo}/>
    </div>
  )
}

export default App;
