import React from 'react'
import logo from "../../assets/navbar_logo.svg"
import soch_2 from "../../assets/Shape.png";

function Header() {
  return (
    <header className='bg-[#161719]'>
        <nav className='container h-20 gap-8 flex items-center relative'>
        <div className="shoch absolute right-[-120px] top-[-30px]">
            <img src={soch_2} alt="" />
        </div>
            <div className="logoo flex-1">
                <img src={logo} alt="" />
            </div>
            <div className="button text-[#5D5BD5] flex gap-7">
                <button>Sign in</button>
                <button className=' px-5 py-2 bg-[#6661F5] text-white border-none'>Sign up</button>
            </div>
        </nav>
    </header>
  )
}

export default Header
