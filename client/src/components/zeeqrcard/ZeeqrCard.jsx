import React from 'react'
import rotate from '../../assests/img/rotate.png';
import zeeqrcardimg from '../../assests/img/black and gold back.png';
import Card from '../cards/Card';
import Cards5 from '../cards/Cards7';
function ZeeqrCard() {
  return (
    <div>
      <div className='container mx-auto m-[100px]'>
        <div className='flex flex-nowrap'>
          <div className='w-4/5'>
            <p className='text-7xl w-1/6 font-medium'>Create your
              <span className='font-bold'>ZEEQR</span> card</p>
            <p className='text-2xl font-normal m-[10px]'>Customize your details</p>
            <p className='text-lg w-2/4 font-normal m-[10px]'>Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean
              massa. your details</p>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>

              <p className='text-xs font-medium'>Select your Card Material -</p>
              <p className='text-xs font-medium ml-12'>PVC</p>
              <p className='text-xs font-medium ml-12'>Metal</p>
              <p className='text-xs font-medium ml-12'>Luxury</p>

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>
              <p className='text-xs font-medium'>Select your Card Color -</p>
              <p className='text-xs font-medium ml-12'>Matte Black</p>
              <p className='text-xs font-medium ml-12'>Matte White</p>

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>
              <p className='text-xs font-medium w-[240px]'>Select your Favorite Color -</p>
              <p className='text-xs font-medium '>Gold on
                Matte Black</p>
              <p className='text-xs font-medium ml-[15px]'>Silver on
                Matte Black</p>
              <p className='text-xs font-medium ml-[15px] '>Silver on
                Matte Black</p>
            </div>


          </div>

          <div className=''>

            {/* <img className='w-[713px] h-[315px]' src={zeeqrcardimg}></img> */}
            <Cards5/>
            <div className="flex justify-center item-center mt-10 mb-10">
              <img src={rotate}></img></div>
            <p className='md:text-center text-3xl font-medium'>AED 150</p>
          </div>
        </div>
        <div className='flex'>
          <form>

            <label class="">
              <input type="text" value="First Name"  class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">
              <input type="text" value="Last Name"  class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">
              <input type="text" value="Company Name / Tagline (Optional)" class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
          </form>
          <form className='ml-7'>
            <label class="">

              <input type="text" value="Add your Logo"  class="mt-1 block w-[236px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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