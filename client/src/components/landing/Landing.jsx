import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='pt-[150px] text-center bg-slate-200 h-screen'>
        <h1 className='text-6xl font-bold '>Ready to get start</h1>
        <p className='mt-3 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Ea quibusdam a porro reprehenderit.</p>
        <Link to={"/login"} className="inline-block text-sm px-5  py-4 leading-none border rounded text-white border-white border-transparent  bg-black mt-4 ">get start</Link>

    </div>
  )
}

export default Landing