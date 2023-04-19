import React from 'react'
import logo from '../../assests/zeeqr.png'
// import QR from '../../assests/QR_code.png'
function Card({data}) {
    return (
        <div className='flex justify-center'>
            <div className='w-[470px] '>
                <div className="group bg-white  p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                    <div className=" text-left">
                        <img className="w-28 " src={logo} alt='' />
                    </div>
                    <div className="flex justify-end">
                        <img className="w-28 " src={data.QRCode} alt='' />
                    </div>
                    <div className="flex justify-start gap-x-2">
                        <div className='flex flex-col  justify-center'>
                            <h3 className="text-2xl font-bold text-black">{data.name}</h3>
                            <span className="text-xs text-black">{data.companyName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card