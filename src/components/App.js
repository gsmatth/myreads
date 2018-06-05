import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from '../utils/BooksAPI';
import '../styles/App.css'

class App extends Component {
  state = {
    books:[],
 
  }

 
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) => {
      console.log('array of books in componentDidMount: ', books);
      return books;
    })
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf )
    .then((book) => {
      console.log("test");
      //find book with book.id
      this.setState(() => {
        //update value of shelf property
      })
    })
  }

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
          updateBook={this.updateBook}
        />
      )}
      />
      </div>
    )};
  }   

export default App;
