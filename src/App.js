import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookCart from './BookCart';
import BookList from './BookList';
import Book from './Book';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      allBooks: []
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({
      books: json,
      allBooks: json
    });
  }

  titleFilter = (item) => {
    this.setState({
      books: item
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
          <div className="row">
            <BookList books={ this.state.books } allBooks={ this.state.allBooks } titles={ this.titleFilter }/>
            <BookCart />
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
