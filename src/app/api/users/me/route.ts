import {connect} from "@/db/dbconfig";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { getdata } from "@/helper/getdata";

export async function GET(request:NextRequest){
  try {
    const userId= await getdata(request)
    const user= await User.findOne({_id:userId}).select("-password")
    return NextResponse.json({
        message:"User found",
        data:user
    })
    
  } catch (error:any) {
    return NextResponse.json({error:error},{status:400})
    
  }
}