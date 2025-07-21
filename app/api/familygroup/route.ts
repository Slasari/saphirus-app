import supabaseService from "@/app/lib/supabasewithouttoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
    try{
        const {searchParams} = request.nextUrl
        const fragrance = searchParams.get("fragrance") ? searchParams.get("fragrance") : null
        const usage = searchParams.get("usage")? searchParams.get("usage") : null
        const search = searchParams.get("search")? searchParams.get("search") : null
        const {data, error} = await supabaseService.rpc("get_families_with_product_count", {p_fragrance: fragrance, p_usage: usage, p_search: search})
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