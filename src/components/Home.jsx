import React, { useState } from 'react'
import { NavLink } from 'react-router'
import {Menu} from "@boxicons/react"

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinkClass = "w-[75%] h-[60px] flex justify-center items-center pb-[10px] border-b border-white text-center no-underline text-white text-[18px] font-bold transition-all duration-[400ms] hover:bg-[rgba(255,255,255,0.219)] hover:underline hover:decoration-[#1c3f4d] hover:text-[#1c3f4d]";

  return (
    <>
    <div className="w-full h-screen flex justify-between max-[700px]:flex-col font-[system-ui]">
        <div className="w-[60%] gap-14 flex flex-col justify-center items-center bg-[rgba(207,217,224,0.808)] max-[700px]:w-full max-[700px]:h-screen">
            <img className="w-[150px] mb-[50px]" src="./public/img1.png" alt="logo" />
            <img className="w-[80%] rounded-t-[120px]" src="./public/img2.jpeg" alt="image" />
        </div>
        <button 
          className="hidden max-[700px]:flex h-[50px] w-[50px] rounded-[15px] fixed top-[20px] right-[20px] border-2 border-white bg-[rgba(207,217,224,0.808)] text-white text-[18px] font-bold justify-center items-center cursor-pointer z-20 transition-all duration-[400ms] hover:bg-[rgba(255,255,255,0.219)] hover:underline hover:decoration-[#1c3f4d] hover:text-[#1c3f4d]" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu/>
        </button>
        <div className={`w-[40%] flex flex-col justify-center items-center gap-[25px] bg-[rgba(27,89,105,0.801)] max-[700px]:fixed max-[700px]:w-full max-[700px]:h-[50vh] max-[700px]:gap-[5px] max-[700px]:z-10 max-[700px]:transition-transform max-[700px]:duration-[400ms] max-[700px]:ease-in-out ${isMenuOpen ? "max-[700px]:translate-y-0" : "max-[700px]:-translate-y-full"}`}>
            <NavLink className={navLinkClass} to="/centerprofile">Center Profile</NavLink>
            <NavLink className={navLinkClass} to="/services">Services</NavLink>
            <NavLink className={navLinkClass} to="/the-team">The Team</NavLink>
            <NavLink className={navLinkClass} to="/listings">Listings</NavLink>
            <NavLink className={navLinkClass} to="/contact-us">Contact Us</NavLink>
        </div>
    </div>
    </>
  )
}

export default Home