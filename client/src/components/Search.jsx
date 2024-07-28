// src/components/Search.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { performSearch } from '../features/search/searchSlice';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { loading, results, error } = useSelector((state) => state.search);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(performSearch(query));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
