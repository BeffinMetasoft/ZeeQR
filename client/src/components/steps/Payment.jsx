import React, { useContext } from 'react'
import { StepperContext } from '../../contexts/StepperContext'

function Payment() {
    const { userData} = useContext(StepperContext)

    return (
        <div>
            <div className='flex justify-around flex-wrap'>
                <div className='p-5 w-80 border  shadow-lg rounded-lg'>
                    <h1 className='font-bold text-xl mb-2'>Shipping Address</h1>
                    <p>{userData.shippingName}</p>
                    <p>{userData.address}</p>
                    <p>{userData.phone}</p>
                    <p>{userData.landmark}</p>
                    <p>{userData.pincode}</p>
                </div>
                <div className='p-5  w-80 border max-w-sm shadow-lg rounded-lg'>
                    <h1 className='font-bold text-xl mb-2'>Payment Method</h1>
                    <div >
                    <input type="radio"name="flexRadioDefault" id="radioDefault01" />
                    <label className='ml-3' for="radioDefault01">Cash On Delivery</label>
                    </div>
                    <div>
                    <input type="radio"name="flexRadioDefault" id="radioDefault01" />
                    <label className='ml-3' for="radioDefault01">Online Payment</label>
                    </div>
                   
                    
                </div>
                
            </div>
        </div>
    )
}

export default Payment