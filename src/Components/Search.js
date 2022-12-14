import React, { useState } from 'react';

const Search = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if(searchTerm===""){
        onSearch(products)
    }
    else{
        const results = products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    onSearch(results);
    }
    
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};
export default Search;
