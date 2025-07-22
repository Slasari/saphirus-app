import { NextRequest } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";

export async function getsupabaseservice (request: NextRequest, from: string, message: string) {
    try {
    const {searchParams} = request.nextUrl
    const fragrance = searchParams.get("fragrance") ? searchParams.get("fragrance") : null
    const usage = searchParams.get("usage")? searchParams.get("usage") : null
    const search = searchParams.get("search")? searchParams.get("search") : null
    const family = searchParams.get("family") ? searchParams.get("family") : null
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1
    const pageItems = searchParams.get("pageItems") ? Number(searchParams.get("pageItems")) : 8

    const { data, error } = await supabaseService.rpc("search_products_with_unaccent_v2", {
      p_family: family,
      p_fragrance: fragrance,
      p_usage: usage,
      p_search: search,
      p_limit: pageItems,
      p_offset:(page - 1 ) * pageItems, 
    })
    .select("*")
    if (error) {
      return {
          error,
          message: `Error ${message}`,
          status: 400
        
      }
    }
    return {
        data,
        page: page,
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