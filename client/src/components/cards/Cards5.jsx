import React from 'react'
import logo from '../../assests/zeeqr.png'
import QR from '../../assests/QR_code.png'
import {BiWifi} from "react-icons/bi";
import {MdOutlineQrCodeScanner} from "react-icons/md";



function Cards5() {
    return (
        <div className='flex justify-center'>
            <div className='w-[400px] mr-[50px]'>
                <div className="group bg-black  h-56 flex p-4 transition-all border border-2 rounded-xl duration-300 hover:rotate-1 lg:p-8 border">
                    
                    
                    <div className="flex gap-x-2">
                        <div className='flex flex-col  justify-center'>
                  <button className='justify-center item-center p-2 w-20 h-11 gap-8 flex border-2 rounded-md border-[#d4af37]'>
<BiWifi className='text-[#d4af37] '  />

<MdOutlineQrCodeScanner className='text-[#d4af37]' /></button>
                          
                            <h2 className="text-2xl text-[#d4af37] mt-5 text-center text-4xl">ZEEQR</h2>
                            {/* <span className="text-xs text-black">RENNOVATING THE FUTURE</span> */}
                        </div>
                    </div>

                    <div className="flex ml-20">
                        
                        <img className="w-28 bg-[#d4af37]" src={QR} alt='' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards5