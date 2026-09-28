import React from 'react';
import { FaUser } from "react-icons/fa";

export const Topbar = () => {
  return (
    <>
     <div className='topbar'>
            <div className='leftside'>
                <div className='logo'><img src="logo.jpg" alt="" /></div>
                <div className='name'>Ammar Shah</div>
            </div>
            <div className='menuitems'>
                <div  className='activelink'><a href="">Home</a></div>
                <div className='menutext'><a href="">About</a></div>
                <div className='menutext'><a href="">Services</a></div>
                <div className='menutext'><a href="">Portfolio</a></div>
                <div className='menutext'><a href="">Skills</a></div>
                <div className='menutext'><a href="">Contact</a></div>

            </div>
            <div className='hiremebtn'>
                <div className='hiremetext'>Hire Me</div>
                <FaUser className='usericon' />

            </div>


     </div>
    
    
    </>
  )
}
