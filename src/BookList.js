import React, { Component } from 'react';
import Book from './Book'
import App from './App'
import './App.css';

class BookList extends React.Component {

  renderList(){
    return this.props.books.map((book, i) => <Book key={ i } bookTitle={ book.title } author={ book.author } bookPrice={ book.price }/>);
  }

  render() {
    return (
      <div className="book-list col-md-8">
        <div className="col-md-12 title-box">
          <h1 className="in-line">Book Directory</h1>
          <form>
            <input className="search" type="text" placeholder="search for a book.."/>
            <input type="submit" value="Search Title"/>
            <input type="submit" value="Search Author"/>
          </form>
        </div>
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Title</div>
            <div className="col-md-2">Author</div>
            <div className="col-md-1">Price</div>
            <div className="col-md-2">Quantity</div>
            <div className="col-md-1">Cart</div>
          </div>
        </div>
        { this.renderList() }
      </div>
    );
  }
}

export default BookList;
