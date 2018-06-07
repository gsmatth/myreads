import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
// import {Link} from 'react-router-dom';

class BookItem extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }

  handleChange = (event) => {
    console.log("handleChange() entered in BootItem.js");
    console.log("props in BookItem: ", this.props);
    console.log("book in handleChange in BookItem.sj: ", this.props.book);
    event.preventDefault();
    const shelf = event.target.value;
    this.props.updateBookShelf(this.props.book, shelf);
  };

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
        <div className="book-shelf-changer">
          <select onChange={this.handleChange}>
            <option value="moveTo" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
        </div>
        <div className="book-title">Title: {book.title}</div>
        <div className="book-authors">Author: {book.authors}</div>
        <div className="book-id">ID: {book.id}</div>
        <div className="book-shelf">Shelf: {book.shelf}</div>
      </div>
      </li>
  )}
}

  export default BookItem;