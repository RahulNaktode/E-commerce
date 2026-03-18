import React, { use } from 'react'
import Input from '../components/Input'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import axios from 'axios'
import { setPageTitle } from '../utils'
import { Link } from 'react-router';
import toast, { Toaster } from 'react-hot-toast'

function Login() {
    const [userLogIn, setUserLogin] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        setPageTitle("Login - E-commerce")
    }, [])

    const checkUserLogin = async () => {
        const response = await axios.post("http://localhost:8050/login", userLogIn);

        if(response.data.success){
            toast.success(response.data.message, {id: "loginSuccess"});
            setUserLogin({
                email: "",
                password: ""
            });

            const { jwtToken, data } = response.data;
            localStorage.setItem("userJwtToken", jwtToken);
            localStorage.setItem("userData", JSON.stringify(data));

            setTimeout(() => {
                window.location.href = "/";
            }, 1000);
        }else{
            toast.error(response.data.message, {id: "loginError"});
        }
    }
  return (
    <div>

      <div className='w-95 block mx-auto mt-15 border border-gray-300 rounded px-4 py-6 shadow-md bg-white'>
        <h2 className='text-2xl text-center mb-6 poppins-semibold-italic'>Login to Your Account</h2>
        <Input type={"text"} 
        placeholder={"Email"} 
        value={userLogIn.email}
        onChange={(e) => setUserLogin({...userLogIn, email: e.target.value})} />

        <Input type={"password"} 
        placeholder={"Password"} 
        value={userLogIn.password}
        onChange={(e) => setUserLogin({...userLogIn, password: e.target.value})} />

        <Button title={"Login"}
        size={"medium"}
        variant={"primary"}
        onClick={checkUserLogin} />

        <Link to={"/signup"} className='text-blue-500 hover:underline mt-4 text-center'>
            Don't have an account? Signup
        </Link>
      </div>
      <Toaster />
    </div>
  )
}

export default Login
