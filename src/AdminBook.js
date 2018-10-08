import React from 'react'
import './App.css';

class AdminBook extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="list-group-item">
        <form>
          <div className="row">
            <div className="col-md-5">{ this.props.bookTitle }</div>
            <div className="col-md-3">{ this.props.author }</div>
            <div className="col-md-2">{ `$${this.props.bookPrice}` }</div>
            <div className="col-md-2">
              <input type="submit" value="Delete"/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default AdminBook;
