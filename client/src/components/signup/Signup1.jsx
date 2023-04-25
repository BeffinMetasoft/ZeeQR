import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { userSignup } from '../../api/UserRequest';
import Swal from 'sweetalert2'
import { Button, Checkbox, Form, Input } from "antd";


function Signup1({ setIsData }) {

    const initialValues = { name: '', email: '', companyName: '', phone: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    // const navigate = useNavigate()
    const [error, setError] = useState({});
    const [loginError, setLoginError] = useState('')
    const [check, setcheck] = useState()


    const loginData = {
        ...formValues
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleCheckbox = (e) => {
        if (e.target.checked) {
            // console.log('✅ Checkbox is checked');
            setcheck(true)
        } else {
            // console.log('⛔️ Checkbox is NOT checked');
            setcheck(false)
        }
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()

        const errors = validateForm(loginData)
        setError(errors)
        console.log(Object.keys(errors).length);
        if (Object.keys(errors).length === 0) {
            try {
                const { data } = await userSignup(loginData)
                console.log(data);
                if (data.success) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Succesfully registered, Please login..',
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => {

                        // navigate("/login")
                        setIsData(2);
                    })

                }
            } catch (error) {
                console.log(error.response.data.message);
                setLoginError(error.response.data.message)

            }

        }

    }


    const validateForm = (data) => {
        const error = {};
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const userRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}\s{1}[a-zA-Z0-9]{1,})$/;
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
        }
        if (!data.password) {
            error.password = "password required"
        } else if (data.password.length < 6) {
            error.password = "password should be 6 digit"
        }
        if (!data.confirmPassword) {
            error.confirmPassword = "confirm your password"
        } else if (data.confirmPassword !== data.password) {
            error.confirmPassword = "password is not matching"
        }
        if (!check) {
            error.checkbox = " Please accept the terms & conditions"
        }

        return error;
    }

    return (
        <div>
            <div className="mt-8">
                <Form
                    onFinish={handleSubmit}
                >

                    <Input
                        type="text"
                        name="name"
                        placeholder="Name *"
                        value={formValues.name} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white"
                    // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.name}</p>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Official Email *"
                        value={formValues.email} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                    // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.email}</p>
                    <Input
                        type="text"
                        name="companyName"
                        placeholder="company Name *"
                        value={formValues.companyName} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                    // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.companyName}</p>
                    <Input
                        type="number"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formValues.phone} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                    // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.phone}</p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={formValues.password} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                    // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.password}</p>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password *"
                        value={formValues.confirmPassword} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                    // autoComplete="off"

                    />
                    <p className='text-red-500'>{error.confirmPassword}</p>

                    <Checkbox className="text-white  font-['Poppins'] mt-5" name="checkbox" onClick={handleCheckbox} >
                        I agree to <span className="underline">terms</span> and{" "}
                        <span className="underline">privacy</span> policy
                    </Checkbox>
                    <p className='text-red-500'>{error.checkbox}</p>

                    {loginError ?
                        <p className='text-red-500 mx-2 mt-3'>{loginError}</p> : ""
                    }
                    <Button
                        className="w-full h-auto mt-2 bg-white text-black font-semibold font-['Poppins'] text-lg"
                        htmlType="submit"
                    >
                        Done
                    </Button>
                    
                </Form>
            </div>



        </div>
    )
}

export default Signup1