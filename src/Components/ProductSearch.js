import React, { useState } from 'react';

function ProductSearch({ products, setResult }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input type="text" value={searchTerm} placeholder="Search" onChange={handleSearch} />
      <ul>
        
        {filteredProducts.map((product) => {
          return <li key={product.id}>{product.name}</li>
        })}
      </ul>
    </div>
  );
}
export default ProductSearch;