import { useContext } from "react";
import DataContext from "../context/DataContext";

const RecieptComp = () => {
  const {state} = useContext(DataContext);

  const showResult = () => {
    state.result.map((r,i)=>(
      <div key={i}>
        <p>{r}</p>
      </div>
    ))
  }

  return ( 
    <div className="reciept-comp-background">
      {
        
        state.reciept.map((r,i)=>(
          <div key={i}>
            <p>{r.name}: {r.answer}</p>
          </div>
        ))
      }
    
      {
        state.result.map((r,i)=>(
          <div className="result-map" key={i}>
            <p style={{margin: "0"}}>{r}</p>
          </div>
        ))
      }
    
    </div>
  );
}

export default RecieptComp;