import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import BookItem from './BookItem';
// import {Link} from 'react-router-dom';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
  }

  render(){

    const {books, updateBook} = this.props;
    const currentlyReadingShelf = books.filter((book) => book.shelf === "currentlyReading");
    const readShelf = books.filter((book) => book.shelf === "read");
    const wantToReadShelf = books.filter((book) => book.shelf === "wantToRead");
    console.log("updateBook props in ListBooks: ", updateBook);

    return(
      <div className='list-books'>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf=books">

                <ol className="books-grid">
                {currentlyReadingShelf.map((book) => (
                  <BookItem key={book.id} book={book} updateBookShelf={updateBook}/>
                ))}
                </ol>
              </div>
            </div>
          </div>
        <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf=books">

                <ol className="books-grid">
                {readShelf.map((book) => (
                  <BookItem key={book.id} book={book} updateBookShelf={updateBook}/>
                ))}
              </ol>
            </div>
          </div>
        </div>
        <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="bookshelf=books">

            <ol className="books-grid">
            {wantToReadShelf.map((book) => (
              <BookItem key={book.id} book={book} updateBookShelf={updateBook}/>
            ))}
          </ol>
        </div>
      </div>
    </div>
      </div>
      </div>
    )
  }

}

export default ListBooks;