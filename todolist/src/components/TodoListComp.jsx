const TodoListComp = (props) => {
  const {todo, dispatch} = props;
  return (
    <li>
      <input type="checkbox" checked={todo.todoCheck}
        onClick={()=>{dispatch({type: "checkedTodo", id:todo.id})}} readOnly/>
      {todo.todoText}
      <button onClick={()=>(
        dispatch({type: "deleteTodo", id: todo.id})
      )}>delete</button>
    </li>
  );
}

export default TodoListComp;