import React from "react";
import ReactDOM from "react-dom";
import BookList from "./BookList";
import axios from "axios"; // http client

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.initialData,
      ratings:{}
    }
  }

  fetchRatingForBook(bookId){
    if (this.state.ratings[bookId]){return;}
    axios.get(`http://localhost:3000/api/books/${bookId}/ratings`)
      .then(resp=>{
        this.setState( (prevState) =>{
          const currentRatings = prevState.ratings;
          currentRatings [bookId] = resp.data;
          return { ratings: currentRatings };
        })
      })
  }

  render() {

    return (
      <div>
        {
          this.state.books ?
            <BookList books={this.state.books}
              onBookClick={this.fetchRatingForBook.bind(this)}/>
            :
            null
        }
      </div>
    );
  }
}
