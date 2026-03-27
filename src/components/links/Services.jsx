import React from 'react'
import { useNavigate, NavLink } from 'react-router'

function Services() {
    const navigate = useNavigate() 
  return (
    <>
      <div className="body h-screen bg-[rgba(27,89,105,0.801)]">
        <NavLink to="/" className='bg-red-400 text-2xl text-white'>Back</NavLink>
        <div className=' text-6xl text-white flex justify-center items-center h-10/12'>
          SOON!
        </div>
      </div>    
    </>
  )
}

export default Services