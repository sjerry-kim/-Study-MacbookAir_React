import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) =>{
  // Reciept 리스트정보
  const [reciept, setReciept] = useState([]);

  // 결과 정보
  const [result, setResult] = useState(["a", "b", "c", "d", "e", "f"]);

  const value = {
    state : {reciept, result},
    action : {setReciept, setResult}
  }

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export {DataProvider};
export default DataContext;

