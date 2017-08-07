import React from "react";
import ReactDOM from "react-dom";
import BookList from "./BookList";
import axios from "axios"; // http client

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      books: undefined
    }
  }

  componentDidMount() {
    // make ajax request
    axios.get("http://localhost:3000/api/books/")
    .then(resp => {
      console.log(resp)
      this.setState({
        books: resp.data 
      })
    });
  }

  render() {
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
