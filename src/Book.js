import React from 'react'
import './App.css';

class Book extends React.Component {
  constructor(props){
    super(props)
    this.state={
      quantity: 0,
    }
    this.addCartItem = this.addCartItem.bind(this);
  }

  changeQuantity = (e) => {
    e.preventDefault();
    this.setState({
      quantity: e.target.value
    })
    console.log(this.state.quantity)
  }

  addCartItem = (e) => {
    e.preventDefault();
    var addedCartItem = [];
    for (var i = 0; i < this.state.quantity; i++){
      for(var j = 0; j < this.props.books.length; j++){
        if(this.props.books[j].title === this.props.bookTitle){
          addedCartItem.push(this.props.books[j])
        }
        this.props.addCart(addedCartItem);
      }
    }
  }

  render() {
    return (
      <div className="list-group-item">
        <form>
          <div className="row">
            <div className="col-md-6">{ this.props.bookTitle }</div>
            <div className="col-md-2">{ this.props.author }</div>
            <div className="col-md-1">{ `$${this.props.bookPrice}` }</div>
            <div className="col-md-2">
              <input type="number" min="1" max="10" value={ this.state.quantity }className="quantity-input" onChange={ this.changeQuantity }/>
            </div>
            <div className="col-md-1">
              <input type="button" value="Add" onClick={ this.addCartItem } />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Book
