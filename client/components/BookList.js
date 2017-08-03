import React from "react";
import ReactDOM from 'react-dom';
import Book from "./Book";

const BookList = props => {
  return (
    <div>
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default BookList;
