import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BeatLoader from "react-spinners/BeatLoader";
import { AiFillStar } from 'react-icons/ai';




const MovieDetails = () => {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)
  const params = useParams()
  const nav = useNavigate()


  const getData = async () => {
    const url = `https://www.omdbapi.com/?i=${params.id}&apikey=54a4834f`
    const { data } = await axios.get(url)
    setInfo(data)
    setLoading(false)

  }
  useEffect(() => {
    setTimeout(() => {
      getData()
    }, 1000);

  }, [])

  return (
    <div>
      {loading ? <span style={{ fontSize: "80px", alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", color: "white" }}>Loading<BeatLoader style={{ fontSize: "80px" }} color="#ff0000" margin={5} size={10} speedMultiplier={1} /> </span> :
        <div className='container details_height'>
          <div className='d-md-flex' style={{ gap: "50px", paddingTop: "110px" }}>
            <div>
              {<img style={{ borderRadius: "10%", boxShadow: "10px 9px 20px 3px black", height: "520px",marginTop:"80px",width:"320px",marginLeft:"25px"   }} src={info.Poster} alt="" />}
            </div>
            <div className='movie_info text-white ' style={{ fontFamily: "sans-serif", fontSize: "20px",paddingTop:"80px" }}>
              <h1 style={{ fontWeight: "bold",borderBottom:"1px solid white" }}>{info.Title}</h1>
              <p>{info.Plot}</p>
              <p>Genre:{info.Genre}</p>
              <p>Actors:{info.Actors}</p>
              <p>Released Date:{info.Released}</p>
              <p>Movie Length:{info.Runtime}</p>
              <p>Director:{info.Director}</p>
              <p style={{fontWeight: "bold"}} >Rating:{info.imdbRating} <AiFillStar style={{fontSize:"26px",color:"#f5c518"}}/></p>
              <div className='mt-3'>
                <div onClick={() => nav(-1)} style={{ fontWeight: '600' }} className='btn  btn-info'>Back</div>

              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetails