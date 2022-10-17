import { Component } from "react";

class EventChangeComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      message: "hi",
      name : "홍길동",
    };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e){
    // 객체의 속성이름을 변수로 가져오고 싶을때 [변수]로 사용
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <div>
        <input type="text" name="message" onChange={this.changeText} />
        <h1>{this.state.message}</h1>
        <input type="text" name="name" onChange={this.changeText} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default EventChangeComp;