import React from 'react';
import '../styles/Header.css';
import cartIcon from '../assets/cart-icon.png';

const Header = ({ setCartVisible, cartItemCount }) => (
  <header>
    <h1>TeeRex Store</h1>
    <div className='product'>
      <h1>Products</h1>
      <div className="cart-icon" onClick={() => setCartVisible(true)}>
        <img src={cartIcon} alt="Cart" />
        <span>{cartItemCount}</span>
      </div>
    </div>
  </header>
);

export default Header;
