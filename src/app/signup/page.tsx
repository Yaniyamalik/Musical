'use client'
import React from 'react'
import { useState,useEffect } from 'react'
import axios from "axios"
import { toast } from "react-hot-toast";
import {useRouter} from "next/navigation";
import Link from 'next/link';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { BackgroundGradient } from '@/components/ui/background-gradient';
export default function Signuppage () {
  const[user,setUser]=useState({
    email:"",
    username:"",
    password:""
  })
  const[loading,setLoading]=useState(false)
  const[button,setButton]=useState(false)
  const router=useRouter()

  const onSignup=async ()=>{
   try {
    setLoading(true)
    const response=await axios.post("/api/users/signup",user)
    router.push("/login")
   } catch (error:any) {
    console.log("Signup failed",error.message)
    toast.error(error.messaage)
   }
   finally{
    setLoading(false)
   }
  }
  useEffect(()=>{
  if(user.email.length>0 && user.username.length>0 && user.password.length>0){
    setButton(false)
  }
  else{
    setButton(true)
  }
  },[user])
  return (
    <BackgroundBeamsWithCollision>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 py-50 ">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
    <h1 className='text-center text-2xl'>{loading ? "Processing" : "Signup"}</h1>
    <hr /><br></br>
    <label htmlFor="username">username</label>
    &nbsp;

    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-center "
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({...user, username: e.target.value})}
        placeholder="username"
        />
    <label htmlFor="email">email</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        

    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-center mx-1 "
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value})}
        placeholder="email"
        />
    <label htmlFor="password">password</label>
    &nbsp;

    <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-center "
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({...user, password: e.target.value})}
        placeholder="password"
        />
        <br></br>
        <div className="flex flex-col items-center justify-center ">
  <button
    onClick={onSignup}
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  transform transition-transform duration-200 hover:scale-105 hover:bg-purple-500 hover:text-white"
  >
    {button ? "Complete the form first" : "Signup"}
  </button>
  <Link href="/login" className="text-center text-blue-500 underline">
    Visit login page
  </Link>
</div>
        </BackgroundGradient>
  </div>
  </BackgroundBeamsWithCollision>
   
  )
}
