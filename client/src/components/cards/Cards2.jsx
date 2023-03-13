import React from 'react'
import logo from '../../assests/zeeqr1.png'
import { AiFillCheckCircle } from "react-icons/ai";


function Cards2({ status }) {
    return (
        <div className='flex justify-center p-2'>
            <div className='w-[470px] '>
                <div className="relative group bg-black  p-4 transition-all border border-2 drop-shadow-xl rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                    {status === 2 ?
                        <AiFillCheckCircle className=" absolute right-10  text-green-900  text-xl" /> : ""
                    }
                    <div className="flex justify-center gap-x-2">
                        <img className="w-28 " src={logo} alt='' />
                        <div className='flex flex-col items-center justify-center text-white'>
                            <h3 className="text-4xl font-bold ">ZeeQR</h3>
                            <span className="text-xs ">ENNOVATING THE FUTURE</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cards2