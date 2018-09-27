import React from 'react';
import CartBook from './CartBook'
import './App.css';

class BookCart extends React.Component {

  renderCart =() => {
    return this.props.cart.map((book, i) => <CartBook key={ i } bookTitle={ book.title } bookPrice={ book.price } deleteItem={ this.props.deleteItem } cart={ this.props.cart }/>);
  }

  render() {
    var sum = 0;
    for(var i = 0; i < this.props.cart.length; i++){
      sum += this.props.cart[i].price
    }

    return (
      <div className="book-cart col-md-4">
        <h4>Cart</h4>
        <div className="book-cart-inner">
          <div className="book-cart-items">
          { this.renderCart() }
          </div>
          <div className="totals">
          { `Total Price: $${sum}`}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCart;
