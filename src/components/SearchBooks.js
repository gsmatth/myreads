import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../utils/BooksAPI';
import PropTypes from 'prop-types';
import ListBooks from './ListBooks';


class SearchBooks extends Component {

  static PropTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    BookSearchResult: [],
    query: '',
  }

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim()
    }))
  }
  

  render(){


    return(
      <div>
      <Link to="/">Home</Link>

      <ListBooks/>
      </div>
    )
  }

}

export default SearchBooks;