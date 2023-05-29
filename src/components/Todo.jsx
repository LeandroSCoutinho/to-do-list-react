import React from 'react';
import { FaCheck, FaTrashAlt } from "react-icons/fa";

const Todo = ({todo, deleteTodo, finalizeTodo}) => {
   
  return (
    <div className="todo" 
      style={{ textDecoration: todo.isFinalized ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
         </div>

         <div className='btnGroup'>
            <button 
              className='btnComplete' 
              onClick={() => finalizeTodo(todo.id)}>
                <FaCheck />
            </button>

            <button 
              className='btnRemove' 
              onClick={() => deleteTodo(todo.id)}>
                <FaTrashAlt />
            </button>
          </div>
          
    </div>
  )
}

export default Todo;