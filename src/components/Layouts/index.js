import React from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import Form from '../Form'
import './index.css'


function layout() {
  return (
    <div>
        <div className='nav'>
          <Link exact="true" to="/">
          <h1 className='lay-logo'>QQ</h1>
          </Link>
          <NavLink exact="true" to="/">
          <button className='lay-btn'>Restart</button>
          </NavLink>
        </div>
        <Outlet />
        <div className='footer'>
          <p className='lay-footer'>Code & UI by <a>@design_Configur</a></p>
        </div>
    </div>
  )
}

export default layout
