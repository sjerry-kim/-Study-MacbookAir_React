import { useContext } from "react";
import { useState } from "react";
import DataContext from "../context/DataContext";

const MbtiComp = () => {
  const {state, action} = useContext(DataContext);

  const [rName, setRName] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [companyIndex, setCompanyIndex] = useState([]);

  const sendAnswer = (e) => {
    e.preventDefault();
    const newAnswers = {
      name : rName,
      answer : answer};
    const addedAnswers = state.reciept.concat(newAnswers);
    if(rName && answer){
      action.setReciept(addedAnswers) // 이 부분 개인프로젝트랑 비교해서 정리하기!
    }
    console.log(rName);
    const newCompanies = state.result.filter((company)=>(company[rName] == companyIndex))
    /*
    const newCompanies = state.result.filter((company)=>(company.fruits == companyIndex));
    console.log(newCompanies);
    const newNewCompanies = newCompanies.filter((company)=>(company.color == companyIndex));
    console.log(newNewCompanies);
    console.log(companyIndex);
    */
    if(companyIndex){
      action.setResult(newCompanies)
    }
    console.log(state.result);
  }

  return ( 
    <div className="mbti-comp-background">
      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="딸기" name="fruits" value="딸기" 
          onClick={()=>{
            setRName("fruits")
            setAnswer("딸기")
            setCompanyIndex("딸기")}} />
        <label for="딸기">딸기</label>

        <input type="radio" id="바나나" name="fruits" value="바나나" 
          onClick={()=>{
            setRName("fruits")
            setAnswer("바나나")
            setCompanyIndex("바나나")}}/>
        <label for="바나나">바나나</label>

        <input type="radio" id="사과" name="fruits" value="사과" 
          onClick={()=>{
            setRName("fruits")
            setAnswer("사과")
            setCompanyIndex("사과")}}/>
        <label for="사과">사과</label>
        <br />
        <input type="submit" />
      </form>

      <br />

      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="레드" name="color" value="레드"
        onClick={()=>{
          setRName("color")
          setAnswer("레드")
          setCompanyIndex("레드")}} />
        <label for="레드">레드</label>
        <input type="radio" id="옐로" name="color" value="옐로" 
          onClick={()=>{
            setRName("color")
            setAnswer("옐로")
            setCompanyIndex("옐로")}}/>
        <label for="옐로">옐로</label>
        <input type="radio" id="블루" name="color" value="블루" 
        onClick={()=>{
          setRName("color")
          setAnswer("블루")
          setCompanyIndex("블루")}}/>
        <label for="블루">블루</label>
        <br />
        <input type="submit" />
      </form>
      <br />

      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="강아지" name="animal" value="강아지"
        onClick={()=>{
          setRName("animal")
          setAnswer("강아지")
          setCompanyIndex("강아지")}} />
        <label for="강아지">강아지</label>
        <input type="radio" id="고양이" name="animal" value="고양이" 
          onClick={()=>{
            setRName("animal")
            setAnswer("고양이")
            setCompanyIndex("고양이")}}/>
        <label for="고양이">고양이</label>
        <input type="radio" id="햄스터" name="animal" value="햄스터" 
        onClick={()=>{
          setRName("animal")
          setAnswer("햄스터")
          setCompanyIndex("햄스터")}}/>
        <label for="햄스터">햄스터</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MbtiComp;