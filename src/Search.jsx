import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <form>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          className="search"
          type="search"
          placeholder="Search for a breed"
        />
      </div>
    </form>
  );
};

export default Search;
