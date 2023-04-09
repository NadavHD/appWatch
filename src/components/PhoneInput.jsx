import React, { useRef } from 'react'
import { HiOutlineSearch } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';


const PhoneInput = () => {
  
const navigate = useNavigate()
const inputData = useRef()

  return (
    <div>
     <div className="d-flex justify-content-end d-md-none">
        <button style={{ width: '35px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px 0px 0px 25px', border: 'none' }} className=" col-2 btn btn-dark">
          <span onClick={() => {
            navigate(`/search/${inputData.current.value}`)
          }} style={{ fontSize: '30px', display: 'flex' }}><HiOutlineSearch /></span>
        </button>
        <input style={{
          borderRadius: '0px 25px 25px 0px', width: '200px', height: '40px',
          border: 'solid 1px rgb(0,0,0)', fontSize: '20px',
          paddingLeft: '6px', paddingBottom: '5px'
        }}
          ref={inputData}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              navigate(`/search/${inputData.current.value}`)
            }
          }}
          type="search" placeholder='search movie. . .' name="" id="" />
      </div>
      </div>
  )
}

export default PhoneInput