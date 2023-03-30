import React from 'react'
import mob from '../../assests/mobile.png'
import CardDetailsView from './CardDetailsView'

function CreateCard() {
  return (
    <div className='md:flex '>
      <div className='md:w-7/12 bg-gray-100 flex justify-end h-screen overflow-auto scrollbar-hide'>
        <div className='w-9/12  mt-20 ' >

          <h1 className='text-6xl mx-5 pr-10 font-semibold '>Create your <b>ZeeQR </b> Business card profile </h1>
          <h3 className='text-xl my-7'>Customize your details</h3>
          <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptas reprehenderit eligendi laudantium labore tempora diet velit deleniti quasi incidunt?</p>
          <div className='mt-10  text-xs flex gap-3'>
            <p className=''>Select Your Profile Theme</p>
            <span className='flex gap-2 py-2 ml-8'>
              <div className='w-5 h-4 bg-gradient-to-r from-white to-gray-600 border-black border-2 rounded-xl px-4 '>&nbsp;</div>
              <p>Light 01</p>
            </span>
            <span className='flex gap-2 py-2'>
              <div className='w-5 h-4 bg-gradient-to-r from-black to-white rounded-xl px-4'>&nbsp;</div>
              <p>Dark 01</p>
            </span>
            <span className='flex gap-2 py-2'>
              <div className='w-5 h-4 bg-white border-black border-2 rounded-xl px-4'>&nbsp;</div>
              <p>Full Light </p>
            </span>
            <span className='flex gap-2 py-2'>
              <div className='w-5 h-4  bg-black rounded-xl px-4 '>&nbsp;</div>
              <p>Full Dark</p>
            </span>

          </div>

          <div className='my-5 flex flex-col gap-2'>

            
          </div>

        </div>
      </div>
      <div className='md:w-5/12 bg-gray-100 '>
        <div className='flex justify-center'>
          <div className='w-3/5 h-screen mt-10  pt-5   ' style={{ backgroundImage: `url(${mob})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
              <div className='mx-[21px] rounded-[33px]'>
            <div className='  w-full  text-white h-[628px] overflow-auto scrollbar-hide rounded-[33px] '>

              <CardDetailsView card={'hi'}/>
              </div>
            </div>
            {/* <img className='w-2/5' src={mob} alt=""  /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCard