import React from 'react'

const Todo = ({todo, deleteTodo}) => {
   
  return (
    <div className="todo">
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">
              ({todo.category})
            </p>
         </div>

         <div>
            <button className='complete'>Finalizar</button>
            <button className='remove' onClick={() => deleteTodo(todo.id)}>Excluir</button>
          </div>
          
    </div>
  )
}

export default Todo