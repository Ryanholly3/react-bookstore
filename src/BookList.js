import React, { Component } from 'react';
import Book from './Book'
import './App.css';

class BookList extends React.Component {

  renderList(){
    //map
  }

  render() {
    return (
      <div className="book-list col-md-8">
        <div className="col-md-12 title-box">
          <h1 className="in-line">Book Directory</h1>
          <form>
            <input className="search" type="text" placeHolder="search for a book.."/>
            <input type="submit" value="Search Title"/>
            <input type="submit" value="Search Author"/>
          </form>
        </div>
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-6">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
            <div className="col-md-2">Cart</div>
          </div>
        </div>
        <Book />
      </div>
    );
  }
}

export default BookList;
