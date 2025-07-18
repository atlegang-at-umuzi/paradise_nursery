import React from 'react';
import { connect } from 'react-redux';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { setCurrentPage } from '../store';

const Header = ({ cartCount, currentPage, setCurrentPage }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Paradise Nursery</h1>
        <nav className="header-nav">
          {currentPage === 'cart' ? (
            <button 
              onClick={() => setCurrentPage('products')}
              className="header-nav-button"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
          ) : (
            <button 
              onClick={() => setCurrentPage('cart')}
              className="header-cart-button"
            >
              <ShoppingCart size={20} />
              Cart
              {cartCount > 0 && (
                <span className="header-cart-badge">
                  {cartCount}
                </span>
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  currentPage: state.currentPage,
  cartCount: state.cart.reduce((sum, item) => sum + item.quantity, 0)
});

const mapDispatchToProps = {
  setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);