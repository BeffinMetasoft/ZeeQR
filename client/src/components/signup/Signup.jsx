import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {  userSignup } from '../../api/UserRequest';
import  banner from '../../assests/banner01.webp'

const landingImg = "https://dragon2000-multisite.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/142/2021/01/07101841/Warranty-Banner-1.jpg"

function Signup() {

    const initialValues = { name: '', email: '',companyName:'', phone: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const loginData = {
        ...formValues
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const errors = validateForm(loginData)
        setError(errors)
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length === 0) {
            try {
                const { data } = await userSignup(loginData)
                console.log(data);
                if (data.success) {
                    


                    navigate("/login")
                }
            } catch (error) {
                console.log(error.response.data.message);

            }

        }

    }


    const validateForm = (data) => {
        const error = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const userRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
        if (!data.name) {
            error.name = "user name required"
        } else if (!userRegex.test(data.name)) {
            error.name = "Invalide user name"
        }
        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "enter valide email address"
        }
        if (!data.companyName) {
            error.companyName = "Company name required"
        } 
        if (!data.phone) {
            error.phone = " phone number required"
        } else if (data.phone.length !== 10) {
            error.phone = "number should be 10 digits"
        }
        if (!data.password) {
            error.password = "password required"
        } else if (data.password.length < 6) {
            error.password = "password should be 6 digit"
        }

        return error;
    }

    return (
        <div>
            <div className={`w-full h-screen flex `}>
                <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
                    <div className=' w-full text-center h-[550px] hidden md:block' style={{ backgroundImage: `url(${landingImg})` }}>
                    <img src={banner} alt="" srcset="" />

                        <h1 className='text-5xl m-5 pt-40  font-bold  text-slate-200'>ZeeQR</h1>
                        <p className='text-slate-100 font-bold'>Makes Your Business card Simple...</p>
                    </div>
                    <div className='p-4  flex flex-col justify-around items-center w-96'>
                        <form onSubmit={handleSubmit} className='w-3/4 mt-4 '>
                            <h2 className='text-4xl font-bold text-center mb-2'>Signup</h2>
                            <h6 className='text-lg  text-center mb-8'>Create Your personal account</h6>
                            <div >
                                <input className='border p-2 mb-2 w-full' placeholder='username' name='name' type="text" value={formValues.username} onChange={handleChange} />
                                <p className='text-red-500'>{error.name}</p>
                                <input className='border p-2 mb-2 w-full' placeholder='Email' name='email' type="text" value={formValues.email} onChange={handleChange} />
                                <p className='text-red-500'>{error.email}</p>
                                <input className='border p-2 mb-2 w-full' placeholder='company Name' name='companyName' type="text" value={formValues.companyName} onChange={handleChange} />
                                <p className='text-red-500'>{error.companyName}</p>
                                <input className='border p-2 mb-2 w-full' placeholder='Phone' name='phone' type="number" value={formValues.phone} onChange={handleChange} />
                                <p className='text-red-500'>{error.phone}</p>
                                <input className='border p-2 mb-2 w-full' placeholder='Password' name='password' type="Password" value={formValues.password} onChange={handleChange} />
                                <p className='text-red-500'>{error.password}</p>
                            </div>
                            <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500'>Signup</button>

                        </form>

                        <p className='text-center'>Already have account : <Link to={'/login'}>Login </Link></p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Signup