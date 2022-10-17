import React, { Component } from "react";

class EventRefComp extends Component{
  constructor(props){
    super(props);
    // 콜백함수를 통한 ref 설정
    // DOM을 저장할 변수 만들기
    this.textInput = null;
    // ref속성을 통해서 DOM 가져오기
    this.setTextInputRef = (element)=> {
      this.textInput = element;
      this.textInput.value = "안녕";
    }
  this.changeData = this.changeData.bind(this);

    // React.createRef 사용하기
    this.myRef = React.createRef();
    // 화살표 함수를 사용하면 bind를 사용할 필요가 없음
    this.changeRefData = () =>{
      // createRef를 통해 들고오면 current에 답겨서 옴
      // console.log(this.myRef);
      this.myRef.current.focus();
    }
  }

  changeData(){
    // ref 속성을 통해 가져온 DOM 객체는
    // 자바스크립트에서 ID를 통해 가져온 것과 동일하게 사용할 수 있음
    this.textInput.focus();
  }
  render(){
    return(
      <div>
        {/* 콜백함수를 통한 ref 설정 */}
        <button onClick={this.changeData}>이벤트 버튼</button>
        <input type="text" ref={this.setTextInputRef} />
        {/* React.createRef 사용하기 */}
        <button onClick={this.changeRefData}>createRef를 통해 가져온 DOM 이벤트 버튼</button>
        <input type="text" ref={this.myRef} />
      </div>

    );
  }
}

export default EventRefComp;