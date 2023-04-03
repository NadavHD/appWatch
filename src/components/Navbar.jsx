import React from "react";
import { Link } from "react-router-dom";
import "./movie.css";
import { HiOutlineSearch } from 'react-icons/hi';


const Navbar = () => {
  return (
    <div  className="d-flex align-items-center justify-content-between px-2 px-md-3 px-lg-4 px-xl-5 pt-4">
      <div>
        <div className="logo col-lg-2">
          <Link style={{ textDecoration: 'none' }} to={'/'}><span className='appw'>AppWatch</span></Link>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex justify-content-center  col-md-11 col-lg-12 align-items-center">
            <button style={{ width: '30px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '25px 0px 0px 25px', border: 'none' }} className=" col-2 btn btn-primary">
              <span style={{ color: 'white', fontSize: '25px', display: 'flex' }}><HiOutlineSearch /></span>
            </button>
            <input style={{
              borderRadius: '0px 25px 25px 0px', width: '200px', height: '40px',
              color:"white", border: 'solid 1px rgb(0,0,0)', fontSize: '20px',
              paddingLeft: '6px', paddingBottom: '5px'
            }}
              type="search" placeholder='search movie. . .' name="" id="" />
          </div>
        </div>      </div>
    </div>
  );
};

export default Navbar;
