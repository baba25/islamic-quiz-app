import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './index.css'


function Layout() {
  return (
    <div>
        <div className='nav'>
          <Link to="/">
          <h1 className='lay-logo'>QQ</h1>
          </Link>
          <Link to="/">
          <button className='lay-btn'>Restart</button>
          </Link>
        </div>
        <Outlet />
        <div className='footer'>
          <p className='lay-footer'>Code & UI by <a>@design_Configur</a></p>
        </div>
    </div>
  )
}

export default Layout
