import { NextRequest, NextResponse } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function GET (request: NextRequest) {
  try{
    const {searchParams} = request.nextUrl
    const family = searchParams.get("family")
    const fragrance = searchParams.get("fragrance")
    let query = supabaseService.from("products").select('usage(id, name)')
    if(family){
      query = query.eq("family", family
      )
    }
    if(fragrance){
      query = query.eq("fragrance", fragrance
      )
    }
    const {data, error} = await query
    if(error){
      return NextResponse.json({
      error, message: "error en servidor"
    }, {status: 500})
    }
    const usage = data.map((e) => e.usage)
    const usageForSelect = usage.map((e) => ({value: e.id, label: e.name}))
    return NextResponse.json({
      data: usage, message: "Exito al conseguir los usos", usageForSelect
    }, {status: 200})
  }
  catch(err){
    console.log(err)
    return NextResponse.json({
      error: err, message: "error en servidor"
    }, {status: 500})
  }
}