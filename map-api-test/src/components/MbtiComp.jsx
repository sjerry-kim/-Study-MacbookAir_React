import { useContext } from "react";
import { useState } from "react";
import DataContext from "../context/DataContext";

const MbtiComp = () => {
  const {state, action} = useContext(DataContext);

  const [name, setName] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [companyIndex, setCompanyIndex] = useState([]);

  const sendAnswer = (e) => {
    e.preventDefault();
    const newAnswers = {
      name : name,
      answer : answer};
    const addedAnswers = state.reciept.concat(newAnswers);
    if(name && answer){
      action.setReciept(addedAnswers) // 이 부분 개인프로젝트랑 비교해서 정리하기!
    }
    const newCompanies = state.result.filter((company)=>(company != companyIndex ));
    if(true){
      action.setResult(newCompanies)
    }
  }

  return ( 
    <div className="mbti-comp-background">
      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="딸기" name="fruits" value="딸기" 
          onClick={()=>{
            setName("fruits")
            setAnswer("딸기")
            setCompanyIndex("a")}} />
        <label for="딸기">딸기</label>

        <input type="radio" id="바나나" name="fruits" value="바나나" 
          onClick={()=>{
            setName("fruits")
            setAnswer("바나나")
            setCompanyIndex("b")}}/>
        <label for="바나나">바나나</label>

        <input type="radio" id="사과" name="fruits" value="사과" 
          onClick={()=>{
            setName("fruits")
            setAnswer("사과")
            setCompanyIndex("c")}}/>
        <label for="사과">사과</label>
        <br />
        <input type="submit" />
      </form>

      <br />

      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="레드" name="color" value="레드"
        onClick={()=>{
          setName("color")
          setAnswer("레드")
          setCompanyIndex("b")}} />
        <label for="레드">레드</label>
        <input type="radio" id="옐로" name="color" value="옐로" 
          onClick={()=>{
            setName("color")
            setAnswer("옐로")
            setCompanyIndex("c")}}/>
        <label for="옐로">옐로</label>
        <input type="radio" id="블루" name="color" value="블루" 
        onClick={()=>{
          setName("color")
          setAnswer("블루")
          setCompanyIndex("d")}}/>
        <label for="블루">블루</label>
        <br />
        <input type="submit" />
      </form>
      <br />

      <form action="" onSubmit={sendAnswer}>
        다음중 고르세요 <br />
        <input type="radio" id="강아지" name="animal" value="강아지"
        onClick={()=>{
          setName("animal")
          setAnswer("강아지")
          setCompanyIndex("c")}} />
        <label for="강아지">강아지</label>
        <input type="radio" id="고양이" name="animal" value="고양이" 
          onClick={()=>{
            setName("animal")
            setAnswer("고양이")
            setCompanyIndex("d")}}/>
        <label for="고양이">고양이</label>
        <input type="radio" id="햄스터" name="animal" value="햄스터" 
        onClick={()=>{
          setName("animal")
          setAnswer("햄스터")
          setCompanyIndex("e")}}/>
        <label for="햄스터">햄스터</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default MbtiComp;