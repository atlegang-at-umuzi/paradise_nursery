import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Landing from './components/Landing';
import Products from './components/Products';
import Cart from './components/Cart';
import './styles/App.css';

const App = ({ currentPage }) => {
  return (
    <div className="min-h-screen">
      {currentPage === 'landing' && <Landing />}
      
      {currentPage !== 'landing' && <Header />}
      
      {currentPage === 'products' && <Products />}
      
      {currentPage === 'cart' && <Cart />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage
});

export default connect(mapStateToProps)(App);