import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } categories={ categories } />
      <hr />
      

      <ol>
        {
          categories.map( category => {
            return <li key={ category }> { category }</li>
          })
        }
      </ol>
    </>
  )
}

export default GifExpertApp;