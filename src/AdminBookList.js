import React from 'react';
import AdminBook from './AdminBook';
import './App.css';


class AdminBookList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        title: "",
        author: "",
        price: 0,
    }
    this.createBook = this.createBook.bind(this);
  }

  addTitle = (e) => {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    })
  }

  addAuthor = (e) => {
    e.preventDefault();
    this.setState({
      author: e.target.value,
    })
  }

  addPrice = (e) => {
    e.preventDefault();
    this.setState({
      price: e.target.value,
    })
    console.log(this.state.price)
  }

  createBook = (e) => {
    e.preventDefault();

    if(this.state.title !== "" && this.state.author !== "" && this.state.price !== 0){
      this.props.adminBookAdd(this.state);
    }
  }

  renderList(){
    return this.props.books.map((book, i) => <AdminBook key={ i } bookTitle={ book.title } author={ book.author } bookPrice={ book.price }/>);
  }

  render() {
    return (
      <div>
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-5">Title</div>
            <div className="col-md-3">Author</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Add/Delete</div>
          </div>
        </div>
        <form>
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-5">
                <input type="text" className="title-input" placeholder="Add book title...." onChange={ this.addTitle }/>
              </div>
              <div className="col-md-3">
                <input type="text" className="author-input" placeholder="Add author..." onChange={ this.addAuthor }/>
              </div>
              <div className="col-md-2">
                $<input type="number" min="0" className="price-input" value={ this.state.price } onChange={ this.addPrice }/>
              </div>
              <div className="col-md-2">
                <input type="button" value="Add" onClick={ this.createBook }/>
              </div>
            </div>
          </div>
        </form>
      { this.renderList() }
    </div>
    );
  }
}

export default AdminBookList;
