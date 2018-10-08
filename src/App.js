import React from 'react';
import Footer from './Footer';
import BookCart from './BookCart';
import BookList from './BookList';
import AdminBookList from './AdminBookList';
import Admin from './Admin';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      allBooks: [],
      cart: [],
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books');
    const json = await response.json();
    this.setState({
      books: json,
      allBooks: json
    });
  }

  titleFilter = (item) => {
    this.setState({
      books: item
    })
  }

  addToCart = (item) =>{
    this.setState({
      cart: this.state.cart.concat(item)
    })
  }

  deleteCartItem = (item) => {
    for(var i = 0; i < this.state.cart.length; i++) {
      if (this.state.cart[i].title === item){
        var indexDelete = i;
      }
    }
    var newCart = this.state.cart;
    newCart.splice(indexDelete, 1)
    this.setState({
      cart: newCart
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <BookList books={ this.state.books } allBooks={ this.state.allBooks } titles={ this.titleFilter } addCart={ this.addToCart } cart={ this.state.cart }/>
          <BookCart allBooks={ this.state.allBooks } cart={ this.state.cart } deleteItem={ this.deleteCartItem }/>
        </div>
        <Footer />
      </div>
    );
  }
}

const RouterEx = () => (
  <Router>
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">Home</Link>
        <Link to="/admin" className="navbar-brand">Admin</Link>
      </nav>
      <Route exact path="/" component={App}/>
      <Route exact path="/admin" component={Admin}/>
    </div>
  </Router>
)


export default RouterEx;
