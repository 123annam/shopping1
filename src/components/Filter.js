import React from "react";
import "../styles/Filter.css";

const Filter = ({ setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((filters) => ({ ...filters, [name]: value }));
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          onChange={handleFilterChange}
          className="input-border-filter"
        >
          <option value="">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="color">Color</label>
        <select
          name="color"
          id="color"
          onChange={handleFilterChange}
          className="input-border-filter"
        >
          <option value="">All Colors</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
          <option value="pink">Pink</option>
          {/* Add more colors as needed */}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="type">Type</label>
        <select
          name="type"
          id="type"
          onChange={handleFilterChange}
          className="input-border-filter"
        >
          <option value="">All Types</option>
          <option value="polo">Polo</option>
          <option value="t-shirt">T-Shirt</option>
          <option value="puma">Puma</option>
          <option value="plain">Plain</option>
          {/* Add more types as needed */}
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="minPrice">Min Price</label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          placeholder="Min Price"
          onChange={handleFilterChange}
          className="input-border-filter"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="maxPrice">Max Price</label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          placeholder="Max Price"
          className="input-border-filter"
          onChange={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default Filter;
