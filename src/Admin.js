import React from 'react';
import AdminBookList from './AdminBookList'

class Admin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBooks: [],
    }
    this.adminBookAdd = this.adminBookAdd.bind(this);
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({
      allBooks: json
    });
  }

  async adminBookAdd(item) {
    console.log("item: ", item)
    const response = await fetch('http://localhost:8082/api/books', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    const posted = await response.json()
    console.log('returned from post', posted)
    this.setState({
      allBooks: this.state.allBooks.concat(posted)
    })
  }

  render(){
    return (
      <div>
        <h1>Admin</h1>
        <AdminBookList books={ this.state.allBooks } adminBookAdd={ this.adminBookAdd }/>
      </div>
    )
  }
}

export default Admin;
