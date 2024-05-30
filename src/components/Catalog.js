import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Filter from './Filter';
import '../styles/Catalog.css';

const products = [
  { id: 1, name: "Green Polo", color: "green", type: "polo", gender: "male", price: 799, stock: 10 },
  { id: 2, name: "Red T-Shirt", color: "red", type: "t-shirt", gender: "female", price: 499, stock: 5 },
  { id: 3, name:"Puma Blue", color:"blue",type:"puma", gender:"male",price: 999, stock:4},
  { id: 4, name:"Plain Black ", color:"black",type:"plain", gender:"female",price: 499, stock:3},
  { id: 5, name:"Crew Neck", color:"pink",type:"t-shirt", gender:"female",price: 699, stock:6},
  { id: 6, name:"HIP HOP", color:"yellow",type:"plain", gender:"male",price: 899, stock:7},
  { id: 7, name:"Over Sized", color:"green",type:"t-shirt", gender:"male",price: 599, stock:4},
  { id: 8, name:"Wrangler", color:"black",type:"plain", gender:"female",price: 499, stock:7},
  // Add more products as needed
];

const Catalog = ({ handleAddToCart }) => {
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({});

  // Separate filtering logic for search text
  const filteredBySearch = products.filter(product => {
    const searchLower = searchText.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) || 
      product.color.toLowerCase().includes(searchLower) || 
      product.type.toLowerCase().includes(searchLower)
    );
  });

  // Apply filters on top of search results
  const finalFilteredProducts = filteredBySearch.filter(product => {
    return (
      (!filters.gender || product.gender === filters.gender) &&
      (!filters.color || product.color === filters.color) &&
      (!filters.type || product.type === filters.type) &&
      (!filters.minPrice || product.price >= filters.minPrice) &&
      (!filters.maxPrice || product.price <= filters.maxPrice)
    );
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchText} 
        onChange={(e) => setSearchText(e.target.value)} 
        style={{ width: '50%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ddd',marginLeft:'25rem'}}
      />
      <Filter setFilters={setFilters} />
      <div className="products">
        {finalFilteredProducts.map(product => (
          <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
