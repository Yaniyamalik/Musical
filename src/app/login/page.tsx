"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"




export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
       
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            router.push("/profile");
        } catch (error:any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally{
        setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <BackgroundBeamsWithCollision>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 py-50">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
    
        <h1 className="text-center text-2xl">{loading ? "Processing" : "Login"}</h1>
        <hr /><br></br>
        
        <label htmlFor="email">email</label>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white text-center "
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

                    <div className="flex flex-col items-center justify-center ">
              <button
                onClick={onLogin}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600  transform transition-transform duration-200 hover:scale-105 hover:bg-purple-500 hover:text-white"
              >
                Login here
              </button>
              <Link href="/signup" className="text-center text-blue-500 underline transform transition-transform duration-200 hover:scale-105 hover:bg-purple-500 hover:text-white">
                Visit Signup page
              </Link>
            </div>
            
           
            </BackgroundGradient>
        </div>
        </BackgroundBeamsWithCollision>
    )

}