import { useState } from "react";
import { useReducer } from "react";
import ContextChildrenComp3 from "./ContextChildrenComp3";
import ContextChildrenComp4 from "./ContextChildrenComp4";
import { CountContext, NumContext } from "./ContextComp2";

function reducer(state, action){
  switch (action.type){
    case "increment" :
      return {count: state.count+1}
    case "decrement" :
      return {count: state.count-1}
  }
}

const ContextParentComp1 = () => {
  const[state, dispatch] = useReducer(reducer, {count:0});
  const[num, setNum] = useState(0);
  return ( 
    <div>
      <CountContext.Provider value={{state: state, dispatch: dispatch}}>
        <ContextChildrenComp3 />
      </CountContext.Provider>
      <NumContext.Provider value={{num:num, setNum:setNum}}>
        <ContextChildrenComp4 />
      </NumContext.Provider>
    </div>
  );
}

export default ContextParentComp1;