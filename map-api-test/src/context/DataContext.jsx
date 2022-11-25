import { useState } from "react";
import { createContext } from "react";

const DataContext = createContext();

const DataProvider = ({children}) =>{
  // Reciept 리스트정보
  const [reciept, setReciept] = useState([]);

  // 결과 정보
  const [result, setResult] = useState([
    { name: "a",
      fruits: "딸기",
      color: "레드",
      animal: "강아지"},
    { name: "b",
      fruits: "바나나",
      color: "옐로",
      animal: "고양이"},
    { name: "c",
      fruits: "사과",
      color: "블루",
      animal: "햄스터"},
    { name: "d",
      fruits: "딸기",
      color: "블루",
      animal: "햄스터"},
    { name: "e",
      fruits: "딸기",
      color: "옐로",
      animal: "강아지"},
    { name: "f",
      fruits: "사과",
      color: "레드",
      animal: "강아지"},
    ]);

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

