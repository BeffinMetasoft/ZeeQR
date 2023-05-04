import React, { useState } from 'react'
import rotateimg from '../../assests/img/rotate.png';
import { checkOut } from '../../api/UserRequest';
import { useNavigate } from 'react-router-dom';
import Flipcard from '../zeeqrcard/card'
function ZeeqrCard() {
  const [material,setMaterial]=useState("PVC")
  const [materailcolor,setColor]=useState("MBlack")
  const [materailFavoriteColor,setFovouritecolor]=useState("GMBlack")
  const [rotate,setRotate]=useState(false)
 const navigate = useNavigate()
  const initialValues = { firstname: '', lastname: '', companyname: '', logo: '' }
  const [formValues, setFormValues] = useState(initialValues)
  const [error, setError] = useState({});
  const [saveError, setsaveError] = useState('')
  console.log(formValues,error,"formValues");

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues,"handledata");
    const errors = validateForm(formValues)
    setError(errors)
    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await checkOut(formValues)
        console.log(data);
        if (data.success) {
         
         console.log('save success');


          navigate("/home")
        }
      } catch (error) {
        console.log(error.response.data.message);
        setsaveError(error.response.data.message)
      }

    }

  }



  const validateForm = (data) => {
    const error = {};
    
    if (!data.firstname) {
      error.firstname = "firstname required"
    } 
    

    if (!data.lastname) {
      error.lastname = "lastname required"
    } 
    
    if (!data.companyname) {
      error.companyname = "companyname required"
    }
    if (!data.logo) {
      error.logo = "logo required"
    } 
    
   

    return error;
  }
  const Rotation=()=>{
    setRotate(!rotate)
  }
  return (
    <div>
      <div className='container mx-auto px-[100px] m-[100px]'>
        <div className='flex flex-nowrap'>
          <div className='w-4/5'>
            <p className='text-6xl w-[477px] font-medium'>Create your
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
              <p className={`${material==="Luxury"?'text-xs  font-bold underline underline-offset-1  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=> setMaterial("Luxury")}>Luxury</p>

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>

              <p className='text-xs font-medium cursor-pointer' onClick={()=>setColor("Select your Card Color -")}>Select your Card Color -</p>
              {material==="Luxury"? <p className='text-xs font-bold ml-12  underline underline-offset-1  cursor-pointer' >24K Gold</p>
              : <> <p className={`${materailcolor==="MBlack"?'text-xs underline underline-offset-1  font-bold  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setColor("MBlack")}>Matte Black</p>
              <p className={`${materailcolor==="MWhite"?'text-xs  underline underline-offset-1 font-bold  ml-12 cursor-pointer':'text-xs font-medium ml-12 cursor-pointer'}`} onClick={()=>setColor("MWhite")}>Matte White</p> </>}

            </div>
            <div className='flex m-[30px] bg-gray-200 w-[512px] h-12 rounded p-3'>
              <p className='text-xs font-medium w-[200px] cursor-pointer' onClick={()=>setFovouritecolor("Select your Favorite Color -")}>Select your Favorite Color -</p>
              {material==="Luxury"?   <p className='text-xs font-bold underline underline-offset-1  cursor-pointer' >24 Gold on
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
        
            <br></br>
         
            <div className="flex justify-center item-center mt-10 mb-10">
              <img className='cursor-pointer' src={rotateimg} onClick={Rotation}></img></div> <p>{rotate?"":""}</p>
            <p className='md:text-center text-3xl font-medium'>AED 150</p>
          </div>
        </div>
        <div className='flex'>
          <form onSubmit={handleSubmit} className='flex'>
<div className='ml-4'>
            <label class="">
              <input type="text" placeholder="First Name" name="firstname" class="mt-1  w-[196px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"value={formValues.firstname} onChange={handleChange} />
      <p className='text-red-500'>{error.firstname }</p>
            </label>
            </div>
            <div className='ml-4'>
            <label class="">
              <input type="text" placeholder="Last Name" name="lastname"  class="mt-1 block w-[196px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "value={formValues.lastname} onChange={handleChange} />
    <p className='text-red-500'>{error.lastname}</p>
            </label>
          </div>
          <div className='ml-4'>
            <label class="">
              <input type="text" placeholder="Company Name / Tagline (Optional)" name="companyname" class="mt-1 block w-[196px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "value={formValues.companyname} onChange={handleChange} />
    <p className='text-red-500'>{error.companyname}</p>
            </label>
          </div>
          <div className='ml-4'>
            <label class="">

              <input type="text" placeholder="Add your Logo" name="logo"  class="mt-1 block w-[196px] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
    "value={formValues.logo} onChange={handleChange} />
    <p className='text-red-500'>{error.logo}</p>
            </label>

          </div>
          <div className='ml-4'>

            <label class="">


              <button class="mt-1 block w-[196px] px-3 py-2  border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:border-slate-200 disabled:shadow-none text-center bg-orange-500
      invalid:border-pink-500 invalid:text-pink-600 text-white
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    ">Save and Next</button>
            </label>
</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ZeeqrCard