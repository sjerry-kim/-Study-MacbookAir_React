import {Component} from "react";

class HelloComp extends Component{
  render(){
    // 비구조화/ 구조화 할당 : 객체나 배열의 값을 변수가 각각 할당
    // props의 "" 안 값은 string로, {} 안의 값은 JS 자료형으로 들어옴
    const {name, adress, num1, num2, children} = this.props;
    console.log(typeof num1) // string
    console.log(typeof parseInt(num1)) // 형변환 -> number
    console.log(typeof num2) // number
    return(
      <div>
        <h1>{name} 안녕하세요</h1>
        <p>{adress}에 살고계시는군요</p>
        <p>{children}</p>
      </div>
    )
  }
}

export default HelloComp;