import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
// import {Link} from 'react-router-dom';

class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render(){
    const {book} = this.props;
    
    return (
      <li key={book.id} className="book-list-item">
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
          }} 
          ></div>
        </div>
        <div className="book-title">Title: {book.title}</div>
        <div className="book-authors">Author: {book.authors}</div>
        <div className="book-shelf">Shelf: {book.shelf}</div>
      </div>
      </li>
  )}
}

  export default BookItem;