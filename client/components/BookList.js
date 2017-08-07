import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.books);
    return (
      <div>
        {this.props.books.map(book => 
          <Book key={book.id} {...book}/>
        )}
      </div>
    );
  }
}

// const BookList = (props)=>{
//   console.log(props.books)
//   return(
//     <div> 
//       {
//         props.books.map(book =>{
//           <Book />
//         })
//       }
//     </div>
//   )
// }

export default BookList;
