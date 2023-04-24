import React from 'react'
import logo from '../../assests/zeeqr.png'
import cardlogo from '../../assests/cardlogo.png'



function Cards6() {
    return (
        <div className='flex justify-center'>
            <div className='w-[400px] mr-[50px]'>
                <div className="group bg-black  h-56 flex p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                <div className="flex justify-center item-center mt-10 mb-10 ml-[70px]">
                <img src={cardlogo}></img></div>
                 
                
                </div>
            </div>
        </div>
    )
}

export default Cards6