
"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link"
import { Button } from "./ui/moving-border";

function Herosection() {
  return (
    <div className="h-auto md-h[40rem]  w-full rounded-md flex flex-col justify-center relative-overflow-hidden mx-auto py-10 md:py-0 mt-50">
        <div className="p-4 relative z-10 w-full text-center ">
        <Spotlight />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of Music</h1>
            <p    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive musicc courses and transform your music journey today.Whether you are a beginner or looking to refine your skills,join us to unlock your true potential.</p>
            
        </div>
        <div className="mt-4 text-center">
            <Link href={"/courses"}>
            <Button 
            >
            Explore Courses</Button>
            </Link>
        </div>
        </div>
  )
}

export default Herosection