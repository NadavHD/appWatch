import React, { useEffect, useRef, useState } from 'react'
import Carousel from './Carousel'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Select from 'react-select'
import axios from 'axios'
import PhoneInput from './PhoneInput'

const Home = () => {
  const [movie, setMovie] = useState([])
  const [empty, setEmpty] = useState(false)
  const [years, setYears] = useState([])
  const nav = useNavigate();


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

      {empty && <h1 className='text-center text-white fs-1'>no results...</h1>}
      <div style={{ display: "flex", flexWrap: "wrap",justifyContent:"center",marginLeft:"50px" }} >
        {movie && movie.map((movie, index) => (
          <Link key={index} to={`/video/${movie.imdbID}`}> <img className='movie-img  col-10 col-lg-12 col-md-11 img-fluid   ' style={{ padding: "20px", borderRadius: "50px", transition: "0.5s" }} src={movie.Poster} onError={(event) => event.target.style.display = 'none'} /></Link>
        ))}
      </div>

    </div>
  )
}

export default Home