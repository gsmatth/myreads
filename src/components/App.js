import React, {Component} from 'react'
import {Route} from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
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

  UpdateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf )
    .then((updatedBooksObject) => {
      console.log("updatedBooksObject: ", updatedBooksObject)

      let updatedBookID = updatedBooksObject[shelf].find((id)=>{
        return id === book.id
      });
      if(updatedBookID){
        let bookIndex = this.state.books.findIndex((element) => {
          return element.id === updatedBookID});
        console.log("updatedBookID: ", updatedBookID);
        console.log("bookIndex: ", bookIndex);
        book.shelf = shelf;
        return bookIndex;
    }})
    .then((bookIndex) => {
      this.setState((state) => {
        console.log("state before: ", this.state);
        const books = [...state.books]
        books.splice(bookIndex, 1, book);
        console.log("book state after update in UpdateBookShelf, app.js: ", books);
        return { books }
      })
    console.log("state after: ", this.state);
  })
}

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
          updateBookShelf={this.UpdateBookShelf}
        />
      )}
      />
      <Route path='/search' render={() => (
        <SearchBooks
          books={this.state.books}
          updateBooksShelf={this.UpdateBookShelf}
      />
      )}
      />
      </div>
    )};
  }   

export default App;
