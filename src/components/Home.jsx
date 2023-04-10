import React, { useEffect, useRef, useState } from 'react'
import Carousel from './Carousel'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'
import PhoneInput from './PhoneInput'
import BeatLoader from "react-spinners/BeatLoader";


const Home = () => {
  const [movie, setMovie] = useState([])
  const [empty, setEmpty] = useState(false)
  const [years, setYears] = useState([])
  const nav = useNavigate();
  const [loading,setLoading] = useState(true)



  const { searchQ, YYYY } = useParams()
  const yearsData = useRef()


  const getData = async () => {
    const url = `https://www.omdbapi.com/?s=${searchQ || "spider-man"}${YYYY ? "&y=" + YYYY : ""}&apikey=54a4834f`
    const { data } = await axios.get(url)
    setEmpty(data.Search?.length ? false : true)
    setMovie(data.Search);

  }

  useEffect(() => {
    getData();
  }, [searchQ, YYYY]);

  useEffect(() => {
    let temp_ar = []
    for (let index = 1950; index <= (new Date()).getFullYear(); index++) {
      temp_ar.push({
        label: index,
        value: index
      })
    }
    setYears(temp_ar)
  }, [])

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <div>
      <Carousel />
      <div className=' pt-2 d-flex list-unstyled px-5 w-50 fs-5 d-none d-md-flex'>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/1950`}>1950</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/1960`}>1960</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/1970`}>1970</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/1980`}>1980</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/1990`}>1990</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/2000`}>2000</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/2010`}>2010</Link></p>
        <p ref={yearsData} className='px-2 years_list'><Link to={`/search/${searchQ || "spider-man"}/year/2020`}>2020</Link></p>
      </div>

      <div className='d-flex align-items-center '>

        <div className='container fs-5 col-5 col-lg-2  '>
          <Select onChange={item => {
            nav(`/search/${searchQ || "spider-man"}/year/${item.value}`);
          }} options={years} className=' text-center '>
          </Select>
        </div>
        <div className='col-7'>
          <PhoneInput />
        </div>
      </div>

          {loading?<span style={{ fontSize: "80px", alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", color: "white" }}>Loading<BeatLoader style={{ fontSize: "80px" }} color="#ff0000" margin={5} size={10} speedMultiplier={1} /> </span> :
          <div>
      {empty && <h1 className='text-center text-white fs-1'>no results...</h1>}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",marginLeft:"50px",transition:"0.8s" }} >
        {movie && movie.map((movie, index) => (
          <Link key={index} to={`/video/${movie.imdbID}`}> <img className='movie-img ' style={{ padding: "21px", borderRadius: "50px", transition: "0.5s",height:"480px",width:"340px" }} src={movie.Poster} onError={(event) => event.target.style.display = 'none'} /></Link>
        ))}
          
      </div>
      </div>
}
    </div>

    
  )
}

export default Home