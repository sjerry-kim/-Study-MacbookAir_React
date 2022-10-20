import { useContext } from "react";
import { NumContext } from "./ContextComp2";

const ContextChildrenComp4 = () => {
  const {num, setNum} = useContext(NumContext);
  return (
    <div>
      <h2>{num}</h2>
      <button onClick={()=>{setNum(num+1)}}>+1</button>
      <button onClick={()=>{setNum(num-1)}}>-1</button>
    </div>
  );
}

export default ContextChildrenComp4;