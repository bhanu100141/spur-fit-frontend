import React from 'react'
import { IoLocationSharp,IoMail } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";

const Footer = () => {
  return (
    
    <div className='footer-container'>
      <hr></hr>
      <div>
      <img src="https://assets.codepen.io/3727422/internal/avatars/users/default.png?fit=crop&format=auto&height=256&version=1614668636&width=256" alt="Logo" className="logo" />
        <div className='f-mail'>
        <div className='footer-mail'>
           <IoLocationSharp className='f-icon'/>
           <p>AugustStarBe 26, 10117 Berlin</p>
        </div>
        <div className='footer-mail'>
              <IoMail className='f-icon'/><p>hi@ahead-app.com</p>
        </div>
        </div>
        <div className='app-conatainer'>
              <FaApple className='apple'/>
              <p>Download on this <br></br><span>App Store</span> </p>
      </div>
      <p className='copyright'>&copy; 2022 Ahead app. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
