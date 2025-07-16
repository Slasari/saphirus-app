import supabaseService from "@/app/lib/supabasewithouttoken";
import { NextResponse } from "next/server";

export async function GET () {
    try{
        const {data, error} = await supabaseService.rpc("get_families_with_product_count")
        if(error){
            return NextResponse.json({
                error, message: 'Error al conseguir el grupo de familia'
            }, {status: 400})
        }
        return NextResponse.json({
            data, message: 'Exito al conseguir el grupo de familia'
        }, {status: 200})
    }
    catch(err){
        console.log(err);
    return NextResponse.json(
      {
        err,
        message: "Error de servidor",
      },
      { status: 500 }
    )}
}