import { useReducer } from "react";
import TodoListComp from "./TodoListComp";

const initstate = {
  TodoInput : "",
  TodoLists : [],
  Count : 0,
}

function reducer(state, action){
  switch(action.type){
    case "putText" :
      return {...state, TodoInput : action.payload};
    case "addTodo" :
      const newTodoLists = state.TodoLists.concat({
        todoCheck : false,
        todoText : state.TodoInput,
        id : state.Count+1,
      });
      return {...state, TodoLists: newTodoLists, Count: state.Count+1, TodoInput:"" }
    case "checkedTodo" :
      console.log("실행")
      const checkedTodoLists = state.TodoLists.map((todo)=>{
        console.log(action.id, todo.id);
        return todo.id == action.id? {...todo, todoCheck: !todo.todoCheck,} : todo
      });
      return {...state, TodoLists: checkedTodoLists}
    case "deleteTodo" :
      const deletedTodolists = state.TodoLists.filter((todo)=>(todo.id != action.id));
      // click된 li를 id로 식별하여 click된 li를 뺀 나머지 li를 배열로 반환하여 deletedTodoList에 할당
      return {...state, TodoLists : deletedTodolists}
    default :
      console.error("존재하지 않는 action 타입입니다")
      return state;
  }
}

const TodoComp = () => {
  const [state, dispatch] = useReducer(reducer, initstate)

  return (
    <div>
      <input type="text" value={state.TodoInput} onChange={
        (e)=>{dispatch({type:"putText", payload: e.target.value})}
        }/>
      <button onClick={()=>{
        dispatch({type: "addTodo"})
      }}>add</button>

      <ul>
        {state.TodoLists.map((todo)=>(<TodoListComp key={todo.id} todo={todo} dispatch={dispatch}/>))}
      </ul>
    </div>
  );
}

export default TodoComp;