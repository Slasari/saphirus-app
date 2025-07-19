import { NextRequest } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function getsupabaseservice (request: NextRequest, from: string, message: string) {
    try {
    const {searchParams} = request.nextUrl
    console.log(searchParams)
    const family = searchParams.get("family")
    const fragrance = searchParams.get("fragrance")
    let query = supabaseService.from(from).select("*, fragrance(name, id)")

    if(family){
      query = query.eq("family", family);
    }
     if(fragrance){
      query = query.eq("fragrance", fragrance)
    }
    const {data, error} = await query
    if (error) {
      return {
          error,
          message: `Error ${message}`,
          status: 400
        
      }
    }
    return {
        data,
        message: `Exito ${message}`,
       status: 200
    }
  } catch (err) {
    console.log(err);
    return {
        error : err,
        message: "Error de servidor",
        status: 500
    } 
  }
}