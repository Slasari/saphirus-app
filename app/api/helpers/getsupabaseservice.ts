import { NextRequest } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function getsupabaseservice (request: NextRequest, from: string, message: string) {
    try {
    const {searchParams} = request.nextUrl
    const fragrance = searchParams.get("fragrance") ? searchParams.get("fragrance") : null
    const usage = searchParams.get("usage")? searchParams.get("usage") : null
    const search = searchParams.get("search")? searchParams.get("search") : null
    const family = searchParams.get("family") ? searchParams.get("family") : null
    const { data, error } = await supabaseService.rpc("search_products_with_unaccent", {
      p_family: family,
      p_fragrance: fragrance,
      p_usage: usage,
      p_search: search,
    });
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