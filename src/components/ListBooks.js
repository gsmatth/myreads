import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render(){

    const {books} = this.props;
    // const allTheBooks = getAll();
    console.log("all the books: ", books);

    return(
      <div className='list-books'>
        <ol className='book-list'>
        {books.map((book) => (
          <li key={book.id} className='book-list-item'>
            <div className='book-details'>
              <p>{book.id}</p>
              <div className="book-cover"
                style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${book.imageLinks.thumbnail})`
               }} 
              ></div>
            </div>

          </li>
        ))}
        </ol>
      </div>
    )
  }

}

export default ListBooks;