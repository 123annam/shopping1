import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, handleRemoveFromCart, handleUpdateQuantity, handleGoBack }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <img src={`images/${item.id}.jpg`} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Rs:{item.price}</p>
            </div>
            <div className="cart-item-actions">
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value),item.stock)}
                min="1"
                max={item.stock}
              />
              <button onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total: Rs:{totalAmount.toFixed(2)}</h3>
      
      {/* "Back to Catalog" button */}
      <div className="back-to-catalog" onClick={handleGoBack}>
        Back to Catalog
      </div>
    </div>
  );
};

export default Cart;