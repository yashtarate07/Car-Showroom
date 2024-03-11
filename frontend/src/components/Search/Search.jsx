import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div className="main-search">
      <div class="main-text">
        <h1>Search our 30000 vehicles</h1>
      </div>
      <div className="main-input">
        <input type='text' placeholder='Search by Keywords' />
        {/* 1st */}
        <select className='select'>
          <option value="">Brand</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* 2st */}
        <select className='select'>
          <option value="">Release</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* 3st */}
        <select className='select'>
          <option value="">Budget</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
