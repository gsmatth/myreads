import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {search} from '../utils/BooksAPI';


class SearchBooks extends Component {

  render(){

    const showImageLink = async () => {
      const mySearch = await search("Photography");
      //map over array and return new array with just the image link strings
      console.log("my search: ", mySearch );
      console.log("image link: ", mySearch[0].imageLinks.thumbnail);
    }
    showImageLink();

    return(
      <div>
      <Link to="/">Home</Link>
        Search
      </div>
    )
  }

}

export default SearchBooks;