import { NextRequest, NextResponse } from "next/server";
import supabaseService from "@/app/lib/supabasewithouttoken";
import { supabaseFromToken } from "@/app/lib/supabasefromtoken";

export async function GET() {
  try {
    const { data, error } = await supabaseService.from("products").select("*");

    if (error) {
      return new Response(
        JSON.stringify({
          error,
          message: "Error al conseguir los productos",
        }),
        { status: 400 }
      );
    }
    return new Response(
      JSON.stringify({
        data,
        message: "Exito al conseguir los productos",
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err,
        message: "Error de servidor",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { supabase, error: tokenError, user } = await supabaseFromToken(req);
    console.log(user)
    if (!supabase || tokenError) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }
    console.log(body);
    const { data, error } = await supabase
      .from("products")
      .insert(body)
      .select("*");
      if(error){
        return NextResponse.json({
            error, message: 'Error al crear producto'
        },
        {status: 400})
      }
    return NextResponse.json({
      message: "body",
      data,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err,
        message: "Error de servidor",
      },
      { status: 500 }
    );
  }
}
