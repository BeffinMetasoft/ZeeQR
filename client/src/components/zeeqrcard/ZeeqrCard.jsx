import React, { useState } from 'react'
import rotateimg from '../../assests/img/rotate.png';
import zeeqrcardimg from '../../assests/img/black and gold back.png';
import zeeqrcardimg1 from '../../assests/img/black and gold back1.png';
import Card from '../cards/Card';
import Cards5 from '../cards/Cards5';
import ReactCardFlip from "react-card-flip";
import Flipcard from '../zeeqrcard/card'
function ZeeqrCard() {
  const [material,setMaterial]=useState("PVC")
  const [materailcolor,setColor]=useState("MBlack")
  const [materailFavoriteColor,setFovouritecolor]=useState("GMBlack")
  const [rotate,setRotate]=useState(false)


const handleLuxury=()=>{
  setMaterial("Luxury")
  setColor("24KGold")
  setFovouritecolor("24Gold")
  }

  const Rotation=()=>{
    setRotate(!rotate)
  }
  return (
    <div>
      <div className='container mx-auto m-[100px]'>
        <div className='flex flex-nowrap'>
          <div className='w-4/5'>
            <p className='text-7xl w-1/6 font-medium'>Create your
              <span className='font-bold'>ZEEQR</span> card 
        </p>
            <p className='text-2xl font-normal m-[10px]'>Customize your details</p>
            <p className='text-lg w-2/4 font-normal m-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean
              massa. your details</p>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>

              <p className='text-xs font-medium'>Select your Card Material -</p>
             
              <p className={`${material==="PVC"?'text-xs  font-bold underline underline-offset-1  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setMaterial("PVC") } >PVC</p>
              <p className={`${material==="Metal"?'text-xs  font-bold underline underline-offset-1  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setMaterial("Metal")}>Metal</p>
              <p className={`${material==="Luxury"?'text-xs  font-bold underline underline-offset-1  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={handleLuxury}>Luxury</p>

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>

              <p className='text-xs font-medium cursor-pointer' onClick={()=>setColor("Select your Card Color -")}>Select your Card Color -</p>
              {material==="Luxury"? <p className='text-xs font-medium ml-12 cursor-pointer' >24K Gold</p>
              : <> <p className={`${materailcolor==="MBlack"?'text-xs underline underline-offset-1  font-bold  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setColor("MBlack")}>Matte Black</p>
              <p className={`${materailcolor==="MWhite"?'text-xs  underline underline-offset-1 font-bold  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setColor("MWhite")}>Matte White</p> </>}

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>
              <p className='text-xs font-medium w-[200px] cursor-pointer' onClick={()=>setFovouritecolor("Select your Favorite Color -")}>Select your Favorite Color -</p>
              {material==="Luxury"?   <p className='text-xs font-medium cursor-pointer' >24 Gold on
laser printed text </p>:<>
              <p className={`${materailFavoriteColor==="GMBlack"?'text-xs underline underline-offset-1 font-bold  underline underline-offset-1 ml-[15px] cursor-pointer':'text-xs font-medium ml-[15px] cursor-pointer'}`}  onClick={()=>setFovouritecolor("GMBlack")}>Gold on 
                Matte Black</p>
              <p className={`${materailFavoriteColor==="SMBlack"?'text-xs underline underline-offset-1 font-bold underline underline-offset-1 ml-[15px] cursor-pointer':'text-xs font-medium ml-[15px] cursor-pointer'}`} onClick={()=>setFovouritecolor("SMBlack")}>Silver on
                Matte Black</p>
              <p className={`${materailFavoriteColor==="FMBlack"?'text-xs underline underline-offset-1 font-bold underline underline-offset-1 ml-[15px] cursor-pointer':'text-xs font-medium ml-[15px] cursor-pointer'}`} onClick={()=>setFovouritecolor("FMBlack")}>Gradient Foil on
Matte Black</p></>}
            </div>


          </div>

          <div className=''>
<Flipcard rotate={rotate}  material={material} materailcolor={materailcolor} materailFavoriteColor={materailFavoriteColor} />
            {materailcolor}
            <br></br>
            {materailFavoriteColor}
            <div className="flex justify-center item-center mt-10 mb-10">
              <img className='cursor-pointer' src={rotateimg} onClick={Rotation}></img></div> <p>{rotate?"backside":"frontSide"}</p>
            <p className='md:text-center text-3xl font-medium'>AED 150</p>
          </div>
        </div>
        <div className='flex'>
          <form>

            <label class="">
              <input type="text" placeholder="First Name"  class="mt-1  w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">
              <input type="text" placeholder="Last Name"  class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">
              <input type="text" placeholder="Company Name / Tagline (Optional)" class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">

              <input type="text" placeholder="Add your Logo"  class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "/>
            </label>

          </form>
          <form className='ml-7'>

            <label class="">


              <input type="text" value="Save and Next"  class="mt-1 block w-[236px] px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:border-slate-200 disabled:shadow-none text-center bg-orange-500
      invalid:border-pink-500 invalid:text-pink-600 text-white
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ZeeqrCard