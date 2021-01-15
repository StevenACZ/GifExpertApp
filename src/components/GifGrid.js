import React, { useState, useEffect } from 'react';

const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect( () => {
    getGifs();
  }, [])

  const getGifs = async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=JAV02qV4lbtsmNmzwiyZOh8MpxB6md9C'
    
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    } )

    console.log(gifs);
    setImages( gifs );
  }

  return (
    <div>
      <h3>{ category }</h3>
      <ol>
        {
          images.map( ({ id, title, url }) => (
            <li key={ id }>
              <h4>{ title }</h4>
              <img src={ url } />
            </li>
          ))
        }
      </ol>
    </div>
  )
}

export default GifGrid;