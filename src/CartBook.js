import React from 'react';
import './App.css';


class CartBook extends React.Component {

  deleteCartItem = (e) => {
    e.preventDefault();

    for(var i = 0; i < this.props.cart.length; i++) {
      if(this.props.bookTitle === this.props.cart[i].title){
        var item = this.props.cart[i].title;
      }
    }
    this.props.deleteItem(item)
  }

  render(){
    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{ this.props.bookTitle }</div>
          <div className="col-md-2">{ `$${this.props.bookPrice}`}</div>
          <div className="col-md-2">
            <form>
              <input type="submit" value="X" onClick={ this.deleteCartItem }/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CartBook;
