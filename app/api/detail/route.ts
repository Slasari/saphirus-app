import supabaseService from "@/app/lib/supabasewithouttoken";
import { NextRequest, NextResponse } from "next/server";

export async function GET (req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const id = searchParams.get("id");
    const {data, error} = await supabaseService.from('products').select("*, fragrance(*), family(*), usage(*)").eq("id", id).single()
     if (error) {
          return NextResponse.json(
            {
              error,
              message: "error en servidor",
            },
            { status: 500 }
          );
        }
        return NextResponse.json(
      {
        data: data,
        message: "Exito al buscar el producto",
      },
      { status: 200 }
    );
}