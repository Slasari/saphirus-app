import supabaseService from "@/app/lib/supabasewithouttoken";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabaseService
      .from("products")
      .select("*")
      .eq("isFeatured", true)
      .limit(4);
      console.log("hola", data)

    if(error){
            return NextResponse.json({
                error, message: 'Error al conseguir los destacados'
            }, {status: 400})
        }
        return NextResponse.json({
            data, message: 'Exito al conseguir los destacados'
        }, {status: 200})
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        error: err,
        message: "error en servidor",
      },
      { status: 500 }
    );
  }
}
