import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import BookCart from './BookCart';
import BookList from './BookList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
          <container>
            <div className="row">
              <BookList />
              <BookCart />
            </div>
          </container>
        <Footer />
      </div>
    );
  }
}

export default App;
