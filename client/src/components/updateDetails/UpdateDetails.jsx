import React, { useState } from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import Cards from '../cards/Cards'
import Payment from '../steps/Payment'
import PersonalDetails from '../steps/PersonalDetails'
import ShippingAddress from '../steps/ShippingAddress'
import SocialMedia from '../steps/SocialMedia'
import Stepper from './Stepper'
import StepperControl from './StepperControl'

function UpdateDetails() {

    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData] = useState([])
    console.log(userData, 'user');
    const steps = [
        "Details",
        "Social media",
        "Shipping address",
        "Payment",
        
    ]

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <PersonalDetails />
            case 2:
                return <SocialMedia />
            case 3:
                return <ShippingAddress />
            case 4:
                return <Payment />
            
            default:
        }
    }
    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }
    return (
        <div >
            <h1 className='text-4xl text-center pt-[50px] font-bold'>Update your Details</h1>
            <div className='pt-20 p-2'>
                <Cards />
            </div>
            <div className='md:mx-20 md:px-20'>
                <Stepper steps={steps} currentStep={currentStep} />

            </div>

            <div className='md:my-10 pt-10 md:p-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>

            {/* {currentStep !== steps.length && */}
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
                displayStep={displayStep}
            />
            {/* } */}

        </div>
    )
}

export default UpdateDetails