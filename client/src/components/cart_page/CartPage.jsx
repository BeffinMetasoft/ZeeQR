import React from 'react'
import casestydy_zeeqrimg from '../../assests/casestydy_zeeqrimg.png';
import linecart from '../../assests/img/linecart.png';
import line from '../../assests/img/line.png';
import deletecart from '../../assests/img/deletecart.png';
function CartPage() {
  return (
    <div className='container mx-auto m-[80px] '>
        <p className=' text-5xl text-black font-700' >Cart<span className=' text-orange-500'>(2item)</span></p>
<p className='text-lg w-96 '>Lorem ipsum dolor sit amet, consectetuer adipiscing
elit. Aenean commodo ligula eget dolor. Aenean
massa. your details</p>
    
    <div className='bg-slate-100 mt-10 container mx-auto justify-center'>
    <div className='w-full flex justify-center ' >

        <div className='w-2/12 mt-4'>
        <img src={casestydy_zeeqrimg} />
</div>
<div className='w-2/12'>
<p className='text-[22px] text-slate-600 mt-4 w-44 font-bold leading-8'>PVC</p>
                    <p className='text-slate-500 text-[15px] w-36 mt-4' >
                      2X  Matte Black -
                      2X  Silver on
                      Matte Black -</p>

                      <p className='text-[22px] mt-4 pt-4 text-slate-600 font-bold leading-8'>Email -</p>
                    <p className='text-[18px]  text-orange-500 font-bold leading-8'>
                      jack@zeeqr.com</p>
</div>
<div className='w-2/12 p-4'>
<p className='text-[22px] w-72 text-slate-600 font-bold leading-8'>Display name on the card :</p>
                <p className='text-[18px] pl-1 text-orange-500 font-bold leading-8'>
                  Jack Sparrow</p>
                  <p className='text-[22px] w-80 text-slate-600 font-bold leading-8 pt-4'>Display tagline on the card :</p>
                  <p className='text-[18px] text-orange-500 font-bold leading-8'>
                    Renovating the future</p>
                    <p className='pt-4'><span className='w-72 text-[20px]   text-slate-600 font-bold leading-8 '>Logo - </span><span className='text-orange-500 '>4 files</span> <span className='w-72 text-[12px] text-slate-600  leading-8'>(uploaded)</span></p>
                  <p className='w-56 text-[12px] text-slate-600  '>*designers review your logo and send
                    you the proof shortly</p>
</div>
<div className='w-2/12 ml-80'>
<p className='text-[15px] text-slate-600 font-bold leading-8 mt-4'>AED 300</p>
<p className='mt-7 ml-8 bg-white w-8 text-center'>2</p>

<div className='flex mt-[195px]' >
<img src={deletecart}></img>
<p className='ml-2'>remove</p>
</div>
</div>

    </div>
    <img className='mt-7 ml-8' src={linecart}></img>
    <div className='flex flex-row-reverse mt-7 mr-12 '>
    <div class="search-local">
	

	<input type="text" placeholder="enter your coupon code" className='w-80 h-14 p-4 mb-8' />
	<button className='bg-orange-500 w-20 h-14 text-white'>
		<a href="#" >APPLY</a>
		<ion-icon name="search-outline" class="search-icon"></ion-icon>
	</button>
</div>
</div>
    <div className='flex flex-row-reverse '>
        
    <div className='flex flex-row mr-7'>
                  <div className='w-2/4'>
                    <p className='text-[15px] text-slate-600  leading-8'>Subtotal (X2 Items)</p>
                    <p className='text-[15px] text-slate-600  leading-8'>Shipping </p>
                    <p className='w-56 mt-9 ' > <span className='text-[15px]  text-slate-600  font-bold leading-8'>Total</span> <span className='text-[15px] text-slate-600   leading-8'>(Inclusive of VAT)</span></p>

                  </div>
                  <div className='w-2/4 pl-28' >

                    <p className='text-[15px] w-20 text-slate-600 font-bold leading-8'>AED 300</p>
                    <p className='text-[15px] text-orange-600 font-bold leading-8'>Free</p>
                 
                    <p className=' text-[15px] mt-9  text-slate-600  leading-8'>AED <span className='font-bold'>300</span></p>
                  </div>
                </div>
                
                
    </div>
    <div className='flex flex-row-reverse'>
    <div className='flex flex-row pr-28 mt-7'>
                  <p className='w-1/6'>
                    <input type="checkbox" className=" checked:bg-black-500 mt-3" />
                  </p>
                  <p className='w-5/6'>

                    <p className='w-56 text-[11px]  text-black-600  leading-8'>Privacy policy</p>
                    <p className='w-80 text-[11px]  text-slate-600  leading-8'>(once order the card refund and return is not acceptable)  </p>
                  </p>
                  
                </div>
    
                
    </div>
    <div className='flex flex-row-reverse mt-7 mr-8'>
    <button class="rounded-[6px] bg-orange-500 w-[420px] h-12 justify-items-center text-white">Checkout</button>
        </div>
    </div>
    </div>

  )
}

export default CartPage