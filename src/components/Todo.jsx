import React from 'react';

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

         <div>
            <button 
              className='complete' 
              onClick={() => finalizeTodo(todo.id)}>
                Finalizar
            </button>

            <button 
              className='remove' 
              onClick={() => deleteTodo(todo.id)}>
                Excluir
            </button>
          </div>
          
    </div>
  )
}

export default Todo;