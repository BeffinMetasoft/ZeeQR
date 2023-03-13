import React, { useState } from 'react'
import { Box, Button, ChakraProvider, extendTheme, Flex } from '@chakra-ui/react';
import { StepsTheme, Steps, Step, useSteps } from 'chakra-ui-steps';
import FormFields from './FormFields';
import { useForm } from 'react-hook-form'
import Cards from '../cards/Cards';
import { createCard, UploadDetails } from '../../api/UserRequest';
import {  useLocation, useNavigate } from 'react-router-dom';

const theme = extendTheme({
    components: {
        Steps: StepsTheme
    }
})

function DetailsUpdate() {

    const navigate = useNavigate()

    // const initialValues ={logo:"",companyName:"",name:"",email:"",phone:"",website:""}
    const [formDetails, setFormDetails] = useState('')
    const [error, setError] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormDetails({ ...formDetails, [name]: value })
        console.log(formDetails);
    }

    const location = useLocation()
    const cardNumber = location.state?.card
    console.log(cardNumber, 'update');

    const required = {
        value: true,
        message: "This feild is required"
    }

    const { activeStep, nextStep, prevStep } = useSteps({
        initialStep: 0
    })

    const { register, handleSubmit, trigger, formState: { errors } } = useForm()

    const handleNext = async (e) => {
        let isValid = false

        switch (activeStep) {
            case 0:
                isValid = await trigger(["logo", "companyName", "name", "email", "phone", "websiteUrl"])
                break;
            case 1:
                isValid = await trigger(["facebook", "instagram", "skype", "twitter", "linkedIn"])
                break;
            case 2:
                isValid = await trigger(["shippingName", "ShippingAddress", "country", "state", "zipcode", "landmark"])
                break;
            default:
        }
        if (isValid) {
            if (activeStep === 2) {
                console.log('hello');
            }
            nextStep()
        }
    }

    const handleSubmitForm = async (values) => {
        values.cardModel = cardNumber
        setFormDetails(values)
        // console.log(formDetails,'123');
        // console.log(formDetails.logo[0],'123');
        // const files = Object.keys(formDetails)
        // console.log(files,'qwerty');

        const datas = new FormData();
        const file = formDetails?.logo[0]
        datas.append('image', file)

        for (const keys in formDetails) {
            datas.append(`${keys}`, `${formDetails[keys]}`)
        }

        // console.log(datas,'12345');

        try {
            const { data } = await UploadDetails(datas)
            console.log(data, 'result');
            handleNext()
        } catch (error) {
            console.log(error);
        }

    }

    const handleConfirm = async () => {
        console.log(formDetails, 'confirm');

        const errors = validateForm(formDetails)
        setError(errors)
        if (Object.keys(errors).length === 0) {
            const datas = new FormData();
            const file = formDetails?.logo[0]
            datas.append('image', file)

            for (const keys in formDetails) {
                datas.append(`${keys}`, `${formDetails[keys]}`)
            }

            try {
                const { data } = await createCard(datas)
                console.log(data, 'result');
                if (data) {
                    navigate('/order-success',{ state: {data} })
                }
                handleNext()
            } catch (error) {
                console.log(error);
            }
        }
    }

    const validateForm = (data) => {
        const error = {};

        if (!data.paymentMethod) {
            error.paymentMethod = "Select your Payment Method"
        }

        return error;
    }

    return (
        <div>
            <h1 className='text-4xl text-center pt-[50px] font-bold'>Update your Details</h1>
            <div className='pt-20 p-2'>
                <Cards />
            </div>
            <ChakraProvider theme={theme}>
                <div className='flex justify-center '>
                    <Box className="w-4/6 py-10" >
                        <form onSubmit={handleSubmit(handleSubmitForm)} >
                            <Steps activeStep={activeStep}>
                                <Step label="Personal Details">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6 '>

                                            <FormFields label="Logo" error={errors?.logo?.message} >
                                                <input type="file" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   {...register('logo', { required })} />
                                            </FormFields>
                                            <FormFields label="Company Name" error={errors?.companyName?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"   {...register('companyName', { required })} />
                                            </FormFields>
                                            <FormFields label="Name" error={errors?.name?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"    {...register('name', { required })} />
                                            </FormFields>
                                            <FormFields label="Email" error={errors?.email?.message} >
                                                <input type="email" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"    {...register('email', { required })} />
                                            </FormFields>
                                            <FormFields label="Phone" error={errors?.phone?.message} >
                                                <input type="number" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('phone', { required })} />
                                            </FormFields>
                                            <FormFields label="Website url" error={errors?.websiteUrl?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('websiteUrl', { required })} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Social Media">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6'>
                                            <FormFields label="Facebook" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('facebook')} />
                                            </FormFields>
                                            <FormFields label="Instsgram"  >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('instagrsm')} />
                                            </FormFields>
                                            <FormFields label="Skype"  >
                                                <input type="email" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('skype')} />
                                            </FormFields>
                                            <FormFields label="Twitter" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('twitter')} />
                                            </FormFields>
                                            <FormFields label="LinkedIn" >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('linkedIn')} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Shipping Details">
                                    <div className='flex justify-center'>
                                        <Box className='w-4/6 py-20 grid xl:grid-cols-2 xl:gap-6'>
                                            <FormFields label="Full Name" error={errors?.shippingName?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('shippingName', { required })} />
                                            </FormFields>
                                            <FormFields label="Address" error={errors?.shippingAddress?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('shippingAddress', { required })} />
                                            </FormFields>
                                            <FormFields label="Country" error={errors?.country?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('country', { required })} />
                                            </FormFields>
                                            <FormFields label="State" error={errors?.state?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('state', { required })} />
                                            </FormFields>
                                            <FormFields label="Pincode" error={errors?.zipcode?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('zipcode', { required })} />
                                            </FormFields>
                                            <FormFields label="Landmark" error={errors?.landmark?.message} >
                                                <input type="text" className="block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...register('landmark', { required })} />
                                            </FormFields>
                                        </Box>
                                    </div>
                                </Step>
                                <Step label="Payment">
                                    <div className='flex justify-around flex-wrap py-10'>
                                        <div className='p-5 w-80 border  shadow-lg rounded-lg'>
                                            <h1 className='font-bold text-xl mb-2'>Shipping Address</h1>
                                            <p>{formDetails.shippingName}</p>
                                            <p>{formDetails.address}</p>
                                            <p>{formDetails.phone}</p>
                                            <p>{formDetails.landmark}</p>
                                            <p>{formDetails.pincode}</p>

                                        </div>
                                        <div className='p-5  w-80 border max-w-sm shadow-lg rounded-lg'>
                                            <h1 className='font-bold text-xl mb-2'>Payment Method</h1>
                                            <p className='text-red-500'>{error.paymentMethod}</p>
                                            <div >
                                                <input type="radio" name="paymentMethod" id="radioDefault01" value="cash" onChange={handleChange} required />
                                                <label className='ml-3' for="radioDefault01">Cash On Delivery</label>
                                            </div>
                                            <div>
                                                <input type="radio" name="paymentMethod" id="radioDefault01" value="online" onChange={handleChange} />
                                                <label className='ml-3' for="radioDefault01">Online Payment</label>
                                            </div>


                                        </div>

                                    </div>
                                </Step>
                            </Steps>
                            <Flex gap={2} my={2} >
                                <div className='flex w-full justify-around'>
                                    {activeStep !== 0 && <Button onClick={prevStep}>Previous</Button>}
                                    {/* {activeStep !== 2 && <Button onClick={handleNext}>Next</Button>} */}
                                    {activeStep !== 2 && (activeStep === 3 ? <Button onClick={handleConfirm} >Pay Now</Button> : <Button onClick={handleNext}>Next</Button>)}
                                    {/* {activeStep === 3 && <Button onClick={handleConfirm()} >Pay Now</Button>} */}
                                    {activeStep === 2 && <Button type='submit' >Save and Confirm</Button>}
                                </div>

                            </Flex>
                        </form>
                    </Box>
                </div>
            </ChakraProvider>
        </div>
    )
}

export default DetailsUpdate