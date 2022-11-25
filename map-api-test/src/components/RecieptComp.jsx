import { useContext } from "react";
import DataContext from "../context/DataContext";

const RecieptComp = () => {
  const {state} = useContext(DataContext);

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
            <p style={{margin: "0"}}>{r.name}</p>
          </div>
        ))
        
      }
    
    </div>
  );
}

export default RecieptComp;