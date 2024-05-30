import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import './styles/App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const count = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      if (existingProduct.quantity + 1 <= product.stock) {
        setCartItems(cartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
        toast.success("Product added to cart");
      } else {
        toast.error(`cannot add more than available stock : ${product.stock}`);
      }
    } else {
      if (product.stock > 0) {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
        toast.success("Product added to cart");
      } else {
        toast.error(`Cannot add more than available stock : ${product.stock}`);
      }
    }
  };

  const handleRemoveFromCart = (productId, quantity) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    setCartItemCount(prevCount => prevCount - quantity);
  };

  const handleUpdateQuantity = (productId, quantity, itemQuantity) => {
    const productIndex = cartItems.findIndex(item => item.id === productId);
    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      const item = updatedCartItems[productIndex];
      const newQuantity = Math.min(quantity, item.stock);
      if (newQuantity !== quantity) {
        toast.error(`Cannot add more than available stock : ${itemQuantity}`);
        return;
      }
      item.quantity = newQuantity;
      updatedCartItems[productIndex] = item;
      setCartItems(updatedCartItems);
      toast.success("Cart updated");
    }
  };

  const handleGoBack = () => {
    setCartVisible(false);
  };

  return (
    <div className="container">
      <Header setCartVisible={setCartVisible} cartItemCount={cartItemCount} />
      <ToastContainer position="top-center" autoClose={3000} />
      {cartVisible ? (
        <Cart
          cartItems={cartItems}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateQuantity={handleUpdateQuantity}
          handleGoBack={handleGoBack}
        />
      ) : (
        <Catalog handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default App;
