import { Component } from "react";

class MapComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season : ["봄", "여름", "가을", "겨울"],
      book : [
        {
          title : "보건교사 안은영",
          author : "정세랑",
          page : 296,
          price : 12600,
          ISBN : 9788937479953,
        }
      ],
      inputInfo : {
          inputTitle : "",
          inputAuthor : "",
          inputISBN : "",
        }
    };
    this.changeInfo = (e) => {
      const newInfo = {
        ...this.state.inputInfo, // 이걸 굳이 왜 추가하는 거지...? -> 빈 객체가 있어야 값이 들어감..
        [e.target.name] : e.target.value, // 이거만 있어도 되는 거 아닌가...? -> 응 아님..
      }
      this.setState({inputInfo: newInfo})
    }
    this.addBook = (e) =>{
      e.preventDefault(); // submit 디폴트 값인 새로고침 제거
      const newBook = this.state.book.concat(this.state.inputInfo)
      this.setState({book : newBook}) //concat으로 새 책이 추가된 버전으로 변경
    }
  }

  render() { 
    const {season, book} = this.state;
    // ↓ 추가되는 책 제목을 list로 출력하고, 제목을 클릭했을 때 삭제
    const bookList = book.map((book,index)=>(
      <li key={book.ISBN} onClick={()=>{
        const deleteBook = this.state.book.filter((b)=>(book.ISBN != b.ISBN))
        this.setState({book : deleteBook})
      }}>{book.title}</li>
    ))
    return (
      <div>
        <ul>
          {season.map((season, index)=>(
            <li key={index}>
              {season}
            </li>
          )
          )}
        </ul>
        {/** 책 이름을 추가하는 input을 작성하고 submit버튼을 누르면  */}
        {/** this.state.book에 추가될수 있도록 작성 */}
        {/** 각각의 값들이 저장될 변수공간을 만들어서 사용, 태그속성추가가능 */}
        <form onSubmit={this.addBook}>
          <label htmlFor="">도서명</label>
          <input type="text" name="title" onChange={this.changeInfo} />
          <label htmlFor="">저자</label>
          <input type="text" name="author" onChange={this.changeInfo} />
          <label htmlFor="">ISBN</label>
          <input type="text" name="ISBN" onChange={this.changeInfo} />
          <input type="submit" value="제출"/>
        </form>
        <ol>{bookList}</ol>
      </div>
    );
  }
}

export default MapComp;