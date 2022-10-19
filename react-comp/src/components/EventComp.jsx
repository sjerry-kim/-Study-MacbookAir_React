import { Component } from "react";

class EventComp extends Component{
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      num : 1,
    }

    this.handleClick = this.handleClick.bind(this);
    this.numDouble = this.numDouble.bind(this);
  }

  handleClick(){
    // 일반 메소드 : constructor에서 가져온 this.state
    // render(){} : render안에서 가져온 this.state
    // -> 실행하는 공간이 바뀌어서 값을 가져오는 곳이 바뀜
    this.setState({isToggleOn: !this.state.isToggleOn,})
  }

  numDouble(){
    this.setState({num : this.state.num *2,})
  }

  render(){
    const {isToggleOn, num} = this.state;
    return(
      <div>
        <button onClick={this.handleClick}>{isToggleOn? 'on':'off'}</button>
      
      <button onClick={this.numDouble}>{num}</button>
      </div>
    )
  }
}

export default EventComp;