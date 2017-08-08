import React from "react";
import ReactDOM from "react-dom";
import Book from "./Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.books.map(book => 
          <Book key={book.id} {...book}/>
        )}
      </div>
    );
  }
}

export default BookList;
