import React, { Component } from 'react';
import Book from './Book'
import App from './App'
import './App.css';


class BookList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
    this.titleSearch = this.titleSearch.bind(this);
  }

  changeSearch = (e) => {
    e.preventDefault();
    this.setState({ search: e.target.value })
  }

  titleSearch = (e) => {
    e.preventDefault();
    var listConstruct = [];
    for(let i = 0; i < this.props.allBooks.length; i++){
      if(this.props.allBooks[i].title.indexOf(this.state.search) !== -1){
        listConstruct.push(this.props.allBooks[i]);
      }
    }
    this.props.titles(listConstruct)
  }

  authorSearch = (e) => {
    e.preventDefault();
    var listConstruct = [];
    for(let i = 0; i < this.props.allBooks.length; i++){
      if(this.props.allBooks[i].author.indexOf(this.state.search) !== -1){
        listConstruct.push(this.props.allBooks[i]);
      }
    }
    this.props.titles(listConstruct)
  }


  renderList(){
    return this.props.books.map((book, i) => <Book key={ i } bookTitle={ book.title } author={ book.author } bookPrice={ book.price }/>);
  }

  render() {
    return (
      <div className="book-list col-md-8">
        <div className="col-md-12 title-box">
          <h1 className="in-line">Book Directory</h1>
          <form>
            <input className="search" type="text" placeholder="search for a book.." onChange={ this.changeSearch }/>
            <input type="submit" value="Search Title" onClick={ this.titleSearch }/>
            <input type="submit" value="Search Author" onClick={ this.authorSearch }/>
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
