import React from 'react'
import './App.css';

class Book extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <form>
          <div className="row">
            <div className="col-md-6">{ this.props.bookTitle }</div>
            <div className="col-md-2">{ this.props.author }</div>
            <div className="col-md-1">{ `$${this.props.bookPrice}` }</div>
            <div className="col-md-2">
              <input type="number" min="1" max="999" value="1" className="quantity-input"/>
            </div>
            <div className="col-md-1">
              <input type="button" value="Add"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Book
