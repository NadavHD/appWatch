import React from 'react'
import {Link} from 'react-router-dom'
import './movie.css'

export default function Error() {
  return (
    <div>
         <div className=' image-error d-none d-xl-flex' style={{ fontSize: '20px' }}></div>
            <div style={{ textAlign:"center",  paddingLeft: '25px',position:"absolute",top:"70%" }} className='col-10 col-md-11 col-lg-12'>
                <h3>mmm something is wrong, back to home...</h3>
                <Link to={'/'}><button className='btn btn-dark p-3 '>Back to home</button></Link> 
            </div>
            
            
    </div>
  )
}