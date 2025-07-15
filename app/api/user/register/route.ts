import { NextResponse, NextRequest } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function POST (req: NextRequest){
    try {const {email, password, name} = await req.json()
    const {data, error} = await supabaseService.auth.signUp({email, password})
    if(error){
            return NextResponse.json({
                error, message: 'Error al crear cuenta'
            },{status: 401})
        }
        const {data: datauser, error: erroruser} =  await supabaseService.from('users').insert([{id: data.user?.id, name: name, type: 'admin', deleted: false}])
        if(erroruser){
            return NextResponse.json({
                erroruser, message: 'Error al crear usuario'
            },{status: 401})
        }
        return NextResponse.json({
            user: {email},
            datauser, message: 'Exito al crear usuario'
        }, {status: 200})
    }
        catch (err){
             console.log(err)
        return NextResponse.json({
            err, message: 'Error de servidor'
        }, {status: 500})
        }
}