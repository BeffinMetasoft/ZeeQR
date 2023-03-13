import React from 'react'
import { useNavigate } from 'react-router-dom';

function StepperControl({ handleClick, currentStep, steps,displayStep }) {

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        if (currentStep === 1) {
            handleClick("next")
        } else if (currentStep === 3) {

            console.log('submitted');
            handleClick("next")
        }else if(currentStep === steps.length){
            navigate('/order-success')
        } else {
            handleClick("next")
        }
    }

    


    return (
        <div className='container mt-4 mb-8 flex justify-around'>
            <button onClick={() => handleClick()} className={`inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black   bg-white hover:bg-black hover:text-white mt-4 lg:mt-0 ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>Previous</button>
            {currentStep === steps.length ?
             <button onClick={() => handleSubmit()} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black hover:bg-slate-800 transition mt-4 lg:mt-0"> Save</button> : ""

            }
            <button onClick={() => handleSubmit()} className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white border-transparent  bg-black hover:bg-slate-800 transition mt-4 lg:mt-0">
                {currentStep === steps.length  ? "Pay Now" : "Next"}
            </button>
        </div>
    )
}

export default StepperControl