import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assests/zeeqr1.png'

function NavbarLanding({ props, link, page }) {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white text-black p-2 border-b-2 ">
        <div className="flex items-center flex-shrink-0 text-black mx-6">
          <img className='w-14 ' src={logo} alt="" srcset="" />
          <Link to={'/home'} className="font-bold text-3xl tracking-tight">ZeeQR</Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-xl lg:flex-grow text-center mx-5 ">

            <Link className="block mt-4 lg:inline-block font-semibold lg:mt-0 text-black  mr-5">
            Home
            </Link>
            <Link className="block mt-4 lg:inline-block font-semibold lg:mt-0 text-black  mr-5">
            How it works
            </Link>
            <Link className="block mt-4 lg:inline-block font-semibold lg:mt-0 text-black  mr-5">
            Features
            </Link>
            <Link className="block mt-4 lg:inline-block font-semibold lg:mt-0 text-black  mr-5">
            Pricing
            </Link>

          </div>

          <div>
            <Link to={"/login"} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black mt-4 lg:mt-0">Login</Link>
          </div>



        </div>
      </nav>
    </div>
  )
}

export default NavbarLanding