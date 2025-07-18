import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store';
import { plantsData } from '../data/plantsData';

const Products = ({ addToCart }) => {
  return (
    <div className="products-container">
      <div className="products-content">
        <h2 className="products-title">Our Plants</h2>
        
        {Object.entries(plantsData).map(([category, plants]) => (
          <div key={category} className="products-category-section">
            <h3 className="products-category-title">{category}</h3>
            <div className="products-grid">
              {plants.map(plant => (
                <div key={plant.id} className="products-card">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="products-image"
                  />
                  <div className="products-card-content">
                    <h4 className="products-plant-name">{plant.name}</h4>
                    <p className="products-price">R{plant.price}</p>
                    <button 
                      onClick={() => addToCart(plant)}
                      className="products-button"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(Products);