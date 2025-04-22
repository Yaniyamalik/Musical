import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { request } from "http";

export async function getdata(request:NextRequest){
    try {

        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error:any) {
        throw new error(error.message)
        
    }
}