import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import FooterCopyright from '../components/FooterCopyright'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <FooterCopyright/>
        </div>
  )
}

export default Layout