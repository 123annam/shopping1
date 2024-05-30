import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, handleAddToCart }) => (
  <div className="product-card">
    <img src={`images/${product.id}.jpg`} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Rs:{product.price}</p>
    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
