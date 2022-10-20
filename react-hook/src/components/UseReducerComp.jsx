import { useReducer } from "react";
import UseReducerCountComp from "./UseReducerCountComp";
import MemoComp from "./MemoComp";

function reducer(state , action){
  switch(action.type){
    case 'decrement' :
      return {count : state.count -1}
    case 'zero' :
      return {count : 0}
    case 'increment' :
      return {count : state.count +1 }
    case 'printText' :
      return {input: action.payload}

  }
}

const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, {count : 0, input:""});
  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={()=>{dispatch({type: 'decrement'})}}>-1</button>
      <button onClick={()=>{dispatch({type: 'zero'})}}>0</button>

      <UseReducerCountComp state={state} dispatch={dispatch}/>

      {/*
        자식 컴포넌트 MemoComp를 하나 만들고,  
        ReducerComp의 state에 input="" 추가하고, reducer를 작성하여
        MemoComp에서 작성한 글이 ReducerComp에서 수정되어 나올수있게 하세요
      */}
      <h2>{state.input}</h2>
      <MemoComp state={state} dispatch={dispatch}/>
    </div>
  );
}

export default UseReducerComp;