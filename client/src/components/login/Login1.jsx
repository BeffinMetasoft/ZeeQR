import React, { useState } from 'react'
import {  useLocation, useNavigate } from 'react-router-dom'
import { userLogin } from '../../api/UserRequest'
import { Button, Form, Input } from "antd";



function Login1() {

    const initialValues = { email: '', password: '' }
    const [formValues, setFormValues] = useState(initialValues)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/home"
    const [error, setError] = useState({});
    const [loginError, setLoginError] = useState('')


    const loginData = {
        ...formValues
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        // e.preventDefault()
        setLoginError('')
        const errors = validateForm(loginData)
        setError(errors)
        if (Object.keys(errors).length === 0) {
            try {
                const { data } = await userLogin(loginData)
                console.log(data);
                if (data.success) {
                    localStorage.setItem("refToken", data.refreshToken)

                    navigate(from, { replace: true })

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

        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "enter valide email address"
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
            <div className=" mt-14">
                <Form
                    onFinish={handleSubmit}
                >
                    <Input
                        type="email"
                        name="email"
                        placeholder="Official Email *"
                        value={formValues.name} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white"
                        // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.email}</p>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password *"
                        value={formValues.password} onChange={handleChange}
                        className="bg-transparent placeholder:text-slate-400 font-['Poppins'] text-white mt-5"
                        // autoComplete="off"
                    />
                    <p className='text-red-500'>{error.password}</p>
                    <Button
                        className="w-full h-auto mt-5 bg-white text-black font-semibold font-['Poppins'] text-lg"
                        htmlType="submit"
                    >
                        Done
                    </Button>
                </Form>
                {loginError ?
                    <p className='text-red-500 mx-2 mt-3'>{loginError}</p> : ""
                }
                <p className="mt-4 text-white font-['Poppins']">Forgot Password?</p>
            </div>


        </div>
    )
}

export default Login1