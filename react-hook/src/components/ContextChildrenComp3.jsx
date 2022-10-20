import { useContext } from "react";
import { CountContext } from "./ContextComp2";

const ContextChildrenComp3 = (porps) => {
  const {state,dispatch} = useContext(CountContext);
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type: "increment"})}}>+1</button>
      <button onClick={()=>{dispatch({type: "decrement"})}}>-1</button>
    </div>
  );
}

export default ContextChildrenComp3;