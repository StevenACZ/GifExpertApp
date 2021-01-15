import React, { useState } from 'react';

const AddCategory = ( { setCategories, categories } ) => {
  const [inputValue, setInputValue] = useState('Hola mundo');

  const handleInputChange = (e) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setCategories( [...categories, inputValue] );
  }
  
  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}

export default AddCategory;