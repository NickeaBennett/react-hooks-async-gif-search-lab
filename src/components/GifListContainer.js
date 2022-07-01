import React, { useState, useEffect } from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';
const GifListContainer = () => {
  const [gifs, setGifs] = useState([])

  useEffect (() => {  
      fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=dJpV7DzwUHoMJvctc9bfqgObvbSVgLJ1`,)
      .then(r => {
        return r.json()
      })
      .then(({ data }) => {
          const newData = data.slice(0, 3).map(gif => {
            return {url: gif.images.original.url}
          })
          // console.log(newData)
          setGifs({newData})
    })
  }, [])

    // const onSearchFormSubmit = () => {
    //     console.log('Running search function')
    // }
    
    const onSearchFormSubmit = () => {
      console.log("Running on search function")
    }

  return (
    <div>
        <GifList theGifs={gifs} />
        <GifSearch onSearchFormSubmit={onSearchFormSubmit} />
    </div>
  )
}

export default GifListContainer;