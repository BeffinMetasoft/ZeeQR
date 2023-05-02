import React, { useState } from 'react'
import casestydy_zeeqrimg from '../../assests/casestydy_zeeqrimg.png';
import line from '../../assests/img/line.png';
import { checkOut } from '../../api/UserRequest';
import { useNavigate } from 'react-router-dom';
function CheckOut() {
  const navigate = useNavigate()
  const initialValues = { firstname: '', lastname: '', companyname: '', country: '', streetaddress: '', towncity: '', state: '', postcode: '', phonenumber: '', email: '', landmark: '', ordernote: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [error, setError] = useState({});
  const [checkoutError, setCheckoutError] = useState('')
console.log(formValues,error,"formValues");

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    const errors = validateForm(formValues)
    setError(errors)
    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await checkOut(formValues)
        console.log(data);
        if (data.success) {
         
         console.log('checkout success');


          navigate("/home")
        }
      } catch (error) {
        console.log(error.response.data.message);
        setCheckoutError(error.response.data.message)
      }

    }

  }



  const validateForm = (data) => {
    const error = {};
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!data.firstname) {
      error.firstname = "firstname required"
    } 
    

    if (!data.lastname) {
      error.lastname = "lastname required"
    } 
    
    if (!data.companyname) {
      error.companyname = "companyname required"
    }
    if (!data.country) {
      error.country = "country required"
    } 
    if (!data.streetaddress) {
      error.streetaddress = "streetaddress required"
    } else if (!regex.test(data.streetaddress)) {
      error.streetaddress = "enter streetaddress"
    }
    if (!data.towncity) {
      error.towncity = "towncity required"
    } 
    if (!data.state) {
      error.state = "state required"
    } 
    if (!data.postcode) {
      error.postcode = "postcode required"
    } 
    if (!data.phonenumber) {
      error.phonenumber = "phonenumber required"
    } 
    if (!data.email) {
      error.email = "email required"
    } else if (!regex.test(data.email)) {
      error.email = "enter email"
    }
    if (!data.landmark) {
      error.landmark = "landmark required"
    } 
    if (!data.ordernote) {
      error.ordernote = "ordernote required"
    } 
    // } else if (data.password.length < 6) {
    //     error.password = "password should be 6 digit"
    // }

    return error;
  }
  return (
    <div>
       <form onSubmit={handleSubmit} >
      <div className='w-full flex justify-center'>
        <div className='w-4/5 '>
          <div className='mt-5'>
            <p className='font-bold text-5xl w-56 '>Checkout
              Details</p>
            <p className="max-w-4xl p-3">Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. Aenean commodo ligula eget dolor. Aenean
              massa. your details</p>
          </div>
          <div className='bg-slate-100'>
            <div className='flex flex-row '>
              <div className='w-2/4'>
                <h1 className='text-xl ext-slate-700 p-10 font-bold'>Shipping Details</h1>
               
                <div className='flex flex-row p-10'>
                 
                    <div className='w-2/4'>
                      <label className="block">
                        <span className="block text-sm font-bold text-slate-700">First Name*</span>

                        <input type="text" placeholder='jack' name='firstname' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none" value={formValues.firstname} onChange={handleChange} />
                        <p className='text-red-500'>{error.firstname}</p>
                      </label>

                    </div>
                    <div className='w-2/4 pl-2' >
                      <label className="block">
                        <span className="block text-sm  font-bold text-slate-700 ">Last Name*</span>

                        <input type="text" placeholder='Sparrow' name='lastname' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.lastname} onChange={handleChange} />
                        <p className='text-red-500'>{error.lastname}</p>
                      </label>

                   </div>
                </div>
                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Company Name*</span>

                    <input type="text" placeholder='Zeeqr pvt ltd' name='companyname' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.companyname} onChange={handleChange} />
                    <p className='text-red-500'>{error.companyname}</p>
                  </label>

               </div>

                <div className='pl-10 p-3' >
                  <label className="block ">
                    <span className="block text-sm font-medium text-slate-700 ">Country*</span>

                    <input type="text" placeholder='Zeeqr pvt ltd' name='country' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.country} onChange={handleChange} />
                    <p className='text-red-500'>{error.country}</p>

                  </label>

               </div>
                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Street Address*</span>
                    <input type="text" placeholder='United Arab Emirates' name='streetaddress' className="mt-1 block  w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.streetaddress} onChange={handleChange} />
                    <p className='text-red-500'>{error.streetaddress}</p>
                    <input type="text" placeholder='Apartment, suite, unite, etc.' name='streetaddress' className=" mt-4 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none" value={formValues.streetaddress} onChange={handleChange} />
                    <p className='text-red-500'>{error.streetaddress}</p>

                  </label>

               </div>

                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Town/City*</span>

                    <input type="text" placeholder='Al Qusais ' name='towncity' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.towncity} onChange={handleChange} />
                    <p className='text-red-500'>{error.towncity}</p>
                  </label>

               </div>
                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">State/Region*</span>

                    <input type="text" placeholder='Dubai' name='state' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.state} onChange={handleChange} />
                    <p className='text-red-500'>{error.state}</p>
                  </label>

               </div>
                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Postcode/Zip*</span>

                    <input type="text" placeholder='1006000' name='postcode' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.postcode} onChange={handleChange} />
                    <p className='text-red-500'>{error.postcode}</p>
                  </label>

               </div>

                <div className='pl-10 p-3' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Phone Number*</span>

                    <input type="text" placeholder='+971 XXX XXX XXXX' name='phonenumber' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none  " value={formValues.phonenumber} onChange={handleChange} />
                    <p className='text-red-500'>{error.phonenumber}</p>
                  </label>

               </div>
                <div className='pl-10' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 ">Email*</span>

                    <input type="email" placeholder='jack@zeeqr.com' name='email' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none  " value={formValues.email} onChange={handleChange} />
                    <p className='text-red-500'>{error.email}</p>
                  </label>

               </div>

                <div className='pl-10' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 mt-4 ">LandMark*</span>

                    <input type="text" placeholder='LandMark' name='landmark' className="mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-none " value={formValues.landmark} onChange={handleChange} />
                    <p className='text-red-500'>{error.landmark}</p>
                  </label>

               </div>
                <div className='pl-10' >
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700 mt-10 ">Order note</span>
                    <textarea placeholder='Notes about your order, e,g. special notes for delivery' name='ordernote' className="md-textarea form-control w-full h-44 mt-1 block w-full px-3 py-2 bg-white rounded-md text-sm shadow-sm placeholder-slate-400 h-10
      focus:outline-non" value={formValues.ordernote} onChange={handleChange}  ></textarea>
                    <p className='text-red-500'>{error.ordernote}</p>

                  </label>

               </div>
              </div>

              <div className='w-1/3 ml-2'>
                <h1 className='text-xl ext-slate-700 p-10 font-bold '>Your Order</h1>
                <div className='mb-7'>
                  <img src={line} alt="" />

                </div>

                <div className="flex justify-center item-center">
                  <img className="" src={casestydy_zeeqrimg} alt='' />

                </div>
                <div className='mt-7'>
                  <img src={line} alt='' />
                </div>

                <div className='flex flex-row mt-7'>
                  <p className='w-2/5 '>
                    <p className='text-[22px] text-slate-600  w-44 font-bold leading-8'>PVC</p>
                    <p className='text-slate-500 text-[15px]' >
                      2X  Matte Black -
                      2X  Silver on
                      Matte Black -</p>

                  </p>
                  <p className='w-3/5 '>
                    <p className='text-[22px] ml-14 text-slate-600 font-bold leading-8'>Email -</p>
                    <p className='text-[18px] ml-14 text-orange-500 font-bold leading-8'>
                      jack@zeeqr.com</p>
                  </p>
                </div>

                <p className='text-[22px]  mt-7 text-slate-600 font-bold leading-8'>Display name on the card :</p>
                <p className='text-[18px] pl-1 text-orange-500 font-bold leading-8'>
                  Jack Sparrow</p>

                <div className=''>
                  <p className='text-[22px] mt-7 text-slate-600 font-bold leading-8'>Display tagline on the card :</p>
                  <p className='text-[18px] text-orange-500 font-bold leading-8'>
                    Renovating the future</p>
                </div>

                <div className="mt-7">
                  <p ><span className='w-72 text-[20px]   text-slate-600 font-bold leading-8'>Logo - </span><span className='text-orange-500 '>4 files</span> <span className='w-72 text-[12px] text-slate-600  leading-8'>(uploaded)</span></p>
                  <p className='w-56 text-[12px] text-slate-600  '>*designers review your logo and send
                    you the proof shortly</p>
                </div>
                <div className='mt-7'>
                  <img src={line} alt='' />
                </div>

                <div className='flex flex-row mt-7'>
                  <div className='w-2/4'>
                    <p className='text-[15px] text-slate-600  leading-8'>Subtotal (X2 Items)</p>

                  </div>
                  <div className='w-2/4 pl-28' >

                    <p className='text-[15px] text-slate-600 font-bold leading-8'>AED 300</p>
                  </div>
                </div>

                <div className='flex flex-row '>
                  <div className='w-2/4'>
                    <p className='text-[15px] text-slate-600  leading-8'>Shipping </p>

                  </div>
                  <div className='w-2/4 pl-28' >

                    <p className='text-[15px] text-orange-600 font-bold leading-8'>Free</p>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='w-4/5'>
                    <p className='text-[15px] w-56 text-slate-600  leading-8'>Coupon code - WDDSJNB 50%</p>

                  </div>
                  <div className='w-2/4 pl-[60px]' >

                    <p className='text-[15px] text-orange-600 font-bold leading-8'>-150</p>
                  </div>
                </div>
                <div className='mt-7'>
                  <img src={line} alt='' />
                </div>

                <div className='flex flex-row pt-10'>
                  <div className='w-4/4'>
                    <p className='w-56 ' > <span className='text-[15px]  text-slate-600  font-bold leading-8'>Total</span> <span className='text-[15px] text-slate-600   leading-8'>(Inclusive of VAT)</span></p>

                  </div>
                  <div className='w-2/4 pl-[60px]' >

                    <p className='w-56 text-[15px]  text-slate-600  leading-8'>AED <span className='font-bold'>300</span></p>
                  </div>
                </div>

                <div className='flex flex-row p-10'>
                  <p className='w-1/6'>
                    <input type="checkbox" className=" checked:bg-black-500 mt-3" />
                  </p>
                  <p className='w-5/6'>

                    <p className='w-56 text-[11px]  text-black-600  leading-8'>Privacy policy</p>
                    <p className='w-96 text-[11px]  text-slate-600  leading-8'>(once order the card refund and return is not acceptable)  </p>
                  </p>
                </div>
                <button class="rounded-[6px] bg-orange-500 w-full h-12 justify-items-center text-white" >Save Changes</button>

              </div>


            </div>

          </div>
          
        </div>
        
      </div>
      </form>
     </div>
     

 
    
  )
}

export default CheckOut