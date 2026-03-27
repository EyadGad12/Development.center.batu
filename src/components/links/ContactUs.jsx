import React from 'react'
import { NavLink } from 'react-router'

function ContactUs() { 
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[rgba(27,89,105,0.801)] p-4 font-[system-ui]">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.37)]">
        <h2 className="text-4xl font-extrabold text-white text-center mb-2">Welcome</h2>
        <p className="text-white/70 text-center mb-8">We'd love to hear from you. Send us a message!</p>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-semibold tracking-wide ml-1" htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Ali Hassan" 
              className="px-5 py-4 rounded-2xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-semibold tracking-wide ml-1" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="alihassan@example.com" 
              className="px-5 py-4 rounded-2xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white text-sm font-semibold tracking-wide ml-1" htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="How can we help you today?" 
              className="px-5 py-4 rounded-2xl bg-white/5 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/10 transition-all duration-300 resize-none" 
            ></textarea>
          </div>

          <button 
            type="button" 
            className="mt-4 w-full py-4 rounded-2xl bg-white text-[#1b5969] font-bold text-lg hover:bg-white/90 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <NavLink to="/" className="text-white/60 hover:text-white text-sm underline transition-colors duration-300">
            &larr; Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default ContactUs