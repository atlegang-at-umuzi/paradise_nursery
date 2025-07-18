import React from 'react';
import { connect } from 'react-redux';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { updateQuantity, removeItem, setCurrentPage } from '../store';

const Cart = ({ cart, updateQuantity, removeItem, setCurrentPage }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-content">
          <h2 className="cart-title">Your Cart</h2>
          <div className="cart-empty-cart">
            <p className="cart-empty-message">Your cart is empty</p>
            <button 
              onClick={() => setCurrentPage('products')}
              className="cart-continue-button"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h2 className="cart-title">Your Cart</h2>
        
        <div className="cart-summary">
          <div className="cart-summary-grid">
            <div className="cart-summary-item">
              <div className="cart-summary-label">Total Items</div>
              <div className="cart-summary-value">{totalItems}</div>
            </div>
            <div className="cart-summary-item">
              <div className="cart-summary-label">Total Cost</div>
              <div className="cart-summary-value">R{totalCost.toFixed(2)}</div>
            </div>
          </div>
          
          <div className="cart-button-group">
            <button 
              onClick={() => setCurrentPage('products')}
              className="cart-continue-button"
            >
              Continue Shopping
            </button>
            <button className="cart-checkout-button">
              Checkout
            </button>
          </div>
        </div>

        <div className="cart-items-container">
          {cart.map(item => (
            <div key={item.id} className="cart-item-card">
              <img 
                src={item.image} 
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h4 className="cart-item-name">{item.name}</h4>
                <p className="cart-item-price">R{item.price} each</p>
              </div>
              <div className="cart-controls">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="cart-control-button"
                >
                  <Minus size={16} />
                </button>
                <span className="cart-quantity">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="cart-control-button"
                >
                  <Plus size={16} />
                </button>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="cart-delete-button"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart
});

const mapDispatchToProps = {
  updateQuantity,
  removeItem,
  setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);