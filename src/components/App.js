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
      this.setState(() => ({
        books
      }))
    })
  }

  render() {
    return (
      <div className="App">
      <Route exact path='/' render={() => (
        <ListBooks
          books={this.state.books}
        />
      )}
      />
      </div>
    )};
  }   

export default App;
