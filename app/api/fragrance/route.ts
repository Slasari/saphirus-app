import { NextRequest, NextResponse } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function GET (request: NextRequest) {
  try{
    const {searchParams} = request.nextUrl
    const family = searchParams.get("family")
    let query = supabaseService.from("products").select('fragrance(id, name)')
    if(family){
      query = query.eq("family", family
      )
    }
    const {data, error} = await query
    if(error){
      return NextResponse.json({
      error, message: "error en servidor"
    }, {status: 500})
    }
    const fragrance = data.map((e) => e.fragrance)
    return NextResponse.json({
      data: fragrance, message: "Exito al conseguir las fragancias"
    }, {status: 200})
  }
  catch(err){
    console.log(err)
    return NextResponse.json({
      error: err, message: "error en servidor"
    }, {status: 500})
  }
}