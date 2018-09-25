import React from 'react'
import './App.css';

class Book extends React.Component {

  render() {

    return (
      <div className="list-group-item">
        <form>
          <div className="row">
            <div className="col-md-6">Book Name</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">
              <input type="number" min="1" max="999" className="quantity-input"/>
            </div>
            <div className="col-md-2">
              <input type="button" value="Add"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Book
