"use client"

import React, {useState} from 'react'
import Navbar from '../component/Navbar'
import Link from  'next/link'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation';

function RegisterPage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const {data : session} = useSession();
    if(session) redirect('/welcome');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(!name || !email || !password || !confirmpassword){
                    setError("Please complete all inputs!");
                    return;
                }
        if(password != confirmpassword){
            setError("Password do not match!");
            return;
        }

        if (!email.endsWith("@gmail.com")) {
            setError("Only Gmail addresses are allowed!");
            return;
          }
          
        
        try{

            const resCheckuser = await fetch("http://localhost:3000/api/checkuser",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            })

            const {user} = await resCheckuser.json();

            if(user){
                setError("User already exixts!");
                return;
            }

            const res = await fetch("http://localhost:3000/api/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,email,password
                })
        })

            if(res.ok){
                const form = e.target;
                setError("");
                setSuccess("User registration successfully!");
                form.reset();
                router.replace("login");
            }else{
                console.log("User registeration failes.")
            }

        }catch(error){
            console.log("Error during registeration. ",error)
        }

    }

  return (
    <div>
       <Navbar/>
       <div className='flex flex-col items-center min-h-screen '>
        <h3 className='flex mx-auto mt-10 text-2xl' >Register Page</h3>
        <hr className='my-3'/>
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-3'>

            {error && (
                <div className='bg-red-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                    {error}
                </div>
            )}

            {success && (
                <div className='bg-green-500 w-fit text-sm text-white py-1 px-3 rounded-md mt-2'>
                    {success}
                </div>
            )}


            <input onChange={(e) => setName(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type='text' placeholder='Enter your name'/>
            <input onChange={(e) => setEmail(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type='email' placeholder='Enter your email'/>
            <input onChange={(e) => setPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type='password' placeholder='Enter your password'/>
            <input onChange={(e) => setConfirmPassword(e.target.value)} className='block bg-gray-300 p-2 my-2 rounded-md' type='password' placeholder='Confirm your password'/>
            <button type='submit' className='bg-green-500 p-2 rounded-md text-white'>Sing Up</button>
        </form>
        <hr className='my-3'/>
        <p>Already have an account? go to <Link className='text-blue-500 hover:underline' href="login">Login</Link> Page</p>
       </div>
    </div>
  )
}

export default RegisterPage
