import React from "react";
import ReactDOM from "react-dom";
import BookList from "./BookList";
import axios from "axios"; // http client

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.initialData
    }

  }


  render() {
    debugger;
    return (
      <div>
        {
          this.state.books ?
            <BookList books={this.state.books}/>
            :
            null
        }
      </div>
    );
  }
}
