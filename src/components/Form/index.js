import './index.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Form() {
  
  return (
    <div className='conitainer'>
        <div className='form-cont'>
            <h3>We're delighted you took your time to take this quick islamic quiz. Good Luck</h3>
            <p>Kindly input your Name to continue with this quick quiz. It's optional so you can skip</p>

            <input type="text" placeholder="Enter your name" required/>
            <NavLink exact="true" activeclassname="active" to="/quiz">
            <button className='form-btn'>Start Quiz</button>
            </NavLink>
        </div>
    </div>
  )
 
}

export default Form