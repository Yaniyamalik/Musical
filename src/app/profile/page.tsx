'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { BackgroundGradient } from '@/components/ui/background-gradient';

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me')
            console.log(res.data)
            setData(res.data.data._id)
            
        } catch (error: any) {
            console.error("Error getting user details:", error.message)
            toast.error("Failed to get user details")
        }
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 min-w-200">
      <BackgroundBeamsWithCollision>
            
         <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
            <h1 className='text-center text-2xl'>Profile</h1>
            <hr />
            <p className='text-center'>Profile page</p>
            <br></br>
           < div className="flex flex-col items-center justify-center ">
            <h2 className="p-1 rounded bg-green-500 w-auto  ">
                {data === 'nothing'  ? (
                    <Link key="login-link" href="/login">Login</Link>
                ) : (
                    <Link key="profile-data" href={`/profile/${data}`}>{data}</Link>
                )}
            </h2>

            <hr />
          <br></br>
            <button
                onClick={logout}
                className="bg-yellow-500 mt-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
            <br></br>

            <button
                onClick={getUserDetails}
                className="bg-purple-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-105 hover:bg-purple-500 hover:text-white"
            >
                GetUser Details
            </button>
           </div>
           </BackgroundGradient>
          
       
        </BackgroundBeamsWithCollision>
        </div>
    )
}
