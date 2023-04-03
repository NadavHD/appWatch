import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [movie,setMovie] = useState([])
  const [empty,setEmpty] = useState(false)
  const {searchQ,YYYY} = useParams()

  const getData = async()=>{
    const url = `https://www.omdbapi.com/?s=${searchQ ? searchQ : "bank"}${ YYYY ? "&y=" + YYYY : ""}&apikey=54a4834f`
    const {data} =await axios.get(url)
    setEmpty(data.Search?.length ?false:true)
    setMovie(data.Search);

  }

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, [searchQ, YYYY]);
   
  return (
    <div>
      <Carousel />

      {empty && <h1>no results</h1>}
      <div >
        {movie && movie.map((movie,index)=>(
          <Link  key={index} to={`/video/${movie.imdbID}`}> <img className='grid' src={movie.Poster} /></Link>
        ))}
      </div>

    </div>
  )
}

export default Home