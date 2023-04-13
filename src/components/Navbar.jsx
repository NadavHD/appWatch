import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./movie.css";
import { HiOutlineSearch } from 'react-icons/hi';


const Navbar = () => {
  const inputData = useRef()
  const navigate = useNavigate()
  return (
    <div style={{ position: "absolute", zIndex: "10" }} className="d-flex align-items-center w-100 justify-content-between px-2 px-md-3 px-lg-4 px-xl-5 pt-4">
      <div >
        <div className="logo col-lg-2 ">
          <Link style={{ textDecoration: 'none' }} to={'/'}><span className='appw'>AppWatch</span></Link>
        </div>
      </div>
      <div >
        <div >
          <div className="d-flex justify-content-center d-none d-md-flex ">
            <button style={{ width: '35px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px 0px 0px 25px', border: 'none' }} className=" col-2 btn btn-dark">
              <span onClick={()=>{
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
      </div>
    </div>
  );
};

export default Navbar;
