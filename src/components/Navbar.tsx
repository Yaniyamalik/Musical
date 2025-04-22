"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
 export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
         <Menu setActive={setActive}>
            <Link href={"/"}>
         <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
         </Link>
        
         <MenuItem setActive={setActive} active={active} item="Our Courses">
         <div className="flex flex-col space-y-4 text-sm"
         >
         <HoveredLink href="/courses">All Courses</HoveredLink>
         <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
         <HoveredLink href="/courses">Advanced Communication</HoveredLink>
         <HoveredLink href="/courses">Music Production</HoveredLink>
         <HoveredLink href="/courses">Song Writing</HoveredLink>
         </div>
         </MenuItem>
         <Link href ={"/contact"}>
         <MenuItem setActive={setActive} active={active} item="Contact us">
         </MenuItem>
         </Link>
         <Link href={"/profile"}>
         <MenuItem setActive={setActive} active={active} item=" My Profile">
        </MenuItem>
         </Link>
         </Menu>
            
        </div>
    );
}