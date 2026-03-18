import Input from '../components/Input'
import Button from '../components/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { Link } from 'react-router'
import { setPageTitle } from '../utils'

function Signup() {
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    })

    useEffect(() => {
        setPageTitle("Signup - E-commerce")
    }, [])

    const createUser = async () => {
        const response = await axios.post("http://localhost:8050/signup", newUser)

        if(response.data.success){
            toast.success(response.data.message, {id: "signupSuccess"});
            setNewUser({
                name: "",
                email: "",
                mobile: "",
                password: ""
            });

            setTimeout(() => {
                window.location.href = "/login";
            }, 1000);
        }else{
            toast.error(response.data.message, {id: "signupError"});
        }
    }

  return (
    <div>

       <div className='w-95 block mx-auto mt-15 border border-gray-300 rounded px-4 py-6 shadow-md bg-white'>
        <h2 className='text-2xl text-center mb-6 poppins-semibold-italic'>Create Your Account</h2>

        <Input type={"text"} 
        placeholder={"Username"} 
        value={newUser.name} 
        onChange={(e) => setNewUser({...newUser, name: e.target.value})} />

        <Input type={"text"} 
        placeholder={"Email"} 
        value={newUser.email} 
        onChange={(e) => setNewUser({...newUser, email: e.target.value})} />

        <Input type={"number"} 
        placeholder={"Mobile Number"} 
        value={newUser.mobile} 
        onChange={(e) => setNewUser({...newUser, mobile: e.target.value})} />

        <Input type={"password"} 
        placeholder={"Password"} 
        value={newUser.password} 
        onChange={(e) => setNewUser({...newUser, password: e.target.value})} />

        <Button title={"Signup"}
        size={"medium"}
        variant={"primary"}
        onClick={createUser} />

        <Link to={"/login"} className='text-blue-500 hover:underline mt-4 text-center'>
            Already have an account? Login
        </Link>
       </div>
       <Toaster />
    </div>
  )
}

export default Signup
