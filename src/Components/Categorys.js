import React, { useState, useEffect } from 'react';
import axiosConfig from "../Components/axiosConfig";

function Categories({selectedCategory, setSelectedCategory}) {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        axiosConfig
        .get('/product/categories')
        .then(response => {
          setCategories(response.data);
        })
        .catch(error => {
          setError(error);
        });
    }, []);
  
    const handleChange = event => {
      setSelectedCategory(event.target.value);
    };
  
    if (error) {
      return <p>An error occurred: {error.message}</p>;
    }
  
    return (
      <div>
        <label htmlFor="my-combobox" style={{color: 'red'}}>
          Select a category:
          <select
            id="my-combobox"
            value={selectedCategory}
            onChange={handleChange}
            style={{width: '200px'}}
          >
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  }
  export default Categories;
