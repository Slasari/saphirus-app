import { NextResponse, NextRequest } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function POST (req: NextRequest) {
    try {
        const {email, password} = await req.json()
        const {data, error} = await supabaseService.auth.signInWithPassword({email, password})
        if(error){
            return NextResponse.json({
                error, message: 'Error al iniciar sesion'
            },{status: 401})
        }
        return NextResponse.json({data}, {status: 200})
    }
    catch (err){
         console.log(err)
        return NextResponse.json({
            err, message: 'Error de servidor'
        }, {status: 500})
    }
}