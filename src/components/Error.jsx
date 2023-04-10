import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './movie.css'

export default function Error() {
  const nav = useNavigate()
  return (
    <div>

      <div className=' image-error d-flex justify-content-center' style={{ fontSize: '20px', height: "100vh" }}>
        <div style={{ textAlign: "center", paddingLeft: '25px', position: "absolute", top: "70%" }} className='col-10 col-md-11 col-lg-12'>
          <h3>PAGE NOT FOUND!</h3>
          <button onClick={()=>{nav(-1)}} className='btn btn-danger btn-lg m-3'>Back </button>
          <Link to={'/'}><button className='btn btn-success btn-lg m-3 mx-4'>Home</button></Link>
        </div>
      </div>

    </div>

  )
}