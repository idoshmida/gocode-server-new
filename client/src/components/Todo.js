function Todo({title, id, completed, toggleCompleted}) {
    return (
      
           
               <li>
                             <input type="checkbox" checked={completed} onChange={() => toggleCompleted(id)}/>

                    title: {title} id: {id} completed: {completed}
                </li>
    );
  }
  
  export default Todo;